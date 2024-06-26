/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from './../components/Button';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { signupUser } from '../services/authentication';
import Spinner from '../components/Spinner';
import { Helmet } from 'react-helmet';
import './LoginAndSignUp.css';

function SignUp() {
  const navigate = useNavigate();
  const [showPassword, setshowPassword] = useState(false);
  const [showPasswordConfirm, setshowPasswordConfirm] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [signup, setSignup] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const [error, setError] = useState({
    usernameError: '',
    emailError: '',
    passwordError: '',
    passwordConfirmError: '',
  });

  function handleValidation(e) {
    if (e.target.name === 'username') {
      const fullNameValue = e.target.value;
      setSignup({ ...signup, username: fullNameValue });
      setError({
        ...error,
        usernameError:
          fullNameValue.length === 0
            ? 'Please fill out this field.'
            : fullNameValue.length <= 5
            ? `Please lengthen this text to 5 characters or more`
            : '',
      });
    } else if (e.target.name === 'email') {
      const emailValue = e.target.value;
      setSignup({ ...signup, email: emailValue });
      setError({
        ...error,
        emailError:
          emailValue.length === 0
            ? 'Please fill out this field.'
            : emailValue.includes('@')
            ? ''
            : `Please include an '@' in the email address.`,
      });
    } else if (e.target.name === 'password') {
      const passwordValue = e.target.value;
      setSignup({ ...signup, password: passwordValue });
      setError({
        ...error,
        passwordError:
          passwordValue.length === 0
            ? 'Please fill out this field.'
            : passwordValue.length <= 5
            ? `Please lengthen this text to 5 characters or more`
            : '',
      });
    } else if (e.target.name === 'passwordConfirm') {
      const confirmPasswordValue = e.target.value;
      setSignup({ ...signup, passwordConfirm: confirmPasswordValue });
      setError({
        ...error,
        passwordConfirmError:
          confirmPasswordValue.length === 0
            ? 'Please fill out this field.'
            : confirmPasswordValue.length <= 5
            ? `Please lengthen this text to 5 characters or more`
            : '',
      });
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (signup.password === signup.passwordConfirm) {
      const user = {
        username: signup.username,
        email: signup.email,
        password: signup.password,
        passwordConfirm: signup.passwordConfirm,
      };
      signupUser(user);
      try {
        toast.success('The Account has been created');
        navigate('/login');
      } catch (err) {
        toast.error('Please Email must be Unique');
      }
    } else {
      toast.error('Password and Confirm Password Not the same');
    }
  }

  useEffect(function () {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <Helmet>
        <title>Sign Up and Start Learning | Udemy</title>
      </Helmet>
      {isLoading ? (
        <Spinner />
      ) : (
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex h-screen flex-col items-center justify-center"
        >
          <label className="mr-32 font-bold">Sign up and start learning</label>
          <div className="relative">
            <input
              type="text"
              name="username"
              value={signup.username}
              onChange={(e) => handleValidation(e)}
              placeholder=""
              id="username"
              className="textbox border-1  w-80 border-solid border-black p-3 "
            />
            <label
              htmlFor="username"
              className="form-label absolute left-4 top-5 cursor-text font-bold transition-all"
            >
              Full name
            </label>
            <p className="text-sm font-bold text-red-600">
              {error.usernameError}
            </p>
          </div>
          <div className="relative">
            <input
              type="email"
              name="email"
              value={signup.email}
              onChange={(e) => handleValidation(e)}
              id="email"
              placeholder=""
              className="textbox border-1  w-80 border-solid border-black p-3 "
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
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={signup.password}
              onChange={(e) => handleValidation(e)}
              placeholder=""
              className="textbox border-1  w-80 border-solid border-black p-3 "
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
          {showPassword ? (
            <AiFillEye
              onClick={() => setshowPassword(!showPassword)}
              className="relative bottom-16 left-44 text-xl"
            />
          ) : (
            <AiFillEyeInvisible
              onClick={() => setshowPassword(!showPassword)}
              className="relative bottom-16 left-36 text-xl"
            />
          )}
          <div className="relative -my-4">
            <input
              type={showPasswordConfirm ? 'text' : 'password'}
              placeholder=""
              name="passwordConfirm"
              value={signup.passwordConfirm}
              onChange={(e) => handleValidation(e)}
              id="confirmPassword"
              className="textbox border-1 w-80 border-solid border-black p-3"
            />
            <label
              htmlFor="confirmPassword"
              className="form-label absolute left-4 top-5 cursor-text font-bold transition-all"
            >
              Confirm Password
            </label>
            <p className="text-sm font-bold text-red-600">
              {error.passwordConfirmError}
            </p>
          </div>
          {showPasswordConfirm ? (
            <AiFillEye
              onClick={() => setshowPasswordConfirm(!showPasswordConfirm)}
              className="relative bottom-16 left-36 text-xl"
            />
          ) : (
            <AiFillEyeInvisible
              onClick={() => setshowPasswordConfirm(!showPasswordConfirm)}
              className="relative bottom-12 left-36 text-xl"
            />
          )}
          <div className="w-80 text-left">
            <input type="checkbox" className="border-none" />
            <span className="w-80 pl-2">
              Send me special offers, personalized recommendations, and learning
              tips.
            </span>
          </div>
          <Button
            width="w-80"
            backgroundColor="bg-violet-600 hover:bg-violet-800"
            text="text-white"
          >
            Sign Up
          </Button>
          <p className="border-b-2 p-2.5 text-xs">
            By signing up, you agree to our <u>Terms of Use</u> and
            <u>Privacy Policy.</u>
          </p>
          <p className="text-sm">
            Already have an account?
            <a
              href=""
              onClick={() => navigate('/login')}
              className="font-bold text-violet-600 hover:text-violet-800"
            >
              Log in
            </a>
          </p>
        </form>
      )}

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default SignUp;
