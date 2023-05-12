import React from 'react'

export default function Footer() {
  return (
    <>
    <section className="relative pt-14 pb-44 lg:pb-36 overflow-hidden">
  <div className="absolute top-0 left-0 mt-14 h-px w-full bg-gray-900 bg-opacity-10"></div>
  <div className="absolute bottom-0 left-0 w-full bg-yellowGray-500">
    <div className="container px-4 mx-auto">
      <div className="flex flex-wrap py-8 lg:py-0 -mx-4 items-center">
        <div className="w-full lg:w-1/2 xl:w-2/5 px-4 mb-6 lg:mb-0 lg:border-r border-gray-900 border-opacity-10">
          <div className="flex items-center lg:h-36">
            <p className="text-xs text-black">Copyright © 2023 Perched. All rights reserved.</p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 xl:w-3/5 px-4">
        </div>
      </div>
    </div>
  </div>
  <div className="container px-4 mx-auto">
    <div className="flex flex-wrap -mx-4">
      <div className="w-full lg:w-1/2 xl:w-2/5 px-4 mb-24 lg:mb-0 lg:border-r border-gray-900 border-opacity-10">
        <div className="lg:max-w-lg pt-20 lg:pb-24">
          <div className="inline-flex items-center px-5 py-2 bg-purple-50 rounded-full mb-8">
            <span className="block w-2 h-2 mr-2 rounded-full bg-indigo-500"></span>
            <span className="uppercase text-sm font-medium tracking-tight">STAY CONNECTED</span>
          </div>
          <h1 className="max-w-md text-5xl xs:text-7xl xl:text-8xl font-heading font-semibold mb-12">We are <span className='text-yellow-700'>Perched.</span></h1>
          <a className="inline-block py-5 px-6 md:pl-8 md:pr-16 border border-gray-50 hover:border-gray-100 rounded-3xl" href="#">
            <div className="flex flex-wrap md:flex-nowrap items-center">
            </div>
          </a>
        </div>
      </div>
      <div className="w-full lg:w-1/2 xl:w-3/5 px-4">
        <div className="pb-32 lg:pb-0 xl:pl-24 lg:pt-24">
          <div className="flex flex-wrap -mx-4 -mb-10">
            <div className="w-full xs:w-1/2 sm:w-1/3 px-4 mb-10">
              <h4 className="font-heading text-3xl font-medium mb-8">Home</h4>
              <ul>
                <li className="mb-2"><a className="inline-block text-2xs" href="#">Sign Up</a></li>
              </ul>
            </div>
            <div className="w-full xs:w-1/2 sm:w-1/3 px-4 mb-10">
              <h4 className="font-heading text-3xl font-medium mb-8">Categories</h4>
              <ul>
                <li className="mb-2"><a className="inline-block text-2xs" href="#">Graphics & Design</a></li>
                <li className="mb-2"><a className="inline-block text-2xs" href="#">Video & Animation</a></li>
                <li className="mb-2"><a className="inline-block text-2xs" href="#">Music & Audio</a></li>
                <li className="mb-2"><a className="inline-block text-2xs" href="#">Programming & Web Development</a></li>
              </ul>
            </div>
            <div className="w-full xs:w-1/2 sm:w-1/3 px-4 mb-10">
              <h4 className="font-heading text-3xl font-medium mb-8">The Team</h4>
              <ul>
                <li className="mb-2"><a className="inline-block text-2xs" href="#">LinkedIn</a></li>
                <li className="mb-2"><a className="inline-block text-2xs" href="#">GitHub</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}
