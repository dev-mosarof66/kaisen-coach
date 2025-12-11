'use client'
import React from 'react'
import { Dialog, DialogHeader, DialogTitle, DialogContent } from '../ui/dialog'
import { FaArrowRight, FaTimes, FaTrophy, FaUsers } from 'react-icons/fa';
import { PrimaryButton } from '../common/button';
import { useRouter } from 'next/navigation';


const TeamModal = ({ showModal, setShowModal }) => {
  const router = useRouter()

  if (!showModal) return null;


  return (
    <div className='fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end justify-end'>
      <div className='w-full max-w-sm bg-gray-900 h-full flex flex-col gap-6 px-4 overflow-y-scroll scrollbar-hidden'>
        {/* header  */}
        <div className='w-full flex items-center justify-between px-3 py-6 border-b border-gray-800'>
          <div className='flex items-center gap-2'>
            <div className='p-3 rounded-full bg-red-500/20 text-red-400'>
              <FaTrophy className='size-4' />
            </div>
            <div className='flex flex-col'>
              <h1 className='text-white text-sm font-semibold'>Team C -- U16</h1>
              <p className='text-gray-400 text-xs'>U16</p>
            </div>
          </div>
          <div className='text-gray-400 hover:text-white cursor-pointer' onClick={() => setShowModal(false)}>
            <FaTimes />
          </div>
        </div>

        {/* content  */}

        <div className='w-full h-full flex flex-col gap-6 px-0 overflow-y-scroll scrollbar-hidden'>

          {/* content header  */}
          <div className='w-full grid grid-cols-2 gap-4'>
            {/* win rate  */}
            <div className='w-full h-full flex flex-col gap-6 justify-between border border-gray-800 px-3 py-3 rounded-xl '>
              <h2 className='text-gray-400 text-sm font-semibold'>Win Rate</h2>
              <p className='text-gray-200 text-xl'>67%</p>
            </div>

            {/* players  */}
            <div className='w-full h-full flex flex-col gap-6 justify-between border border-gray-800 px-3 py-3 rounded-xl '>
              <h2 className='text-gray-400 text-sm font-semibold'>Players</h2>
              <p className='text-gray-200 text-xl'>18 / 18</p>
            </div>
          </div>

          {/* border  */}
          <div className='w-full border-b border-b-gray-800' />

          {/* last match results  */}
          <div className='w-full flex flex-col gap-3'>
            <h2 className='text-gray-400 text-lg font-semibold'>Season Record</h2>
            {/* season record  */}
            <div className='w-full flex flex-col gap-2 text-gray-400 border-b border-gray-800 pb-3 text-sm'>
              {/* wins  */}
              <div className='w-full flex items-center justify-between'>
                <p>Wins</p>
                <p className='text-green-500'>18</p>
              </div>
              {/* draws */}
              <div className='w-full flex items-center justify-between'>
                <p>Draws</p>
                <p className='text-amber-500'>3</p>
              </div>
              {/* losses */}
              <div className='w-full flex items-center justify-between'>
                <p>Losses</p>
                <p className='text-red-500'>2</p>
              </div>
            </div>
            {/* goals history  */}
            <div className='w-full flex flex-col py-3 gap-2 text-gray-400 text-sm'>
              <div className='w-full flex items-center justify-between'>
                <p>Goals For</p>
                <p className='text-white'>45</p>
              </div>
              <div className='w-full flex items-center justify-between'>
                <p>Goals Against</p>
                <p className='text-white'>18</p>
              </div>
              <div className='w-full flex items-center justify-between'>
                <p>Goal Difference</p>
                <p className='text-green-500'>+27</p>
              </div>
            </div>
            {/* player roaster  */}
            <div className='w-full flex flex-col gap-2 border-b border-b-gray-800 pb-5'>
              <h2 className='text-gray-400 text-lg font-semibold'>18 Player Roaster</h2>
              <div className='w-full flex flex-col gap-2'>
                <div className='w-full flex items-center justify-between text-sm text-gray-400'>
                  <p>RW</p>
                  <p className='text-green-500'>12</p>
                </div>
                <div className='w-full flex items-center justify-between text-sm text-gray-400'>
                  <p>MF</p>
                  <p className='text-amber-500'>3</p>
                </div>
                <div className='w-full flex items-center justify-between text-sm text-gray-400'>
                  <p>FW</p>
                  <p className='text-red-500'>2</p>
                </div>
              </div>
            </div>
          </div>

          {/* button  */}

          <div className='w-full flex justify-center border-b border-b-gray-800 pb-6'>
            <PrimaryButton onClick={() => router.push('/teams/team-details')} className='w-full flex items-center gap-6 bg-linear-to-br from-blue-500 via-blue-500 to-purple-500'>
              <p>Open Full Team Page</p>
              <FaArrowRight />
            </PrimaryButton>
          </div>

          {/* coach details  */}
          <div className='w-full flex flex-col gap-2 pb-10'>
            <h2 className='text-gray-400 text-xs font-semibold'>Head Coach</h2>
            <div onClick={() => router.push('/coaches/coach-details')} className='w-full flex items-center gap-4 bg-gray-950/50 p-3 rounded-xl  group hover:bg-gray-950/70 active:scale-95 cursor-pointer transition-all duration-300 hover:shadow-lg'>
              <div className='p-3 rounded-full bg-blue-500/20 text-blue-400'>
                <FaUsers />
              </div>
              <div className='flex-1 flex items-center justify-between'>
                <div className='flex flex-col'>
                  <h1 className='text-white text-sm font-semibold'>Coach Saleh</h1>
                  <p className='text-gray-400 text-xs'>View Profile</p>
                </div>
                <div className='text-gray-400 hover:text-white cursor-pointer'>
                  <FaArrowRight className='size-4 group-hover:translate-x-1 transition-all duration-300' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamModal
