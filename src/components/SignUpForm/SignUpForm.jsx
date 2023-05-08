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
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
    <div className="w-full p-6 m-auto bg-white rounded-3xl shadow-xl lg:max-w-xl">
    <h1 className="text-3xl font-semibold text-center text-yellow-700 uppercase">
      JOIN PERCHED
    </h1>
    <form className="mt-6" onSubmit={handleSubmit}>
    <div className="mb-2">
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-gray-800"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          className="block w-full px-4 py-2 mt-2 text-yellow-700 bg-white border rounded-md focus:border-yellow-700 focus:ring-yellow-700 focus:outline-none focus:ring focus:ring-opacity-40"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-2">
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-gray-800"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          className="block w-full px-4 py-2 mt-2 text-yellow-700 bg-white border rounded-md focus:border-yellow-700 focus:ring-yellow-700 focus:outline-none focus:ring focus:ring-opacity-40"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-2">
        <label
          htmlFor="password"
          className="block text-sm font-semibold text-gray-800"
        >
          Password
        </label>
        <input
          type="password"
          className="block w-full px-4 py-2 mt-2 text-yellow-700 bg-white border rounded-md focus:border-yellow-700 focus:ring-yellow-700 focus:outline-none focus:ring focus:ring-opacity-40"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-2">
        <label
          htmlFor="password_confirmation"
          className="block text-sm font-semibold text-gray-800"
        >
          Confirm password
        </label>
        <input
          type="password"
          className="block w-full px-4 py-2 mt-2 text-yellow-700 bg-white border rounded-md focus:border-yellow-700 focus:ring-yellow-700 focus:outline-none focus:ring focus:ring-opacity-40"
          name="confirm"
          value={formData.confirm}
          onChange={handleChange}
          required
        />
      </div>
      <div id="select" className="relative">
        <div className="mb-2 block">
        <label htmlFor="account_type" className="block text-sm font-semibold text-gray-800">Account Type</label>
        </div>
        <div className="relative">
        <select
          className="block appearance-none w-full bg-gray-100 border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          required={true}
        >
          <option
            id="freelancer"
            name="userType"
            value="customer"
            checked={formData.userType === "customer"}
            onChange={handleChange}
            className="mr-2">
              Customer
          </option>
          <option
            id="freelancer"
            name="userType"
            value="freelancer"
            checked={formData.userType === "freelancer"}
            onChange={handleChange}
            className="mr-2">
            Freelancer
          </option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12l-5-5 1.41-1.41L10 9.18l3.59-3.59L15 7l-5 5z"/></svg>
    </div>
        </div>
      </div>
      <div className="mt-6">
        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-yellow-700 rounded-md hover:text-black hover:bg-yellow-600 hover:rounded-full focus:outline-none focus:bg-yellow-600">
          Sign up
        </button>
      </div>
    </form>
    <p className="mt-8 text-xs font-light text-center text-gray-700">
        {" "}
        Already have an account?{" "}
        <a
            className="font-medium text-yellow-600 hover:underline"
            onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}
        </a>
    </p>
</div>
</div>
</>
  );
}


