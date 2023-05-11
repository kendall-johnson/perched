import Navbar from '../../components/Navbar/Navbar'
import React from 'react'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'
import Gig from '../../components/Gig/Gig'

export default function GigsPage() {
  return (
    <>
    <Navbar />
    <section className="py-16 bg-gray-900">
  <div className="container px-4 mx-auto">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-wrap items-center justify-between mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold">
          <span className="text-white">Perched</span>
          <span className="text-yellow-600"> Gigs</span>
        </h2>
      </div>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full lg:w-1/4 px-4 mb-12 lg:mb-0">
          <div className="flex flex-wrap -mx-4 -mb-6">
            <div className="w-full sm:w-1/2 lg:w-full px-4 mb-6">
              <div className="h-full rounded-md bg-blueGray-900">
                <div className="p-6 h-full transform -translate-x-1 -translate-y-1 border-2 border-black bg-white rounded-md">
                  <h4 className="text-2xl font-bold mb-4">Category</h4>
                  <ul>
                    <li className="mb-4"><Link className="inline-block font-medium text-black hover:text-indigo-500" to="">Graphics & Design</Link></li>
                    <li className="mb-4"><Link className="inline-block font-medium text-black hover:text-indigo-500" to="">Video & Animation</Link></li>
                    <li className="mb-4"><Link className="inline-block font-medium text-black hover:text-indigo-500" to="">Music & Audio</Link></li>
                    <li className="mb-4"><Link className="inline-block font-medium text-black hover:text-indigo-500" to="">Programming & Web Development</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Gig />
        </div>
      </div>
    </div>
</section>
<Footer />
    </>
  )
}
