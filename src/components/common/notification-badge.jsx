'use client'
import React from 'react'
import { IoMdNotificationsOutline } from "react-icons/io";

const NotificationBadge = () => {
  return (
    <div className='relative p-1.5 md:p-2 bg-gray-500/10 border border-gray-500 rounded-xl hover:bg-gray-500/20 active:scale-95 cursor-pointer transition-all duration-300 delay-75'>
      <IoMdNotificationsOutline className='text-lg md:text-xl text-gray-400' />
      <div className='size-1.5 md:size-2 bg-red-500 rounded-full absolute top-1 right-1' />
    </div>
  )
}

export default NotificationBadge
