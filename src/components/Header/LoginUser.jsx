/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { BsSearch, BsCart3, BsGlobe, BsBell } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { useContext, useEffect, useState } from 'react';
import { authentication } from '../../contextConfig/authentication';
import { getMe } from '../../services/authentication';

function LoginUser({
  setTON,
  setMyLearning,
  myLearning,
  setIsActive,
  handleLogout,
  isActive,
  wishList,
  setWishList,
  addToCart,
  setAddToCart,
}) {
 

  return (
    <div className="d-flex ms-3 ">
      <Instructor setTON={setTON} />
      <MyLearning myLearning={myLearning} setMyLearning={setMyLearning} />
      <GoToWishList wishList={wishList} setWishList={setWishList} />
      <GoToCart addToCart={addToCart} setAddToCart={setAddToCart} />
      <GoToNotifications />
      <DropDownList
        isActive={isActive}
        setIsActive={setIsActive}
        handleLogout={handleLogout}
      />
    </div>
  );
}

function Instructor({ setTON }) {
  return (
    <div
      className="ms-1 mt-3"
      onMouseOver={() => {
        setTON(true);
      }}
      onMouseLeave={() => {
        setTON(false);
      }}
    >
      <div className="base text-decoration-none ">
        <NavLink
          className="text-sm text-gray-950 no-underline hover:text-violet-600"
          to="/teach-on-udemy"
        >
          Instructor
        </NavLink>
      </div>
    </div>
  );
}

function MyLearning({ setMyLearning, myLearning }) {
  return (
    <div
      className="ms-3 mt-3"
      onMouseOver={() => {
        setMyLearning(true);
      }}
      onMouseLeave={() => {
        setMyLearning(false);
      }}
    >
      <div className="base text-decoration-none ">
        <NavLink
          className="text-sm text-gray-950 no-underline hover:text-violet-600"
          to="/my-learning"
        >
          My Learning
        </NavLink>
        {myLearning ? (
          <div
            onMouseOver={() => {
              setMyLearning(true);
            }}
            onMouseLeave={() => {
              setMyLearning(false);
            }}
            className="subDiv fw-bold w-72 bg-white p-3 text-center"
          >
            <NavLink
              className="btn rounded-0 m-lg-3 col-8 text-decoration-none m-1 w-96 bg-black p-2 text-white"
              to="/my-learning"
            >
              Go to My learning
            </NavLink>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

function GoToWishList({wishList, setWishList}) {
  return (
    <div
      className="ms-3 mt-3"
      onMouseOver={() => {
        setWishList(true);
      }}
      onMouseLeave={() => {
        setWishList(false);
      }}
    >
      <div className="base text-decoration-none ">
        <NavLink
          className="text-gray-950 text-xl no-underline hover:text-violet-600"
          to="/my-wishList"
        >
          <AiOutlineHeart />
        </NavLink>
        {wishList ? (
          <div
            onMouseOver={() => {
              setWishList(true);
            }}
            onMouseLeave={() => {
              setWishList(false);
            }}
            className="subDiv fw-bold w-72 bg-white p-3 text-center"
          >
            <NavLink
              className="btn rounded-0 m-lg-3 col-8 text-decoration-none m-1 w-96 bg-black p-2 text-white"
              to="/my-wishList"
            >
              Go to WishList
            </NavLink>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

function GoToCart({ addToCart, setAddToCart }) {
  return (
    <div
      className="ms-3 mt-3"
      onMouseOver={() => {
        setAddToCart(true);
      }}
      onMouseLeave={() => {
        setAddToCart(false);
      }}
    >
      <div className="base text-decoration-none ">
        <NavLink
          className="text-xl text-gray-950 no-underline hover:text-violet-600"
          to="/cart"
        >
          <BsCart3 />
        </NavLink>
        {addToCart ? (
          <div
            onMouseOver={() => {
              setAddToCart(true);
            }}
            onMouseLeave={() => {
              setAddToCart(false);
            }}
            className="subDiv fw-bold w-72 bg-white p-3 text-center"
          >
            <NavLink
              className="btn rounded-0 m-lg-3 col-8 text-decoration-none m-1 w-96 bg-black p-2 text-white"
              to="/cart"
            >
              Go to Cart
            </NavLink>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

function GoToNotifications() {
  return (
    <div className="align-self-center  ms-3.5">
      <NavLink
        className="text-xl font-bold text-gray-950 hover:text-violet-600"
        to="/cart"
      >
        <BsBell />
      </NavLink>
    </div>
  );
}

function DropDownList({ setIsActive, isActive, handleLogout }) {
  
  const { userName, setUsername } = useContext(authentication);
  const { user, setUser } = useContext(authentication);
  const { email, setEmail } = useContext(authentication);
  useEffect(() => {
    getMe()
      .then((res) => {
        const user = res.data.data.document.username.split(' ');
        const email = res.data.data.document.email;
        let userChar = user.map((char) => char.charAt(0)).join('');
        //console.log(userChar);
        setUsername(userChar);
        setEmail(email);
      })
      .catch((err) => {
        console.error('Error fetching user data:', err);
        throw err;
      });
  }, [setUsername, setEmail]);
  useEffect(() => {
    getMe()
      .then((res) => {
        const user = res.data.data.document.username;
        setUser(user);
      })
      .catch((err) => {
        console.error('Error fetching user data:', err);
        throw err;
      });
  }, [setUser]);
  return (
    <Nav className="me-auto">
      <div
        className="ms-4"
        onMouseOver={() => {
          setIsActive(true);
        }}
        onMouseLeave={() => {
          setIsActive(false);
        }}
      >
        <div className="base text-decoration-none text-dark mt-3">
          <NavLink
            style={{ backgroundColor: '#2d2f31' }}
            className="relative rounded-full p-2 font-bold text-white no-underline"
            to="/profile"
          >
            {userName}
          </NavLink>
          <div className="absolute -top-2 right-0 h-3 w-3 rounded bg-violet-600"></div>

          {isActive ? (
            <div
              onMouseOver={() => {
                setIsActive(true);
              }}
              onMouseLeave={() => {
                setIsActive(false);
              }}
              className="subDiv z-10 flex w-60 flex-col bg-white p-3 text-left"
            >
              <div className="flex items-center">
                <NavLink
                  style={{ backgroundColor: '#2d2f31' }}
                  className="rounded-full p-2 font-bold text-white no-underline"
                  to="/profile"
                >
                  {userName}
                </NavLink>
                <NavLink
                  to="/profile"
                  className="cursor-pointer pl-2 pt-1 text-lg font-bold text-gray-950 no-underline hover:text-violet-600"
                >
                  {user}
                </NavLink>
              </div>
              <p className="border-b-2 text-center pb-4 text-xs text-gray-400">
                {email}
              </p>

              <NavLink
                to="/my-learning"
                className=" cursor-pointer pt-4 text-sm text-gray-900 no-underline hover:text-violet-600"
              >
                My Learning
              </NavLink>

              <NavLink
                to="/cart"
                className="cursor-pointer pt-4 text-sm text-gray-900 no-underline hover:text-violet-600"
              >
                My Cart
              </NavLink>

              <NavLink
                to="/my-wishList"
                className="cursor-pointer border-b-2 pb-4 pt-4 text-sm text-gray-900 no-underline hover:text-violet-600"
              >
                My WishList
              </NavLink>

              <NavLink
                to="/instractor"
                className="cursor-pointer pt-4 text-sm text-gray-900 no-underline hover:text-violet-600"
              >
                Instructor
              </NavLink>

              <NavLink
                to="/profile"
                className="cursor-pointer border-b-2 pb-4 pt-4 text-sm text-gray-900 no-underline hover:text-violet-600"
              >
                Edit Profile
              </NavLink>

              <NavLink
                to="/logout"
                onClick={handleLogout}
                className="cursor-pointer border-b-2 pb-4 pt-4 text-sm text-gray-900 no-underline hover:text-violet-600"
              >
                Logout
              </NavLink>

              <NavLink
                to="/udemy-business"
                className="cursor-pointer pt-4 text-lg font-bold text-gray-900 no-underline hover:text-violet-600"
              >
                Udemy Business
              </NavLink>
              <p className="text-xs text-gray-500">
                Bring learning to your company
              </p>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </Nav>
  );
}

export default LoginUser;