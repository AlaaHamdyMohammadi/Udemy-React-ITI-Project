/* eslint-disable no-unused-vars */
import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setWishList } from '../../store/slices/WishList';
import './../Profile/Profile.css';
import axios from 'axios';

function MyLearning() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const isSuccess = queryParams.get('success');
  const [courseData, setCourseData] = useState([]);
  const token = localStorage.getItem('token');
  const wishList = useSelector((state) => state.wishList.wishList);
  const dispatch = useDispatch();

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

  useEffect(() => {
    if (isSuccess === 'true') {
      axios
        .get('http://localhost:4000/api/v1/enrolled', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setCourseData(res.data.enrolledCourses);
          //console.log(res.data.enrolledCourses);
        })
        .catch((err) => {
          console.error('Error fetching purchased courses: ', err);
        });
    }
  }, [isSuccess, token]);

  return (
    <div>
      <div>
        <Helmet>
          <title>
            Online Courses - Learn Anything, On Your Schedule | Udemy
          </title>
        </Helmet>
        <div className=" relative h-48" style={{ backgroundColor: '#2d2f31' }}>
          <h1 className="absolute left-64 top-16 font-bold text-gray-100">
            My Learning
          </h1>
          <NavLink
            to="/my-learning"
            className=" absolute left-64 top-[163px] font-bold text-gray-100 no-underline hover:text-stone-300"
          >
            All Courses
          </NavLink>
          <NavLink
            to="/my-learning/myList"
            onClick={(item) => addToFav(item)}
            className="absolute left-96 top-[163px] font-bold text-gray-100 no-underline hover:text-stone-300"
          >
            Wishlist
          </NavLink>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default MyLearning;
