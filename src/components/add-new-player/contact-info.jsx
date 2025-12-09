'use client'
import React from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'
import { Input } from '../ui/input'
import { MdPhone } from 'react-icons/md'

const ContactInformation = () => {
    return (
        <Card className="bg-gray-800/70 border-gray-700/50 shadow-md rounded-2xl">
            <CardHeader className="pb-2">
                <div className="w-full flex items-center gap-2">
                    <MdPhone className="text-blue-500 text-xl" />
                    <p className="text-white font-medium text-lg">Contact Information</p>
                </div>
            </CardHeader>

            <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Email */}
                    <div className="flex flex-col gap-1">
                        <label className="text-gray-300 text-sm">Email</label>
                        <Input placeholder="player@example.com" className="bg-gray-800 border-gray-700 text-white" />
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col gap-1">
                        <label className="text-gray-300 text-sm">Phone</label>
                        <Input placeholder="+1 (555) 123-456789" className="bg-gray-800 border-gray-700 text-white" />
                    </div>

                    {/* address */}
                    <div className="col-span-2 flex flex-col gap-1">
                        <label className="text-gray-300 text-sm">Address</label>
                        <Input type="text" placeholder="Street address, city, country" className="bg-gray-800 border-gray-700 text-white" />
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default ContactInformation