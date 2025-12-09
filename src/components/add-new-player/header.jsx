import React from 'react'

const Header = () => {
  return (
    <div className='w-full flex flex-col gap-1'>
        <h1 className='text-2xl font-semibold'>Add New Player</h1>
        <p className='text-sm text-gray-400'>Fill in player information to add them to your team</p>
    </div>
  )
}

export default Header