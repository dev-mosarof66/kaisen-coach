'use client'
import React from 'react'
import { Card } from '../ui/card'
import TrendChart from './trend-chart'





const FormTrend = () => {
    return (
        <Card className='w-full flex flex-col gap-4 border border-gray-800 bg-gray-800/50 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300'>
            <div>
                <h1 className='text-gray-300 text-base sm:text-lg font-semibold'>Form Trend(Last 5 Matches)</h1>
            </div>
            <div className='w-full h-full flex flex-col gap-2'>
                <TrendChart />
            </div>
        </Card>
    )
}

export default FormTrend