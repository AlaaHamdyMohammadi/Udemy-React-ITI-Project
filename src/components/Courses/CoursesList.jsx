/* eslint-disable no-unused-vars */
import ContentOutOfTheBox from './ContentOutOfTheBox';
import ContentInTheBox from './ContentInTheBox';
import CoursesCarousel from './CoursesCarousel';
import { useEffect, useState } from 'react';
import axiosInstance from '../../axiosConfig/instance';
import { useSelector } from 'react-redux';


function CoursesList() {
  const [categories,setCategories]=useState([])
  const[defCat,setDefCat]=useState([])
  const category=useSelector((state)=>state.category.category)
  const courses=useSelector((state)=>state.categoryCourses.categoryCourse.courses)

  function getCategory () {
    axiosInstance
      .get('/subCategories')
      .then((res) => {
        const numOfCategories = res.data.data.subCategories.slice(0, 7);
        setCategories(numOfCategories)
        setDefCat(numOfCategories[0])
      })
      .catch((err) => console.log(err));
  }

  useEffect(function () {
    getCategory()
  }, []);

  return (
    <div className=" mt-5 p-4">
      <ContentOutOfTheBox categories={categories} defCategory={defCat} />
      <div className="border-1 mt-2.5 border-solid border-slate-400 p-3">
        <ContentInTheBox category={category} categ={defCat} />
        <CoursesCarousel courseArr={courses} categ={defCat} />
        
      </div>
    </div>
  );
}

export default CoursesList;
