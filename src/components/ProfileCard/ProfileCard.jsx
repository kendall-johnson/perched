import React from 'react'

export default function ProfileCard({user}) {
  return (
    <>
       <div className="bg-gray-50 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <div className="flex items-center space-x-5">
              <div className="block relative">
                <img alt="profile" src="https://i.imgur.com/M8s5qYT.png" className="mx-auto object-cover rounded-full h-20 w-20 "/>
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-gray-800">{user.name}</h1>
                <h2 className="text-sm font-semibold text-gray-500">{user.userType}</h2>
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-4 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <p>Email: {user.email}</p>
                <p>Location: Somewhere in the internet</p>
              </div>
              <div className="pt-4 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                <p>Biography:</p>
                <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus ex ac velit feugiat sagittis. Sed feugiat, felis nec hendrerit blandit, elit magna bibendum nunc, vitae aliquet odio nulla eu nisl. Fusce finibus quam vel mi posuere, et fringilla sapien scelerisque. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
