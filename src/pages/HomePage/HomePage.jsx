import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'

export default function HomePage({ user, updateUser }) {
  return (
    <>
    <section className="relative xl:pb-52 bg-black overflow-hidden">
  <div className="hidden xl:block absolute bottom-0 left-0 ml-20 2xl:ml-52 px-20">
    <img className="animate-bouncingSlow max-w-sm xl:max-w-md -mb-20" src="suncealand-assets/background/red-lines.svg" alt=""/>
    <img className="absolute top-0 left-1/2 mt-20 transform -translate-x-1/2" src="suncealand-assets/images/apps-avatar-dashboard-app.png" alt=""/>
  </div>
  <nav className="relative z-10">
    <div className="flex px-4 md:px-14 py-6 items-center relative">
      <a className="inline-block text-2xl font-bold mr-8 xl:mr-17" href="#">
        <img src="suncealand-assets/logos/suncealand-white.svg" alt=""/>
      </a>
      <div className="hidden lg:block relative w-full max-w-xs xl:max-w-md 2xl:max-w-lg mr-8 xl:mr-20 2xl:mr-52">
        <input className="w-full pl-20 py-5 pr-5 h-14 bg-gray-900 rounded-lg placeholder-gray-300 text-gray-300 outline-none" type="search" placeholder="Search"/>
        <button className="inline-block absolute top-1/2 left-0 ml-8 transform -translate-y-1/2" type="submit">
          <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="9" stroke="white" stroke-width="2"></circle><rect x="16" y="15.4142" width="2" height="7.1336" rx="1" transform="rotate(-45 16 15.4142)" fill="white"></rect></svg>
        </button>
      </div>
      <div className="hidden lg:block">
        <ul className="flex items-center">
          <li className="relative group mr-14">
            <button className="inline-block text-left text-base font-medium text-white">
              <div className="flex items-center">
                <span className="mr-3">Categories</span>
                <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.332 0.999974L10.3887 0.0566406L6.66536 3.77997L5.9987 4.5L5.33203 3.77997L1.6087 0.0566402L0.665365 0.999974L5.9987 6.33331L11.332 0.999974Z" fill="currentColor"></path>
                </svg>
              </div>
            </button>
            <div className="hidden group-hover:block absolute z-20 bottom-0 left-0 w-52 pt-4 transform translate-y-full">
              <div className="py-4 px-6 bg-white rounded-lg border-2 border-blueGray-900"><a className="block mb-2 text-xs" href="#">Graphics & Designer</a><a className="block mb-2 text-xs" href="#">Video & Animation</a><a className="block text-xs" href="#">Music & Audio</a><a className="block mb-2 text-xs" href="#">Programming & Web Design</a></div>
            </div>
          </li>
        </ul>
      </div>
      <div className="hidden lg:block ml-auto">
        <Link className="relative group inline-flex h-12 w-24 items-center justify-center border border-white rounded-lg overflow-hidden" to="/login">
          <span className="relative z-10 font-semibold text-white group-hover:text-black transition duration-500">Login</span>
          <div className="absolute top-0 left-0 h-full w-28 transform -translate-x-full -ml-1 group-hover:-translate-x-0 bg-white transition duration-500 ease-linear"></div>
        </Link>
      </div>
      <button className="lg:hidden ml-auto navbar-burger flex p-1 items-center text-white">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 18H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M3 12H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M3 6H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </button>
    </div>
  </nav>
  <div className="container px-4 mx-auto">
    <div className="relative pt-28 xl:pt-52 mb-24 xl:mb-0">
      <div className="max-w-lg mx-auto xl:mr-0 relative">
        <div className="inline-flex items-center mb-8">
          <span className="block w-2 h-2 mr-2 rounded-full bg-indigo-500"></span>
          <span className="uppercase text-sm text-gray-100 font-medium tracking-tight">Explore Perched</span>
        </div>
        <h1 className="text-6xl sm:text-8xl xl:text-9xl font-heading text-white mb-12"><span className='text-blue-500'>Little things</span> make a <span className='text-yellow-700'>big difference.</span></h1>
        <p className="text-lg text-gray-100 mb-20">Find the person to make your dreams become reality.</p>
        <div className="flex flex-col sm:flex-row">
          <Link className="group relative inline-block h-16 w-full sm:w-48 mb-4 sm:mb-0 sm:mr-6 bg-white rounded" to="/login">
            <div className="absolute top-0 left-0 transform -translate-y-1 -translate-x-1 w-full h-full group-hover:translate-y-0 group-hover:translate-x-0 transition duration-300">
              <div className="flex h-full w-full items-center justify-center bg-yellow-700 border-2 border-white rounded">
                <span className="text-base font-semibold text-black uppercase">Get started</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
    <div className="xl:hidden relative">
      <img className="animate-bouncingSlow h-135 mx-auto -mb-12" src="suncealand-assets/background/red-lines.svg" alt=""/>
      <img className="absolute top-0 left-1/2 w-full xs:max-w-md transform -translate-x-1/2" src="suncealand-assets/images/apps-avatar-dashboard-app.png" alt=""/>
    </div>
  </div>
  <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
    <div className="navbar-backdrop fixed inset-0 backdrop-blur-xl backdrop-filter bg-gray-900 bg-opacity-80"></div>
    <nav className="relative pt-8 pb-8 bg-white h-full overflow-y-auto">
      <div className="flex flex-col px-6 h-full">
        <a className="inline-block text-2xl font-bold ml-8 mb-16" href="#">
          <img src="suncealand-assets/logos/suncealand-dark.svg" alt=""/>
        </a>
        <ul className="w-full mb-auto pb-16">
          <li className="group mb-6">
            <button className="inline-block text-left text-base font-medium text-black">
              <div className="flex items-center">
                <span className="mr-3">Resources</span>
                <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.332 0.999974L10.3887 0.0566406L6.66536 3.77997L5.9987 4.5L5.33203 3.77997L1.6087 0.0566402L0.665365 0.999974L5.9987 6.33331L11.332 0.999974Z" fill="currentColor"></path>
                </svg>
              </div>
            </button>
            <div className="hidden group-hover:block pt-4">
              <div className="pl-6"><a className="block mb-2 text-black" href="#">Link 1</a><a className="block mb-2 text-black" href="#">Link 1</a><a className="block text-black" href="#">Link 1</a></div>
            </div>
          </li>
          <li className="mb-6"><a className="inline-block text-base font-medium text-black" href="#">Community</a></li>
          <li className="mb-6"><a className="inline-block text-base font-medium text-black" href="#">Story</a></li>
          <li><a className="inline-block text-base font-medium text-black" href="#">Pricing</a></li>
        </ul>
        <div className="w-full">
          <a className="relative group inline-flex h-12 w-full mb-4 items-center justify-center font-semibold rounded-lg bg-white border border-black" href="#">
            <span className="text-black">Login</span>
          </a>
          <a className="relative inline-flex h-12 w-full mb-4 items-center justify-center font-semibold rounded-lg bg-blue-500" href="#">
            <span className="text-black">Logout</span>
          </a>
          <p className="pl-2 text-sm">2022 © Shuffle</p>
        </div>
      </div>
    </nav>
  </div>
</section>
<section className="py-20 md:py-40">
  <div className="container px-4 mx-auto">
    <div className="max-w-2xl mx-auto mb-24 text-center">
      <div className="inline-flex items-center px-5 py-2 bg-white rounded-full mb-8">
        <span className="block w-2 h-2 mr-2 rounded-full bg-indigo-500"></span>
        <span className="uppercase text-sm font-medium tracking-tight">HOW IT WORKS</span>
      </div>
      <h1 className="text-6xl sm:text-7xl font-heading font-semibold mb-14 text-blue-700">How does it work?</h1>
      <p className="text-2xl mb-18">Perched offers a marketplace for all types of freelance work, so you can stop worrying about the tough work and complete your passion projects quicker.</p>
    </div>
    <div className="max-w-xs mx-auto md:max-w-none">
      <div className="flex flex-wrap justify-between items-center -mx-4">
        <div className="w-full lg:w-1/3 px-4 mb-10 lg:mb-0">
          <div className="max-w-xs mx-auto mb-10">
            <span className="block mb-6 text-5xl font-heading text-yellow-700">01</span>
            <h4 className="text-3xl font-heading font-semibold">Browse and search for gigs</h4>
          </div>
          <div className="max-w-xs mx-auto">
            <span className="block mb-6 text-5xl font-heading text-yellow-700">02</span>
            <h4 className="text-3xl font-heading font-semibold">Review gig details and seller profiles</h4>
          </div>
        </div>
        <div className="w-full lg:w-1/3 px-4 mb-10 lg:mb-0">
          <img className="mx-auto" src="suncealand-assets/images/avatar-girl-circle.png" alt=""/>
        </div>
        <div className="w-full lg:w-1/3 px-4">
          <div className="max-w-xs mx-auto mb-10">
            <span className="block mb-6 text-5xl font-heading text-yellow-700">03</span>
            <h4 className="text-3xl font-heading font-semibold">Place an order</h4>
          </div>
          <div className="max-w-xs mx-auto">
            <span className="block mb-6 text-5xl font-heading text-yellow-700">04</span>
            <h4 className="text-3xl font-heading font-semibold">Get work delivered and provide feedback</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="py-20 md:py-40 bg-black">
  <div className="container px-4 mx-auto">
    <div className="flex flex-wrap -mx-4">
      <div className="w-full lg:w-1/3 px-4 mb-20 lg:mb-0">
        <div className="sm:max-w-sm">
          <div className="inline-flex px-5 py-2 items-center mb-8 bg-gray-900 rounded-full">
            <span className="block w-2 h-2 mr-2 rounded-full bg-blue-500"></span>
            <span className="uppercase text-sm text-gray-200 font-medium">FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h1 className="text-5xl xs:text-7xl md:text-8xl font-heading font-semibold text-white mb-18">Help Desk</h1>
          <p className="text-2xl text-gray-200 mb-20">You have questions, we have answers!</p>
          <img className="h-142 w-full max-w-md rounded-4xl" src="suncealand-assets/images/laptop-on-table-photo.png" alt=""/>
        </div>
      </div>
      <div className="w-full lg:w-2/3 px-4">
        <div className="lg:max-w-lg xl:max-w-3xl lg:ml-auto lg:pt-52">
          <button className="group block mb-6 w-full text-left pb-5 border-b border-gray-600">
            <div className="flex items-start justify-between">
              <div className="max-w-lg pr-4">
                <h4 className="text-3xl font-medium text-white">Can I get a refund?</h4>
                <p className="hidden group-hover:block mt-5 text-lg text-gray-200">Refunds are not accepted currently. This is why we encourage you to reach out to the freelancer before purchase so that you can confirm the expected product can be achieved.</p>
              </div>
              <div className="flex-shrink-0 group-hover:hidden flex w-14 h-14 items-center justify-center bg-blue-500 rounded-full">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="16" y="7" width="2" height="16" rx="1" transform="rotate(90 16 7)" fill="white"></rect><rect x="7" width="2" height="16" rx="1" fill="white"></rect></svg>
              </div>
              <div className="flex-shrink-0 hidden group-hover:flex w-14 h-14 items-center justify-center bg-yellow-700 rounded-full">
                <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="16" width="2" height="16" rx="1" transform="rotate(90 16 0)" fill="white"></rect></svg>
              </div>
            </div>
          </button>
          
          <button className="group block mb-6 w-full text-left pb-5 border-b border-gray-600">
            <div className="flex items-start justify-between">
              <div className="max-w-lg pr-4">
                <h4 className="text-3xl font-medium text-white">How does billing work?</h4>
                <p className="hidden group-hover:block mt-5 text-lg text-gray-200">Thanks to Stripe, the checkout process is smooth and most forms of payment are accepted! Find the gig you want to purchase and follow the checkout instructions to complete an order!</p>
              </div>
              <div className="flex-shrink-0 group-hover:hidden flex w-14 h-14 items-center justify-center bg-blue-500 rounded-full">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="16" y="7" width="2" height="16" rx="1" transform="rotate(90 16 7)" fill="white"></rect><rect x="7" width="2" height="16" rx="1" fill="white"></rect></svg>
              </div>
              <div className="flex-shrink-0 hidden group-hover:flex w-14 h-14 items-center justify-center bg-yellow-700 rounded-full">
                <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="16" width="2" height="16" rx="1" transform="rotate(90 16 0)" fill="white"></rect></svg>
              </div>
            </div>
          </button>
          <button className="group block mb-6 w-full text-left pb-5 border-b border-gray-600">
            <div className="flex items-start justify-between">
              <div className="max-w-lg pr-4">
                <h4 className="text-3xl font-medium text-white">How can I become a Freelancer on Perched?</h4>
                <p className="hidden group-hover:block mt-5 text-lg text-gray-200">During the account creation process, you have the option to select whether you wish to be a customer or freelancer, there is where you make the decision.</p>
              </div>
              <div className="flex-shrink-0 group-hover:hidden flex w-14 h-14 items-center justify-center bg-blue-500 rounded-full">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="16" y="7" width="2" height="16" rx="1" transform="rotate(90 16 7)" fill="white"></rect><rect x="7" width="2" height="16" rx="1" fill="white"></rect></svg>
              </div>
              <div className="flex-shrink-0 hidden group-hover:flex w-14 h-14 items-center justify-center bg-yellow-700 rounded-full">
                <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="16" width="2" height="16" rx="1" transform="rotate(90 16 0)" fill="white"></rect></svg>
              </div>
            </div>
          </button>
          <button className="group block mb-24 w-full text-left pb-5 border-b border-gray-600">
            <div className="flex items-start justify-between">
              <div className="max-w-lg pr-4">
                <h4 className="text-3xl font-medium text-white">Can I delete my account if I no longer wish to use Perched?</h4>
                <p className="hidden group-hover:block mt-5 text-lg text-gray-200">While we would hate to see you leave, you may visit your account settings at any time to remove your account. Keep in mind, this decision is permanent and you will no longer be able to access the account.</p>
              </div>
              <div className="flex-shrink-0 group-hover:hidden flex w-14 h-14 items-center justify-center bg-blue-500 rounded-full">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="16" y="7" width="2" height="16" rx="1" transform="rotate(90 16 7)" fill="white"></rect><rect x="7" width="2" height="16" rx="1" fill="white"></rect></svg>
              </div>
              <div className="flex-shrink-0 hidden group-hover:flex w-14 h-14 items-center justify-center bg-yellow-700 rounded-full">
                <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="16" width="2" height="16" rx="1" transform="rotate(90 16 0)" fill="white"></rect></svg>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
<Footer />
</>
  )
}
