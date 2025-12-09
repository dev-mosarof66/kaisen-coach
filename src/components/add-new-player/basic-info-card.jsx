'use client'
import React from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'
import { Input } from '../ui/input'
import { FiUser } from 'react-icons/fi'

const BasicInfoCard = () => {
    return (
        <Card className="bg-gray-800/70 border-gray-700/50 shadow-md rounded-2xl">
            <CardHeader className="pb-2">
                <div className="w-full flex items-center gap-2">
                    <FiUser className="text-blue-500 text-xl" />
                    <p className="text-white font-medium text-lg">Basic Information</p>
                </div>
            </CardHeader>

            <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* First Name */}
                    <div className="flex flex-col gap-1">
                        <label className="text-gray-300 text-sm">First Name <span className="text-red-500">*</span></label>
                        <Input placeholder="Enter first name" className="bg-gray-800 border-gray-700 text-white" />
                    </div>

                    {/* Last Name */}
                    <div className="flex flex-col gap-1">
                        <label className="text-gray-300 text-sm">Last Name <span className="text-red-500">*</span></label>
                        <Input placeholder="Enter last name" className="bg-gray-800 border-gray-700 text-white" />
                    </div>

                    {/* Date of Birth */}
                    <div className="flex flex-col gap-1">
                        <label className="text-gray-300 text-sm">Date of Birth <span className="text-red-500">*</span></label>
                        <Input type="date" className="bg-gray-800 border-gray-700 text-gray-400" />
                    </div>

                    {/* Team */}
                    <div className="flex flex-col gap-1">
                        <label className="text-gray-300 text-sm">Team <span className="text-red-500">*</span></label>
                        <select className="bg-gray-800 border border-gray-700 rounded-md px-3 py-2  text-gray-400 focus:outline-none focus:border-blue-500">
                            <option value="" disabled selected>
                                Select team
                            </option>
                            <option value="Argentina">Argentina</option>
                            <option value="Brazil">Brazil</option>
                            <option value="Miami">Miami</option>
                        </select>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default BasicInfoCard