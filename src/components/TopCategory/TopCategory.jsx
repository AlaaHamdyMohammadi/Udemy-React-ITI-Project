/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './TopCategory.css';
import { NavLink } from 'react-router-dom';
import axiosInstance from '../../axiosConfig/instance';
import { useTranslation } from 'react-i18next';
const BASE_URL = "https://udemy-clone-uief.onrender.com";
export default function TopCategory() {
    const { t } = useTranslation();

  const [categories, setCategories] = useState([]);
  useEffect(function(){
    axiosInstance.get('/categories').then(res => {
      //console.log(res.data.data.documents.slice(0,10))
      setCategories(res.data.data.documents.slice(0,10))
    })
  }, []);
  return (
    <div className="mt-5 p-4">
      <h3 className="pb-3">{t('Top categories')}</h3>

      <div className="container-fliud row ">
        {categories.map((item) => (
          <>
            <div
              key={item.id}
              className="categoryImg col-lg-3 col-md-4 col-sm-6 bg-cover object-cover "
              style={item.style}
            >
              <NavLink
                className="text-gray-900 no-underline hover:text-violet-600"
                to={`/categoriesPage/${item._id}`}
              >
                <img
                  className="image"
                  src={`${BASE_URL}/img/categories/${item.photo}`}
                  alt=""
                />
                <p className="text-center font-bold">{item.name}</p>
              </NavLink>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
