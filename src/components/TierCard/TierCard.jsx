import React from 'react'

export default function TierCard() {
  return (
    <>
    <div className="w-full lg:w-1/2 px-4 xl:pl-20">
                    <div className="max-w-xl mb-6">
                    <p className="flex items-start mb-8">
                        <span className="flex items-center text-6xl text-blue-500 font-heading font-medium">
                        <span className="mr-2 text-xl">$</span>
                        <span>235.00</span>
                        </span>
                    </p>
                    <p className="text-lg text-gray-400">Tier Information Here</p>
                    </div>
                    <div className="flex mb-6 items-center">
                    <div className="inline-flex mr-4">
                        <button className="mr-1">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 7.91679H12.4167L10 0.416779L7.58333 7.91679H0L6.18335 12.3168L3.81668 19.5835L10 15.0835L16.1834 19.5835L13.8167 12.3168L20 7.91679Z" fill="#C1C9D3"></path>
                        </svg>
                        </button>
                        <button className="mr-1">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 7.91679H12.4167L10 0.416779L7.58333 7.91679H0L6.18335 12.3168L3.81668 19.5835L10 15.0835L16.1834 19.5835L13.8167 12.3168L20 7.91679Z" fill="#C1C9D3"></path>
                        </svg>
                        </button>
                        <button className="mr-1">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 7.91679H12.4167L10 0.416779L7.58333 7.91679H0L6.18335 12.3168L3.81668 19.5835L10 15.0835L16.1834 19.5835L13.8167 12.3168L20 7.91679Z" fill="#C1C9D3"></path>
                        </svg>
                        </button>
                        <button className="mr-1">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 7.91679H12.4167L10 0.416779L7.58333 7.91679H0L6.18335 12.3168L3.81668 19.5835L10 15.0835L16.1834 19.5835L13.8167 12.3168L20 7.91679Z" fill="#C1C9D3"></path>
                        </svg>
                        </button>
                        <button>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 7.91679H12.4167L10 0.416779L7.58333 7.91679H0L6.18335 12.3168L3.81668 19.5835L10 15.0835L16.1834 19.5835L13.8167 12.3168L20 7.91679Z" fill="#C1C9D3"></path>
                        </svg>
                        </button>
                    </div>
                    <span className="text-md text-gray-400">4.59</span>
                    </div>
                    <div className="mb-8">
                    </div>
                    <div className="mb-7">
                    <h4 className="mb-4 font-heading font-medium">Tier</h4>
                    <button className="inline-flex items-center justify-center h-12 w-24 rounded-full border-2 border-gray-100 hover:border-gray-200 border-opacity-80 text-gray-400 font-medium">Basic</button>
                    <button className="inline-flex items-center justify-center h-12 w-24 rounded-full border-2 border-gray-100 hover:border-gray-200 border-opacity-80 text-gray-400 font-medium">Standard</button>
                    <button className="relative inline-flex items-center justify-center h-12 w-24 rounded-full border-2 border-gray-100 border-opacity-80 text-blue-500 font-medium">
                        <span>Premium</span>
                        <div className="absolute bottom-0 w-12 py-px transform translate-y-1/2 bg-blue-500 rounded-full"></div>
                    </button>
                    </div>
                    <div className="mb-10">
                    </div>
                    <div className="flex flex-wrap -mx-2 mb-12">
                    <div className="w-full md:w-2/3 px-2 mb-2 md:mb-0"><a className="block py-4 px-2 leading-8 font-heading font-medium tracking-tighter text-xl text-black text-center bg-yellow-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-yellow-600 rounded-xl" href="#">Checkout</a></div>
                    <div className="w-full md:w-1/3 px-2">
                        <a className="flex items-center justify-center w-full py-4 px-2 leading-8 font-heading font-medium tracking-tighter text-xl text-center bg-gray-50 focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50 hover:bg-opacity-60 rounded-xl" href="#">
                        <span className="mr-2">Wishlist</span>
                        <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.3235 20.1324L2.52488 10.8515C1.75232 10.0706 1.24237 9.06367 1.06728 7.97339C0.8922 6.88311 1.06086 5.76477 1.54936 4.7768V4.7768C1.91837 4.03089 2.45739 3.3843 3.12201 2.89033C3.78663 2.39635 4.55781 2.06911 5.37203 1.93558C6.18626 1.80205 7.0202 1.86605 7.80517 2.1223C8.59013 2.37855 9.30364 2.81972 9.88691 3.40946L11.3235 4.86204L12.7601 3.40946C13.3434 2.81972 14.0569 2.37855 14.8419 2.1223C15.6269 1.86605 16.4608 1.80205 17.275 1.93558C18.0892 2.06911 18.8604 2.39635 19.525 2.89033C20.1897 3.3843 20.7287 4.03089 21.0977 4.7768V4.7768C21.5862 5.76477 21.7549 6.88311 21.5798 7.97339C21.4047 9.06367 20.8947 10.0706 20.1222 10.8515L11.3235 20.1324Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                        </a>
                    </div>
                    </div>
                </div>
    </>
  )
}
