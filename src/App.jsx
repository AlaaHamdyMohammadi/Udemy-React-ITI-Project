/* eslint-disable no-unused-vars */
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import SignUp from './pages/SignUp';
import CartPage from './pages/CartPage';
import InstructorPage from './pages/InstructorPage';
import TeachOnUdemy from './pages/TeachOnUdemy';
import { Provider } from 'react-redux';
import store from './store/store';
import Business from './pages/Business';
import UdemyProfile from './pages/UdemyProfile/UdemyProfile';
import { AuthProvider } from './contextConfig/authentication';
import { useState } from 'react';
import CoursesPage from './pages/CoursesPage';
import Guard from './components/Guards/Guard';
import Logout from './pages/Logout';
import MyLearning from './pages/MyLearningPage/MyLearning';
import './App.css';
import WishListPage from './pages/WishListPage';
import CategoriesPage from './pages/CategoriesPage/CategoriesPage';
import Profile from './pages/Profile/Profile';
import ProfilePicture from './pages/ProfilePicture/ProfilePicture';
import PrivacySettings from './pages/PrivacySettings/PrivacySettings';
import CourseDetials from './pages/CourseDetials/CourseDetials';
import SubcategoryPage from './pages/SubCategoriesPage/CoursesPageCat';
import Checkout from './components/Checkout';
import AllCourses from './pages/MyLearningPage/AllCourses';
import WishList from './pages/MyLearningPage/WishList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/udemy-business', element: <Business /> },
      {
        path: '/profile',
        element: <Profile />,
        children: [
          { index: true, element: <UdemyProfile /> },
          { path: 'profile-picture', element: <ProfilePicture /> },
          { path: 'privacy-setting', element: <PrivacySettings /> },
        ],
      },
      { path: '/teach-on-udemy', element: <TeachOnUdemy /> },
      { path: '/instructor', element: <InstructorPage /> },
      { path: '/create-course', element: <InstructorPage /> },
      {
        path: '/courses',
        element: (
          <Guard>
            <CoursesPage />
          </Guard>
        ),
      },
      {
        path: '/my-learning',
        element: (
          <Guard>
            <MyLearning />
          </Guard>
        ),
        children: [
          { index: true, element: <AllCourses /> },
          { path: 'myList', element: <WishList /> },
        ],
      },
      {
        path: '/my-wishList',
        element: (
          <Guard>
            <WishListPage />
          </Guard>
        ),
      },
      {
        path: '/categoriesPage/:_id',
        element: <CategoriesPage />,
        //loader: loadercourseShow,
      },
      { path: '/subCategories/:_id', element: <SubcategoryPage /> },
      {
        path: '/CourseDetials/:courseID',
        element: <CourseDetials />,
      },

      { path: '/cart', element: <CartPage /> },
      {
        path: '/checkout',
        element: (
          <Guard>
            <Checkout />
          </Guard>
        ),
      },
      { path: '/login', element: <Login /> },
      { path: '/signup', element: <SignUp /> },
      { path: '/logout', element: <Logout /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

function App() {
  const [isLogin, setIsLogin] = useState(
    localStorage.getItem('token') ? true : false,
  );
  const [userName, setUsername] = useState('');
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [photo, setPhoto] = useState(null);
  return (
    <>
      <AuthProvider
        value={{
          isLogin,
          setIsLogin,
          userName,
          setUsername,
          email,
          setEmail,
          user,
          setUser,
          photo,
          setPhoto,
        }}
      >
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </AuthProvider>
    </>
  );
}

export default App;
