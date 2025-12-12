'use client'
import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useRouter } from 'next/navigation'
import { PrimaryButton } from '../common/button'

const Header = () => {
    const router = useRouter()
    return (
        <div className="w-full flex  items-center justify-between">

            <div className="w-full flex flex-col">
                <h1 className="text-2xl font-semibold tracking-tight">
                    Teams Overview
                </h1>
                <p className="text-gray-500 text-sm">
                    Manage all teams across your club
                </p>
            </div>

            <div>
                <PrimaryButton onClick={() => router.push("/add-player")}>
                    <FaPlus className="text-sm" />
                    <p className='flex items-center gap-1'>Add Player</p>
                </PrimaryButton>


            </div>
        </div>
    )
}

export default Header
