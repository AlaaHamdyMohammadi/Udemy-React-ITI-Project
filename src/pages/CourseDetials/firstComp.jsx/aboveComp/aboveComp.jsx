/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { LuAlarmClock } from 'react-icons/lu';
import { AiOutlineHeart } from 'react-icons/ai';
import { GoVideo } from 'react-icons/go';
import { AiOutlineFile } from 'react-icons/ai';
import { BiCode } from 'react-icons/bi';
import { HiOutlineFolderDownload } from 'react-icons/hi';
import { IoMdPhonePortrait } from 'react-icons/io';
import { AiFillThunderbolt, AiFillTrophy } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { changeScrollBar } from '../../../../store/slices/ScrollBar';
import Spinner from '../../../../components/Spinner';
import { setWishList } from '../../../../store/slices/WishList';
import { setTotalCost } from '../../../../store/slices/TotalCost';
import { setCartItems } from '../../../../store/slices/CartItems';
import { useNavigate } from 'react-router-dom';
import './above.css';
import Video from './Video';

export default function AboveList({ course }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const Bar = useSelector((state) => state.ScrollBar.ScrollBar);
  const [isLoading, setIsLoading] = useState(true);

  const wishList = useSelector((state) => state.wishList.wishList);
  const cartItems = useSelector((state) => state.cartItems.cartItems);
  const TotalPrice = useSelector((state) => state.TotalCost.TotalCost);

  function addToCart(course) {
    var check = cartItems.map((item) => {
      if (item._id == course._id) {
        return true;
      } else {
        return false;
      }
    });
    //console.log(check);
    var cart = [];
    var price = TotalPrice;
    if (check.includes(true) || check == []) {
      dispatch(setCartItems([...cartItems]));
      cart = [...cartItems];
    } else {
      dispatch(setCartItems([...cartItems, course]));
      cart = [...cartItems, course];
      if (course.DiscountPrice) {
        dispatch(setTotalCost(TotalPrice + course.DiscountPrice));
        price = TotalPrice + course.DiscountPrice;
      } else if (course.price) {
        dispatch(setTotalCost(TotalPrice + course.price));
        price = TotalPrice + course.price;
      }
    }
    localStorage.setItem('cartItems', JSON.stringify(cart));
    localStorage.setItem('TotalPrice', price);
    //console.log(cartItems, TotalPrice);
  }

  function addToFav(course) {
    var check = wishList.map((wish) => {
      if (wish._id == course._id) {
        return true;
      } else {
        return false;
      }
    });
    //console.log(check);
    var wish = [];
    if (check.includes(true) || check == []) {
      dispatch(setWishList([...wishList]));
      wish = [...wishList];
    } else {
      dispatch(setWishList([...wishList, course]));
      wish = [...wishList, course];
    }
    localStorage.setItem('wishList', JSON.stringify(wish));
    //console.log(wishList);
  }

  const handleScroll = () => {
    if (window.scrollY >= 97 && window.scrollY < 2000) {
      document.getElementsByClassName('above')[0].style.position = 'fixed';
    } else {
      document.getElementsByClassName('above')[0].style.position = '';
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(function () {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="customwidthh  flex flex-col border border-white shadow shadow-gray-400">
          {/* video */}
          <div>
            <Video course={course} />
          </div>
          {/* without video */}

          <div className="above customwidthh bg-white  shadow shadow-gray-400 ">
            <div className="container   flex flex-col pt-4">
              {/* price */}
              <div>
                <div className="flex flex-row gap-3">
                  <span className="text-4xl font-semibold text-black">
                    E${course.price}
                  </span>

                  <span className="pt-3 text-sm	text-gray-500 line-through">
                    E$ {course.DiscountPrice}
                  </span>
                  <span className="pt-3  text-right text-sm	text-gray-900 ">
                    {course.percentageDis}% off
                  </span>
                </div>
                <span className="flex flex-row text-red-700">
                  <span className="p-1 font-bold">
                    <LuAlarmClock />
                  </span>
                  <span className="font-bold"> {course.timeDis} hours </span>
                  <span className="pl-2"> left this price!</span>
                </span>
              </div>

              {/* buttons */}
              <div>
                <div className="my-2 grid grid-cols-4 gap-2">
                  <span className="col-span-3">
                    <button
                      onClick={() => addToCart(course)}
                      type="button"
                      className=" checkout11 w-100  bg-violet-600 px-4 py-3 font-bold text-white hover:bg-violet-700  "
                    >
                      Add To Cart
                    </button>
                  </span>

                  <span className="col-span-1">
                    <button
                      onClick={() => addToFav(course)}
                      type="button"
                      className=" checkout11 w-100 h-100  border border-black bg-white px-4 py-3 font-bold text-black hover:bg-gray-400  "
                    >
                      <AiOutlineHeart className="w-100" />
                    </button>
                  </span>
                </div>
                <div className="my-2">
                  <button
                    type="button"
                    onClick={() => {
                      navigate('/cart');
                      addToCart(course);
                    }}
                    className=" checkout11 w-100 border border-black bg-white px-4 py-3 font-bold text-black hover:bg-gray-400  "
                  >
                    Buy Now
                  </button>
                </div>
              </div>

              {/* static */}
              <div className="p-2 text-center  text-sm text-black">
                30-Day Money-Back Guarantee
              </div>
              {/* course include */}
              <div>
                <div className="text-lg font-bold text-black">
                  This course includes:
                </div>
                <div>
                  <ul className="pl-0 text-left text-sm text-gray-700 ">
                    <li className="mb-2 flex flex-row gap-3">
                      <span className="p-1 ">
                        <GoVideo />
                      </span>
                      <span>{course.duration} hours on-demand video</span>
                    </li>
                    <li className="mb-2 flex  flex-row gap-3">
                      <span className="p-1">
                        <BiCode />
                      </span>
                      <span>{course.exercises} coding exercises</span>
                    </li>
                    <li className="mb-2 flex flex-row gap-3">
                      <span className="p-1">
                        <AiOutlineFile />
                      </span>
                      <span>{course.articles} articles</span>
                    </li>
                    <li className="mb-2 flex  flex-row gap-3">
                      <span className="p-1">
                        <HiOutlineFolderDownload />
                      </span>
                      <span>{course.resources} downloadable resources</span>
                    </li>
                    <li className="mb-2 flex  flex-row gap-3">
                      <span className="p-1">
                        <IoMdPhonePortrait />
                      </span>
                      <span>Access on mobile and TV</span>
                    </li>
                    <li className="mb-2 flex  flex-row gap-3">
                      <span className="p-1">
                        <AiFillThunderbolt />
                      </span>
                      <span>Full lifetime access</span>
                    </li>
                    <li className="mb-2 flex  flex-row gap-3">
                      <span className="p-1">
                        <AiFillTrophy />
                      </span>
                      <span>Certificate of completion</span>
                    </li>
                  </ul>
                </div>
                {/* gift &copon */}
                <div className="flex flex-row gap-4 text-gray-900 ">
                  <div className="pl-5 ">
                    <a
                      className="border-b-black-600 font-bold text-gray-900  no-underline"
                      href="#"
                    >
                      Gift this course
                    </a>
                  </div>
                  <div className="pl-5">
                    <a
                      className="border-b-black-600 font-bold text-gray-900  no-underline"
                      href="#"
                    >
                      Apply coupon
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <hr className=" w-100 text-black" />
            <div className="container flex flex-col">
              <div className="text-lg font-bold text-black">
                Training 5 or more people?
              </div>
              <div className="text-sm text-gray-500">
                Get your team access to 22,000+ top Udemy courses anytime,
                anywhere.
              </div>
              <div className="my-2">
                <button
                  type="button"
                  className=" checkout11 w-100 mb-3 border border-black  bg-white py-2 font-bold text-black hover:bg-gray-700  "
                >
                  Try Udemy Business
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
