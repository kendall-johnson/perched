import React, { useState } from 'react';
import { signUp } from '../../utilities/users-service';
import { useNavigate } from 'react-router-dom';

export default function SignUpForm({  setUser,  showLogin, setShowLogin }) {
  // const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
    userType: '',
    error: '',
  });

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const { error, confirm, ...data } = formData;
      const user = await signUp(data);
      setUser(user);
      // navigate('/home');
    } catch {
      setFormData({ ...formData, error: 'Sign Up Failed - Try Again' });
    }
  };

  const handleChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
      error: '',
    });
  };

  const disable = formData.password !== formData.confirm;

  return (
    <>
  <section className="py-40 bg-gray-100">
    <div className="container px-4 mx-auto">
      <div>
        <div className="flex flex-wrap bg-gray-100 rounded-2xl shadow">
          <div className="w-full lg:w-1/2 3xl:w-1/3">
            <div className="py-24 px-12 lg:px-20">
              <div>
                <a className="flex mb-6 items-center text-gray-800 hover:text-gray-700" href="/home">
                  <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.10529 11L7.18516 10.0272L2.92291 6.1875L14 6.1875L14 4.8125L2.92291 4.8125L7.18516 0.972813L6.10529 -6.90178e-07L4.80825e-07 5.5L6.10529 11Z" fill="currentColor"></path>
                  </svg>
                  <span className="ml-6">Back home</span>
                </a>
                <h3 className="font-heading text-4xl mb-10">Sign up to Perched</h3>
                <p className="font-light mb-32 sm:mb-64">A Nest for Success and Creativity</p>
                <div>
                  <div className="inline-flex items-center py-6 px-6 sm:px-8 shadow bg-white rounded-md">
                  <div className="flex-shrink-0 flex items-center -mr-2 justify-center w-12 h-12 bg-green-800 hover:bg-green-900 rounded-full z-10" >
                      <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" width="2.4" height="10.4" rx="1" fill="white"></rect><rect x="10" y="4" width="2.4" height="9.6" rx="1" transform="rotate(90 10 4)" fill="white"></rect></svg>
                    </div>
                    <img className="flex-shrink-0 -mr-2 w-12 h-12 rounded-full" src="https://i.imgur.com/pNct5Bv.png" alt=""/>
                    <img className="flex-shrink-0 mr-6 w-12 h-12 rounded-full" src="https://i.imgur.com/0gjkrbY.png" alt=""/>
                    <div className="hidden sm:block h-1 w-14 bg-gray-100 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 3xl:w-2/3">
            <div className="h-full pt-8 px-6 sm:px-20 pb-24 sm:pb-44 bg-white rounded-2xl shadow">
              <div className="flex flex-col sm:flex-row mb-16 sm:mb-28 items-end sm:items-center justify-end">
                <span className="sm:mr-4 text-sm text-gray-800 font-light">I already have an account</span>
                <a  className="font-medium text-yellow-600 hover:underline"
              onClick={() => setShowLogin(!showLogin)}>
                  <span className="mr-2">Sign in</span>
                  <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.89471 0L6.81484 0.972812L11.0771 4.8125L0 4.8125L0 6.1875L11.0771 6.1875L6.81484 10.0272L7.89471 11L14 5.5L7.89471 0Z" fill="currentColor"></path>
                  </svg>
                </a>
              </div>
              <div className="max-w-lg">
                <form onSubmit={handleSubmit}>
                <div className="relative mb-6">
                  <label
                    className="absolute top-0 left-0 ml-10 mt-3 text-xs font-normal text-gray-400" htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="block w-full px-10 py-6 bg-white focus:bg-lime-100 outline-none border border-gray-300 rounded-lg" 
                    type="name"
                    name="name"
                    placeholder="Jane Doe" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                  <div className="relative mb-6">
                  <label className="absolute top-0 left-0 ml-10 mt-3 text-xs font-normal text-gray-400" htmlFor="email">Your email</label>
                    <input 
                      className="block w-full px-10 py-6 bg-white focus:bg-lime-100 outline-none border border-gray-300 rounded-lg" 
                      type="email"
                      name="email"
                      placeholder="mat@hello.dev"  
                      value={formData.email}
                      onChange={handleChange}
                      required>
                    </input>
                  </div>
                  <div className="relative mb-6">
                    <label
                    className="absolute top-0 left-0 ml-10 mt-3 text-xs font-normal text-gray-400" htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      className="block w-full px-10 py-6 bg-white focus:bg-lime-100 outline-none border border-gray-300 rounded-lg" 
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="relative mb-6">
                    <label
                      htmlFor="password_confirmation"
                      className="absolute top-0 left-0 ml-10 mt-3 text-xs font-normal text-gray-400" 
                    >
                      Confirm password
                    </label>
                    <input
                      type="password"
                      className="block w-full px-10 py-6 bg-white focus:bg-lime-100 outline-none border border-gray-300 rounded-lg" 
                      name="confirm"
                      value={formData.confirm}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div id="select" className="relative mb-6">
                    <div className="mb-2 block">
                      <label htmlFor="userType" className="block text-sm font-semibold text-gray-800">User Type</label>
                    </div>
                    <div className="relative">
                      <select
                        id="userType"
                        name="userType"
                        value={formData.userType}
                        onChange={handleChange}
                        className="block appearance-none w-full bg-gray-100 border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        required={true}
                      >
                        <option value="customer">Customer</option>
                        <option value="freelancer">Freelancer</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12l-5-5 1.41-1.41L10 9.18l3.59-3.59L15 7l-5 5z"/></svg>
                      </div>
                    </div>
                    </div>
                  <button className="inline-block w-full sm:w-auto px-7 py-4 text-center font-medium bg-yellow-700 hover:bg-yellow-600 text-white rounded transition duration-250" type="submit">Create Account</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>



</>
  );
}


