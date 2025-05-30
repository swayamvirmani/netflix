import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValideData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../utils/firebase';
//import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice'; // Ensure this import is correct

function Login() {
  const dispatch = useDispatch();
  //const navigate = useNavigate();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null); // Add this to use name input in Sign Up

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const message = checkValideData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      // Sign Up
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          return updateProfile(user, {
            displayName: name.current.value,
          });
        })
        .then(() => {
          const { uid, email, displayName } = auth.currentUser;
          dispatch(addUser({ uid, email, displayName }));
          //navigate('/browse');
        })
        .catch((error) => {
          console.log(error);
          setErrorMessage(error.message);
        });
    } else {
      // Sign In
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          dispatch(addUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
          }));
          //navigate('/browse');
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    }
  };

  return (
    <div className='relative h-screen'>
      <Header />
      <div className='absolute inset-0 -z-10'>
        <img
          src='https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg'
          alt='Bg'
          className='w-full h-full object-cover'
        />
      </div>

      <form onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-12 bg-black/80 backdrop-blur-md text-white rounded-lg shadow-lg'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
        <input
          ref={email}
          type='text'
          placeholder='Email Address'
          className='py-2 px-4 my-2 w-full bg-gray-800 rounded text-white'
        />

        {!isSignInForm && (
          <input
            ref={name}
            type='text'
            placeholder='Full Name'
            className='py-2 px-4 my-2 w-full bg-gray-800 rounded text-white'
          />
        )}

        <input
          ref={password}
          type='password'
          placeholder='Password'
          className='py-2 px-4 my-4 w-full bg-gray-800 rounded text-white'
        />

        <p className='text-red-500'>{errorMessage}</p>

        <button
          onClick={handleButtonClick}
          className='py-3 bg-red-700 w-full rounded font-semibold hover:bg-red-800 transition cursor-pointer'
        >
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </button>
        <p onClick={toggleSignInForm} className='py-4 cursor-pointer'>
          {isSignInForm ? 'New to Netflix? Sign Up Now' : 'Already Registered? Sign In Now'}
        </p>
      </form>
    </div>
  );
}

export default Login;
