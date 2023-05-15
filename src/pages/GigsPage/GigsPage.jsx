import React from 'react'
import Footer from '../../components/Footer/Footer'
import GigList from '../../components/GigList/GigList'

export default function GigsPage() {
  return (
    <>
    <section className="py-16 bg-gray-900">
  <div className="container px-4 mx-auto">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-wrap items-center justify-between mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold">
          <span className="text-white">Perched</span>
          <span className="text-yellow-600"> Gigs</span>
        </h2>
      </div>
      <div className="-mx-4 grid-cols-3">
        <GigList />
        </div>
      </div>
    </div>
</section>
<Footer />
    </>
  )
}
