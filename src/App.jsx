/* eslint-disable no-unused-vars */
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import SignUp from './pages/SignUp';
import TeachOnUdemy from './pages/TeachOnUdemy/teachonudemy';
import Instractor from './pages/Instractor/instractor';
import { Provider } from "react-redux"
import store from './store/store'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {index: true, element: <HomePage/>},
      { path: '/login', element: <Login /> },
      { path: '/signup', element: <SignUp /> },
      { path: '/teach-on-udemy', element: <TeachOnUdemy /> },
      { path: '/instractor', element: <Instractor /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

function App() {
  return (
    <>
    <Provider store={store}><RouterProvider router={router} /></Provider>
    </>
  );
}


export default App;
