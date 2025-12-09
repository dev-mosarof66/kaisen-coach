import React from 'react'
import { Button } from '../ui/button'
import { FaSave } from 'react-icons/fa'

export const TopButtons = () => {
    return (
        <div className='flex items-center gap-2 py-2'>
            <Button size={'sm'} className={'w-fit bg-transparent border border-gray-600 hover:bg-gray-500/10 cursor-pointer'}>
                Cancel
            </Button>
            <Button size={'sm'} className={'w-fit bg-blue-600 hover:bg-blue-700 cursor-pointer'}>
                Save Player
            </Button>
        </div>
    )
}
export const SubmitButtons = () => {
    return (
        <div className='w-full flex items-end justify-center gap-2'>
            <Button size={'sm'} className={'w-fit bg-transparent border border-gray-600 hover:bg-gray-500/10 cursor-pointer'}>
                Cancel
            </Button>
            <Button size={'sm'} className={'w-fit bg-linear-to-br from-blue-500 via-blue-500 to-purple-500  cursor-pointer'}>
                <FaSave />
                Save Player
            </Button>
        </div>
    )
}
