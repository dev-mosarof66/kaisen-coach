import { ArrowLeft, ChevronRight } from 'lucide-react'
import React from 'react'

const Navigation = () => {
    return (
        <div className="flex text-gray-500 gap-4">
            {/* Back Button */}
            <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
                <ArrowLeft className="w-5 h-5" />
                <p className="text-base font-medium">Back</p>
            </div>

            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-gray-400 text-sm">
                <div className="flex items-center gap-1">
                    <p className="hover:text-white transition-colors cursor-pointer">Players</p>
                    <ChevronRight className="w-4 h-4" />
                </div>
                <p className="text-gray-400 font-semibold">New Player</p>
            </div>
        </div>
    )
}

export default Navigation