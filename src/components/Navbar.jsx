import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { user, logout } = UserAuth();
 
  const navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav);
  };

  const handleSignOut = async () => {
    try {
      await logout();
      navigate('/');
    } catch (e) {
      console.log(e.message);
    }
  };


  return (
    <div>
      <nav className="bg-black py-5 text-center">
        <div className="bg-black flex ">
          <Link to="/">
            <img
              src="src/assets/img/logo.jpg"
              alt=""
              className="object-scale-down h-auto w-20 justify-start"
              onClick={handleNav}
            />
          </Link>


          <div className="flex-auto py-5 space-x-9 text-2xl">
            <Link
              to="/"
              type="button"
              className=" text-white rounded me-6 px-2 hover:bg-indigo-400 "
              onClick={handleNav}
            >
              Home
            </Link>
            <Link
              to="/filter"
              type="button"
              className="text-white rounded me-6 px-2 hover:bg-indigo-400 "
              onClick={handleNav}
            >
              Top Ten Suggestions
            </Link>
            <Link
              to="/random"
              type="button"
              className=" text-white rounded  px-1 me-6 hover:bg-indigo-400"
              onClick={handleNav}
            >
              What should I watch tonight?
            </Link>
            <Link
              to="/watchlist"
              type="button"
              className=" text-white rounded me-6 px-2 hover:bg-indigo-400 "
              onClick={handleNav}
            >
              Watch List
            </Link>
          </div>
<div className='justify-end'>
          {user?.email ? (
        <div>
          <Link to='/account' className='text-2xl rounded me-6 py-5 px-2 text-white'>
            Account
          </Link>
          <button className='text-white text-2xl rounded me-6 py-5 px-2' onClick={handleSignOut}>Sign out</button>
        </div>
      ) : (
        <div className='hidden md:block'>
           <Link to="/Login" type="button" className="text-2xl text-white rounded me-6 py-5 px-2 hover:bg-red-500">
            Sign In
          </Link>
          <Link
            to='/signup'
            className='bg-button text-2xl text-white px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl'
          >
            Sign Up
          </Link>
        </div>
      )}
</div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
