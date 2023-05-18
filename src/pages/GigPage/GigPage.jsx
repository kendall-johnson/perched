import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer/Footer'
import { Link, useParams } from 'react-router-dom'
import { getGig, deleteGig } from '../../utilities/gigs-api';
import ReviewList from '../../components/ReviewList/ReviewList';
import { useNavigate } from 'react-router-dom';

export default function GigPage({user}) {
    let { gigId } = useParams();
    const navigate = useNavigate()
    const [gigData, setGigData] = useState(null);
    const [activeTab, setActiveTab] = useState('gig-description')

    const toggleTab = (tab) => {
        setActiveTab(tab);
    };

    function handleDelete() {
        const confirmed = window.confirm("Are you sure you want to delete your gig?");
        if (confirmed) {
          deleteGig(gigData._id)
            .then(() => {
              navigate('/gigs')
            })
            .catch(error => {
              console.log("Error deleting gig:", error);
            });
        }
      }

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
                <h1 className="mb-24 text-center text-6xl md:text-7xl lg:text-8xl font-heading font-medium">{gigData.title}</h1>
                <div className="flex flex-wrap -mx-4 mb-14 md:mb-24">
                <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
                    <div className="relative w-full md:w-3/4 ml-auto mb-16">
                    <div className="w-4/6 mx-auto">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg" alt=""/>
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
                    </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 px-4 xl:pl-20">
                    <div className="max-w-xl mb-6">
                    <p className="flex items-start mb-8">
                        <span className="flex items-center text-6xl text-blue-500 font-heading font-medium">
                        <span className="mr-2 text-xl">$</span>
                        <span>{gigData.price}</span>
                        </span>
                    </p>
                    <p className="text-lg text-gray-400">{gigData.description}</p>
                    </div>
                    <div className="flex flex-wrap -mx-2 mb-12">
                    <div className="w-full md:w-2/3 px-2 mb-2 md:mb-0"><a className="block py-4 px-2 leading-8 font-heading font-medium tracking-tighter text-xl text-black text-center bg-yellow-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-yellow-600 rounded-xl" href="#">Checkout (non-functional)</a></div>
                    </div>
                </div>
                </div>
                {user && user._id === gigData.user && (
                <div className="flex justify-center max-w-5xl pb-9 mx-auto">
                   <Link
                    className="bg-blue-500 py-2 px-2 border-2 border-black rounded-lg inline-block w-full md:w-auto mb-4 md:mb-0 md:mr-20 lg:mr-36 text-lg font-heading font-medium"
                    to={`/edit-gig/${gigId}`}
                    >
                    Edit Gig
                    </Link>
                    <button
                    className="bg-red-500 py-2 px-2 border-2 border-black rounded-lg inline-block w-full md:w-auto text-lg font-heading font-medium"
                    onClick={handleDelete}
                    >
                    Delete Gig
                    </button>
                </div>
                )}
                <div className="pt-9 border-t border-gray-100">
                <div className="flex justify-center max-w-5xl pb-9 mx-auto border-b border-gray-100">
                    <button
                    className={`inline-block w-full md:w-auto mb-4 md:mb-0 md:mr-20 lg:mr-36 text-lg font-heading font-medium ${activeTab === 'gig-description' ? 'active-tab' : ''}`}
                    onClick={() => toggleTab('gig-description')}
                    >
                    Gig Description
                    </button>
                    <button
                    className={`inline-block w-full md:w-auto text-lg font-heading font-medium ${activeTab === 'gig-reviews' ? 'active-tab' : ''}`}
                    onClick={() => toggleTab('gig-reviews')}
                    >
                    Reviews
                    </button>
                </div>
                {activeTab === 'gig-description' && (
                    <div id="gig-description" className="tab-content">
                    <h2 className='my-16 text-center text-2xl md:text-xl lg:text-4xl font-heading font-medium'>About the gig...</h2>
                    <p>{gigData.description}</p>
                    </div>
                )}

                {activeTab === 'gig-reviews' && (
                    <div id="gig-reviews" className="tab-content">
                    <ReviewList gigId={gigId}/>
                    </div>
                )}
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
