import React from 'react'
import { BsFillHeartPulseFill } from "react-icons/bs";
import { Card, CardContent, CardHeader } from '../ui/card'
import { Input } from '../ui/input'

const EmergencyContact = () => {
    return (
        <Card className="bg-gray-800/70 border-gray-700/50 shadow-md rounded-2xl">
            <CardHeader className="pb-2">
                <div className="w-full flex items-center gap-2">
                    <BsFillHeartPulseFill className="text-red-500 text-xl" />
                    <p className="text-white font-medium text-lg">Emergency Contact</p>
                </div>
            </CardHeader>

            <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* contact name */}
                    <div className="flex flex-col gap-1">
                        <label className="text-gray-300 text-sm">Contact Name</label>
                        <Input type={'text'} placeholder="Guardian or parent name" className="bg-gray-800 border-gray-700 text-white" />
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col gap-1">
                        <label className="text-gray-300 text-sm">Emergency Phone</label>
                        <Input placeholder="+1 (555) 123-456789" className="bg-gray-800 border-gray-700 text-white" />
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default EmergencyContact