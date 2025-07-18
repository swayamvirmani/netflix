import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';


function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(()=>{
    const features = onAuthStateChanged(auth, (user) => {
      if(user){
        const {uid, email, displayname} = user;
        dispatch(addUser({uid: uid, email:email, displayname:displayname}));
        navigate("/browse")
      }else{
        dispatch(removeUser());
        navigate("/")
      }
    });
    return features;
  }, [dispatch,navigate]);


  
  const user = useSelector((state) => state.user);

  const handleSignOut = () =>{
    signOut(auth).then(()=>{
      //navigate("/");
    }).catch((error) =>{
      console.log(error);
    });
  }


  return (
    <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-44' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />

      {user && (<div className='flex p-2 '>


        <img className='w-12 h-12' src="https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e" alt="profile-logo" />

        <button onClick={handleSignOut} className='cursor-pointer font-bold text-white' >Sign Out</button>
      </div>)} 
 
    </div>
  )
}

export default Header
 