/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Button from './../components/Button';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook, BsApple } from 'react-icons/bs';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { useNavigate, NavLink, Link } from 'react-router-dom';
import { useState } from 'react';
import './LoginAndSignUp.css'

function Login() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [login, setLogin] = useState({ email : '', password: ''});
  const [error, setError] = useState({emailError: '', passwordError: ''});
 
  function handleValidation(e){
    if(e.target.name === 'email'){
      const emailValue = e.target.value; 
      setLogin({...login, email: emailValue});
      setError({
        ...error, emailError: emailValue.length === 0 ? 'Please fill out this field.' : emailValue.includes('@') ? '' : `Please include an '@' in the email address.`
      })
    }else if(e.target.name === 'password'){
      const passwordValue = e.target.value;
      setLogin({...login, password: passwordValue});
      setError({...error, passwordError: passwordValue.length === 0 ? 'Please fill out this field.' : passwordValue.length <= 5 ? `Please lengthen this text to 5 characters or more` : ''})
    }
  }
 
  function handleSubmit(e){
    e.preventDefault();
    navigate('/');
  }
  
  return (
    <>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex h-screen flex-col items-center justify-center"
      >
        <label className="mr-40 font-bold">Log in to your Udemy account</label>
        <h5 className="border-1 my-1 mb-3 w-96 border-solid border-black p-1 text-lg font-bold">
          <FcGoogle className="inline p-1 text-4xl" />
          <a
            className="pointer text-black no-underline"
            href="https://www.google.com/"
          >
            Continue with Google
          </a>
        </h5>
        <h5 className="border-1 my-1 mb-3 w-96 border-solid border-black p-1 text-lg font-bold">
          <BsFacebook className="inline p-1 text-4xl text-sky-600" />
          <a
            className="pointer text-black no-underline"
            href="https://www.facebook.com/"
          >
            Continue with Facebook
          </a>
        </h5>
        <h5 className="border-1 my-1 mb-3 w-96 border-solid border-black p-1 text-lg font-bold">
          <BsApple className="inline p-1 text-4xl" />
          <a
            className="pointer text-black no-underline"
            href="https://www.icloud.com/"
          >
            Continue with Apple
          </a>
        </h5>
        <div className="relative">
          <input
            value={login.email}
            onChange={(e) => handleValidation(e)}
            type="email"
            name="email"
            placeholder=""
            id="email"
            className="textbox border-1 my-1 w-96 border-solid border-black p-3"
          />
          <label
            htmlFor="email"
            className="form-label absolute left-4 top-5 cursor-text font-bold transition-all"
          >
            Email
          </label>
          <p className="text-sm font-bold text-red-600">{error.emailError}</p>
        </div>
        <div className="relative">
          <input
            value={login.password}
            onChange={(e) => handleValidation(e)}
            type={show ? 'text' : 'password'}
            placeholder=""
            name="password"
            id="password"
            className="textbox border-1 my-1 w-96 border-solid border-black p-3"
          />
          <label
            htmlFor="password"
            className="form-label absolute left-4 top-5 cursor-text font-bold transition-all"
          >
            Password
          </label>
          <p className="text-sm font-bold text-red-600">
            {error.passwordError}
          </p>
        </div>
        {show ? (
          <AiFillEye
            onClick={() => setShow(!show)}
            className="relative bottom-16 left-44  text-xl"
          />
        ) : (
          <AiFillEyeInvisible
            onClick={() => setShow(!show)}
            className="relative bottom-16 left-44  text-xl"
          />
        )}

        <Button width="w-96" backgroundColor="bg-violet-600" text="text-white">
          Log in
        </Button>
        <p className="w-96 border-b-2 p-2.5 text-center text-lg">
          or
          <a href="" className="font-bold text-violet-600">
            Forget Password
          </a>
        </p>
        <p className="text-sm">
          Don't have an account?
          <a
            href=""
            onClick={() => navigate('/signup')}
            className="font-bold text-violet-600"
          >
            Sign up
          </a>
        </p>
      </form>
    </>
  );
}

export default Login;
