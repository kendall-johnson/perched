import React from 'react'
import { Link } from 'react-router-dom'

export default function Gig({ gigs }) {
    return (
        <>
      <div className="w-full lg:w-3/4 px-4">
        <div className="flex flex-wrap -mx-4 -mb-8">
          {gigs.map((gig) => (
            <div className="w-full sm:w-1/2 xl:w-1/3 px-4 mb-8">
              <Link className="group block text-center" to="/">
                <div className="h-64 mb-4 bg-blueGray-900 rounded-md">
                  <img className="img-fluid w-full h-full transform -translate-x-1 -translate-y-1 object-cover border-2 border-black rounded-md" src="" alt=""/>
                </div>
                <h4 className="font-bold text-white group-hover:text-blue-500 mb-1">{gig.name}</h4>
                <span className="text-sm font-bold text-yellow-700">{gig.price}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
</>
    )
  }
  