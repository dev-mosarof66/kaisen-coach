import React from 'react'
import TeamPerformance from './top-performance'
import RecentResults from './recent-results'
import PlayerStatus from './player-status'

const FourthSection = () => {
    return (
        <div className='w-full grid grid-cols-1 xl:grid-cols-8 gap-2 mb-4'>
            {/* Top performance */}
            <TeamPerformance />
            {/* recent results */}
            <RecentResults />
            {/* players injured */}
            <PlayerStatus />
        </div>
    )
}

export default FourthSection