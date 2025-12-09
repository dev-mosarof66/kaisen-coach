'use client'
import React from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'
import { Input } from '../ui/input'
import { IoShieldOutline } from 'react-icons/io5'

const PositionPhysicalInfoCard = () => {
  return (
    <Card className="bg-gray-800/70 border-gray-700/50 shadow-md rounded-2xl">
      <CardHeader className="pb-2">
        <div className="w-full flex items-center gap-2">
          <IoShieldOutline className="text-blue-500 text-xl" />
          <p className="text-white font-medium text-lg">Position & Physical Information</p>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Position */}
          <div className="flex flex-col gap-1">
            <label className="text-gray-300 text-sm">Position <span className="text-red-500">*</span></label>
            <select className="bg-gray-800 border border-gray-700 rounded-md px-3 py-2  text-gray-400 focus:outline-none focus:border-blue-500">
              <option value="" disabled selected>Select position</option>
              <option value="FW">FW</option>
              <option value="BW">BW</option>
              <option value="DF">DF</option>
            </select>
          </div>

          {/* Jersey Number */}
          <div className="flex flex-col gap-1">
            <label className="text-gray-300 text-sm">Jersey Number <span className="text-red-500">*</span></label>
            <Input placeholder="e.g. 10" className="bg-gray-800 border-gray-700 text-white" />
          </div>

          {/* Height */}
          <div className="flex flex-col gap-1">
            <label className="text-gray-300 text-sm">Height (cm)</label>
            <Input type="text" placeholder="e.g. 175" className="bg-gray-800 border-gray-700 text-white" />
          </div>

          {/* Weight */}
          <div className="flex flex-col gap-1">
            <label className="text-gray-300 text-sm">Weight (kg)</label>
            <Input type="text" placeholder="e.g. 70" className="bg-gray-800 border-gray-700 text-white" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default PositionPhysicalInfoCard
