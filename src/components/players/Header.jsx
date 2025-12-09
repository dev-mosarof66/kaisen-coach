'use client'
import React from 'react'
import { Button } from '../ui/button'
import { FaPlus } from 'react-icons/fa'
import { cn } from '@/lib/utils'
import { constClassName } from '@/constants/constants'
import { useRouter } from 'next/navigation'

const Header = () => {
    const router = useRouter()
    return (
        <div className="w-full flex flex-col gap-4 sm:flex-row md:flex-col xl:flex-row items-center justify-between">

            <div className="w-full flex flex-col">
                <h1 className="text-2xl font-semibold tracking-tight">
                    Players
                </h1>
                <p className="text-gray-500 text-sm">
                    Manage and track all players across your teams
                </p>
            </div>

            <div className="w-full flex items-center sm:justify-end md:justify-start lg:justify-end gap-4">
                <Button
                    variant="outline"
                    className={cn("items-center gap-2", constClassName.outlineButton)} >
                    Import Players
                </Button>
                <Button onClick={() => router.push("/add-player")} className={cn("items-center gap-2", constClassName.primaryButton)}>
                    <FaPlus className="text-sm" />
                    Add Players
                </Button>


            </div>
        </div>
    )
}

export default Header
