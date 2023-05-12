import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { Link, useParams } from 'react-router-dom'
import { getGig } from '../../utilities/gigs-api';
import TierCard from '../../components/TierCard/TierCard';

export default function GigPage() {
    let { gigId } = useParams();
    const [gigData, setGigData] = useState(null);
    
    useEffect(() => {
        getGig(gigId)
          .then(data => {
            setGigData(data);
          })
          .catch(error => {
            console.error('Error fetching gig data:', error);
          });
      }, [gigId]);

  return (
    <>
    <div>
        {gigData === null ? (
          <div>Loading...</div>
        ) : (
          <>
            <section className="pt-12 pb-24 bg-white overflow-hidden">
            <ul className="flex flex-wrap px-4 md:mx-16 mb-12 md:mb-16 items-center">
                <li className="mr-6">
                <Link className="flex items-center text-sm font-medium text-gray-400 hover:text-gray-500" to="/">
                    <span>Home</span>
                    <svg className="ml-6" width="4" height="7" viewBox="0 0 4 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.150291 0.898704C-0.0500975 0.692525 -0.0500975 0.359292 0.150291 0.154634C0.35068 -0.0507836 0.674443 -0.0523053 0.874831 0.154634L3.7386 3.12787C3.93899 3.33329 3.93899 3.66576 3.7386 3.8727L0.874832 6.84594C0.675191 7.05135 0.35068 7.05135 0.150292 6.84594C-0.0500972 6.63976 -0.0500972 6.30652 0.150292 6.10187L2.49888 3.49914L0.150291 0.898704Z" fill="currentColor"></path>
                    </svg>
                </Link>
                </li>
                <li className="mr-6">
                <Link className="flex items-center text-sm font-medium text-gray-400 hover:text-gray-500" to="/gigs">
                    <span>Gigs</span>
                    <svg className="ml-6" width="4" height="7" viewBox="0 0 4 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.150291 0.898704C-0.0500975 0.692525 -0.0500975 0.359292 0.150291 0.154634C0.35068 -0.0507836 0.674443 -0.0523053 0.874831 0.154634L3.7386 3.12787C3.93899 3.33329 3.93899 3.66576 3.7386 3.8727L0.874832 6.84594C0.675191 7.05135 0.35068 7.05135 0.150292 6.84594C-0.0500972 6.63976 -0.0500972 6.30652 0.150292 6.10187L2.49888 3.49914L0.150291 0.898704Z" fill="currentColor"></path>
                    </svg>
                </Link>
                </li>
                <li><p className="text-sm font-medium text-gray-500 ">{gigData.title}</p></li>
            </ul>
            <div className="relative container px-4 mx-auto">
                <div className="hidden md:flex md:absolute left-0 top-0 mt-20 min-w-max px-4 text-center md:flex-col items-center justify-center">
                <a className="inline-block sm:mb-12 mr-4 sm:mr-0 transform -rotate-90 sm:transform-none hover:text-darkBlueGray-400" href="#">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.54064 7.21015C1.18719 7.59662 0.615928 7.59662 0.265087 7.21015C-0.087058 6.82369 -0.0896663 6.19929 0.265087 5.81282L5.36206 0.289847C5.71421 -0.0966173 6.28416 -0.0966172 6.63892 0.289847L11.7359 5.81282C12.088 6.19785 12.088 6.82369 11.7359 7.21015C11.3824 7.59662 10.8112 7.59662 10.4603 7.21015L5.99853 2.68073L1.54064 7.21015Z" fill="currentColor"></path>
                    </svg>
                </a>
                <a className="h-30 block mb-4 mr-2 sm:mr-0 border border-gray-100 rounded-3xl" href="#">
                    <img className="h-full w-full" src="" alt=""/>
                </a>
                <a className="hidden sm:block h-30 mb-4 mr-2 sm:mr-0 border border-gray-100 rounded-3xl" href="#">
                    <img className="h-full w-full" src="" alt=""/>
                </a>
                <a className="hidden sm:block h-30 mb-4 mr-2 sm:mr-0 rounded-3xl border-2 border-blueGray-500" href="#">
                    <img className="h-full w-full" src="" alt=""/>
                </a>
                <a className="h-30 block mb-4 sm:mb-12 mr-4 sm:mr-0 border border-gray-100 rounded-3xl" href="#">
                    <img className="h-full w-full" src="" alt=""/>
                </a>
                <a className="inline-block transform -rotate-90 sm:transform-none hover:text-darkBlueGray-400" href="#">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.4594 0.289849C10.8128 -0.0966154 11.3841 -0.0966154 11.7349 0.289849C12.0871 0.676313 12.0897 1.30071 11.7349 1.68718L6.63794 7.21015C6.28579 7.59662 5.71584 7.59662 5.36108 7.21015L0.264109 1.68718C-0.0880364 1.30215 -0.0880363 0.676312 0.264109 0.289848C0.617558 -0.096616 1.18882 -0.0966159 1.53966 0.289848L6.00147 4.81927L10.4594 0.289849Z" fill="currentColor"></path>
                    </svg>
                </a>
                </div>
                <h1 className="mb-24 text-center text-6xl md:text-7xl lg:text-8xl font-heading font-medium">{gigData.title}</h1>
                <div className="flex flex-wrap -mx-4 mb-14 md:mb-24">
                <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
                    <div className="relative w-full md:w-3/4 ml-auto mb-16">
                    <div className="w-4/6 mx-auto">
                        <img src="" alt=""/>
                    </div>
                    <button className="absolute top-1/2 left-0 hover:text-darkBlueGray-400 -mt-20 md:-mt-0">
                        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.21015 10.4594C7.59661 10.8128 7.59661 11.3841 7.21015 11.7349C6.82369 12.0871 6.19929 12.0897 5.81282 11.7349L0.289847 6.63794C-0.0966172 6.28579 -0.0966172 5.71584 0.289847 5.36108L5.81282 0.264109C6.19785 -0.0880364 6.82369 -0.0880364 7.21015 0.264109C7.59662 0.617558 7.59662 1.18882 7.21015 1.53966L2.68073 6.00147L7.21015 10.4594Z" fill="currentColor"></path>
                        </svg>
                    </button>
                    <button className="absolute top-1/2 right-0 hover:text-darkBlueGray-400 -mt-20 md:-mt-0">
                        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.289849 1.54064C-0.0966146 1.18719 -0.0966145 0.615928 0.28985 0.265087C0.676314 -0.087058 1.30071 -0.0896664 1.68718 0.265087L7.21015 5.36206C7.59662 5.71421 7.59662 6.28416 7.21015 6.63892L1.68718 11.7359C1.30215 12.088 0.676312 12.088 0.289848 11.7359C-0.0966159 11.3824 -0.0966159 10.8112 0.289848 10.4603L4.81927 5.99853L0.289849 1.54064Z" fill="currentColor"></path>
                        </svg>
                    </button>
                    <div className="md:hidden mt-16 px-4 text-center flex items-center justify-center">
                        <a className="inline-block mr-4 transform -rotate-90" href="#">
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.54064 7.21015C1.18719 7.59662 0.615928 7.59662 0.265087 7.21015C-0.087058 6.82369 -0.0896663 6.19929 0.265087 5.81282L5.36206 0.289847C5.71421 -0.0966173 6.28416 -0.0966172 6.63892 0.289847L11.7359 5.81282C12.088 6.19785 12.088 6.82369 11.7359 7.21015C11.3824 7.59662 10.8112 7.59662 10.4603 7.21015L5.99853 2.68073L1.54064 7.21015Z" fill="black"></path>
                        </svg>
                        </a>
                        <a className="h-30 block mr-2 border border-gray-100 rounded-3xl" href="#">
                        <img className="h-full w-full" src="" alt=""/>
                        </a>
                        <a className="h-30 block mr-2 border border-gray-100 rounded-3xl" href="#">
                        <img className="h-full w-full" src="" alt=""/>
                        </a>
                        <a className="h-30 block mr-2 rounded-3xl border-2 border-blueGray-500" href="#">
                        <img className="h-full w-full" src="" alt=""/>
                        </a>
                        <a className="h-30 block mr-4 border border-gray-100 rounded-3xl" href="#">
                        <img className="h-full w-full" src="" alt=""/>
                        </a>
                        <a className="inline-block transform -rotate-90" href="#">
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.4594 0.289849C10.8128 -0.0966154 11.3841 -0.0966154 11.7349 0.289849C12.0871 0.676313 12.0897 1.30071 11.7349 1.68718L6.63794 7.21015C6.28579 7.59662 5.71584 7.59662 5.36108 7.21015L0.264109 1.68718C-0.0880364 1.30215 -0.0880363 0.676312 0.264109 0.289848C0.617558 -0.096616 1.18882 -0.0966159 1.53966 0.289848L6.00147 4.81927L10.4594 0.289849Z" fill="black"></path>
                        </svg>
                        </a>
                    </div>
                    </div>
                </div>
                <TierCard />
                </div>
                <div className="pt-9 border-t border-gray-100">
                <div className="flex justify-center max-w-5xl pb-9 mx-auto border-b border-gray-100">
                  <a className="inline-block w-full md:w-auto mb-4 md:mb-0 md:mr-20 lg:mr-36 text-lg font-heading font-medium" href="#">Gig details</a><a className="inline-block w-full md:w-auto text-lg font-heading font-medium" href="#">Reviews (# of reviews)</a>
                </div>
                </div>
            </div>
            </section>
          </>
        )}
    </div>
    <Footer />
    </>
  )
}
