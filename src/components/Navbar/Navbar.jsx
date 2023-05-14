import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import * as userService from '../../utilities/users-service';


export default function Navbar({user, updateUser}) {
  function handleLogOut() {
        userService.logOut();
        updateUser(null);
      }

  return (
    <>
      <section>
  <nav className="py-10 bg-black" data-config-="">
    <div className="container px-4 mx-auto">
      <div className="flex items-center justify-between relative">
        <Link className="inline-block" to="/">
          <img src="https://i.imgur.com/XL7SHSs.png" alt="" width="96"/>
        </Link>
        <button className="lg:hidden text-white navbar-burger">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M3.5 7C3.22386 7 3 6.77614 3 6.5C3 6.22386 3.22386 6 3.5 6H20.5C20.7761 6 21 6.22386 21 6.5C21 6.77614 20.7761 7 20.5 7H3.5ZM3.5 12C3.22386 12 3 11.7761 3 11.5C3 11.2239 3.22386 11 3.5 11H20.5C20.7761 11 21 11.2239 21 11.5C21 11.7761 20.7761 12 20.5 12H3.5ZM3 16.5C3 16.7761 3.22386 17 3.5 17H20.5C20.7761 17 21 16.7761 21 16.5C21 16.2239 20.7761 16 20.5 16H3.5C3.22386 16 3 16.2239 3 16.5Z" fill="currentColor"></path>
          </svg>
        </button>
        <div className="hidden lg:block ml-auto mr-14">
          <ul className="inline-flex">
            <li className="mr-8"><Link className="inline-block font-bold text-white hover:text-gray-200" aria-current="page" to="/">Home</Link></li>
            <li className="mr-8"><Link className="inline-block font-bold text-white hover:text-gray-200" to="/graphics">View Gigs</Link></li>
            {user && user.userType === 'freelancer' && (
                <li className="mr-8">
                  <Link
                    className="inline-block font-bold text-white hover:text-gray-200"
                    to="/create-gig"
                  >
                    Create Gig
                  </Link>
                </li>
              )}
            {user && (
                <li className="mr-8">
                  <Link
                    className="inline-block font-bold text-white hover:text-gray-200"
                    to={`/profile/${user._id}`}
                  >
                    Profile
                  </Link>
                </li>
              )}
          </ul>
        </div>
        {user ? 
          <div className="hidden lg:block"><Link className="inline-block px-8 py-3 text-black font-bold bg-gray-100 hover:bg-gray-200" to='/' onClick={handleLogOut}>Logout</Link></div>
        :
        <div className="hidden lg:block"><Link className="inline-block px-8 py-3 text-black font-bold bg-gray-100 hover:bg-gray-200" to='/login'>Login</Link></div>
        }
      </div>
    </div>
  </nav>
  <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-3/4 max-w-xs z-50" data-config-="">
    <div className="navbar-backdrop fixed inset-0 bg-black bg-opacity-75"></div>
    <nav className="relative flex flex-col h-full p-8 bg-white">
      <div className="flex items-center justify-between mb-12">
        <a className="items-center" href="#">
          <img src="" alt="" width="102"/>
        </a>
        <button className="inline-block navbar-close focus:outline-none" type="button" aria-label="Close">
          <img src="" alt=""/>
        </button>
      </div>
      <div>
        <ul>
          <li className="py-3"><a className="inline-block font-bold hover:text-gray-900" href="#">Home</a></li>
          <li className="py-3"><a className="inline-block font-bold hover:text-gray-900" href="#">Products</a></li>
          <li className="py-3"><a className="inline-block font-bold hover:text-gray-900" href="#">Resources</a></li>
          <li className="py-3"><a className="inline-block font-bold hover:text-gray-900" href="#">Pricing</a></li>
        </ul>
      </div>
      <div className="mt-auto">
      {user ? (
          <div className="hidden lg:block"><Link className="inline-block px-8 py-3 text-black font-bold bg-gray-100 hover:bg-gray-200" to='/' onClick={handleLogOut}>Logout</Link></div>
       ) : (
        <div className="hidden lg:block"><Link className="inline-block px-8 py-3 text-black font-bold bg-gray-100 hover:bg-gray-200" to='/login'>Login</Link></div>
        )}
      </div>
    </nav>
  </div>
</section>
    </>
  )
}
