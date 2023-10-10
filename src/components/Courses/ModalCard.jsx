/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { BsCheckLg } from 'react-icons/bs';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import Button from '../Button';
import { useDispatch, useSelector } from 'react-redux';
import { setWishList } from '../../store/slices/WishList';
import { setCartItems } from '../../store/slices/CartItems';
import { setTotalCost } from '../../store/slices/TotalCost';
 
function ModalCard({course, handleShow, handleClose }) {
  const dispatch=useDispatch()
  const wishList = useSelector(
    (state) => state.wishList.wishList
  );
  
  const TotalPrice = useSelector(
    (state) => state.TotalCost.TotalCost
  );
  
  const cartItems = useSelector(
    (state) => state.cartItems.cartItems
  );

  function addToCart(course) {
    var check = cartItems.map((item) => {
      if (item._id == course._id) {
        return true;
      } else {
        return false;
      }
    });
    console.log(check);
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
    console.log(cartItems, TotalPrice);
  }

  function addToFav(course) {
    var check = wishList.map((wish) => {
      if (wish._id == course._id) {
        return true;
      } else {
        return false;
      }
    });
    console.log(check);
    var wish = [];
    if (check.includes(true) || check == []) {
      dispatch(setWishList([...wishList]));
      wish = [...wishList];
    } else {
      dispatch(setWishList([...wishList, course]));
      wish = [...wishList, course];
    }
    localStorage.setItem('wishList', JSON.stringify(wish));
    console.log(wishList);
  }

  return (
    <div
      className="absolute left-60 shadow-md top-2 z-10 w-80 border-2  bg-white pl-5 pr-1 text-sm"
      onMouseOver={handleShow}
      onMouseLeave={handleClose}
    >
      <h6 className="mt-2  font-bold">
        {course.title}
      </h6>
      <span className="bestseller h-fit w-fit text-xs">
                  {course.BestSeller ? 'Best Seller' : ''}
                </span>
      <span className="pl-2">{course.updated}</span>
      <p className="text-sm">15 total hours . Beginner Level . Subtitles, CC</p>
      <p className="">
        {(course.description)?course.description.slice(0,200)+"...":""}
      </p>
      
      {/*<p className="flex">
        <BsCheckLg className=" text-3xl" />
        FULLY UPDATED FOR CLF-C01 & CLF-C02: Pass the AWS Certified Cloud
        Practitioner Certification
  </p>*/}

      <div className="flex items-center">
        <Button width="w-72" backgroundColor="bg-violet-600 hover:bg-violet-800"
          text="text-white"
        >
         <h5 onClick={()=>addToCart(course)}>Add to cart</h5> 
        </Button>
        <AiOutlineHeart  onClick={()=>addToFav(course)} className="ml-2 cursor-pointer rounded-full border-2 border-black p-1 text-5xl hover:bg-gray-300" />
      </div>
    </div>
  );
}

export default ModalCard;
