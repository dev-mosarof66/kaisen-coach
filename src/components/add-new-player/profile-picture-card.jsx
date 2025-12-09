import React from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'
import { Button } from '../ui/button'
import { FiUser } from "react-icons/fi";

const ProfilePictureCard = () => {
    return (
        <Card className={'bg-gray-800/70 border-gray-700/50 shadow-sm inset-0'}>
            <CardHeader>
                <div className='w-full flex items-center gap-2'>
                    <FiUser className='text-blue-500 text-xl' />
                    <p className='text-white'>Profile Picture</p>
                </div>
            </CardHeader>
            <CardContent>
                <div className='w-full flex items-center gap-4'>
                    <div className='size-16 sm:size-24 rounded-full text-xl bg-linear-to-br from-blue-500 via-blue-500 to-purple-500 text-white flex items-center justify-center'>
                        PL
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Button size={'sm'} className={'w-fit text-xs bg-transparent border border-gray-400 hover:bg-gray-500/10'}>
                            Upload Photo
                        </Button>
                        <p className='text-xs sm:text-sm text-gray-300'>JPG or PNG. Max of 2MB</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default ProfilePictureCard