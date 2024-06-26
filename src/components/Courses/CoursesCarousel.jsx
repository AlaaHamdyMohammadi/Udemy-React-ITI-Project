/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Carousel } from 'react-bootstrap';
import ModalCard from './ModalCard';
import { useState } from 'react';
import {  useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';
import Spinner from 'react-bootstrap/Spinner';
const BASE_URL = 'https://udemy-clone-uief.onrender.com';

function CoursesCarousel() {
  const courses = useSelector(
    (state) => state.categoryCourses.categoryCourse.courses,
  );

  
  if (courses) {
    const firstSetOfCourses = courses.slice(0, 5);
    const secondSetOfCourses = courses.slice(5, 10);
    return (
      <>
        <Carousel className="mb-2 mt-2">
          <Carousel.Item>
            <div className="flex justify-between">
              {firstSetOfCourses.map((course) => {
                return <CardItem key={course._id} course={course} />;
              })}
              {firstSetOfCourses.map((course) => {
                return <CardItem key={course._id} course={course} />;
              })}
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="flex justify-between">
              {secondSetOfCourses.map((course) => {
                return <CardItem key={course._id} course={course} />;
              })}
              {secondSetOfCourses.map((course) => {
                return <CardItem key={course._id} course={course} />;
              })}
            </div>
          </Carousel.Item>
        </Carousel>
      </>
    );
  } else {
    return (
      <>
      <Spinner animation="border" variant="primary" />
      </>
    );
  }
}

function CardItem(props) {
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <div className="relative">
      <NavLink
        className="text-white no-underline"
        to={`/CourseDetials/${props.course._id}`}
      >
        <img
          className="h-40 w-60"
          src={`${BASE_URL}/img/courses/${props.course.photo}`}
          onMouseOver={handleShow}
          onMouseLeave={handleClose}
        />
        <div className="w-64 pt-2 font-bold text-black">
          {props.course.title}
        </div>
        <div className="">
          <div className="text-sm text-gray-500">
            by:{props.course.instructor}
          </div>
          <span className=" flex flex-row">
            <span className="text-black">{props.course.rating}</span>

            <span className="flex flex-row pt-1 text-yellow-500 ">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <BsStarHalf />
            </span>
          </span>
          <div className="flex flex-row gap-2">
            <span className=" font-semibold text-black">
              E${props.course.price}
            </span>

            <span className=" text-sm	text-gray-500 line-through">
              E$ {props.course.DiscountPrice}
            </span>

            <span className="text-right text-sm	text-gray-900 ">
              ({props.course.NumRating})
            </span>
          </div>
          <p className=" bestseller w-fit h-fit text-xs">
            {props.course.BestSeller}
          </p>
        </div>
      </NavLink>

      {showModal && (
        <ModalCard
          course={props.course}
          handleShow={handleShow}
          handleClose={handleClose}
        />
      )}
    </div>
  );
}

export default CoursesCarousel;
