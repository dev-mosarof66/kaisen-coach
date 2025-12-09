'use client';
import React, { useState } from 'react'
import PlayerCard from './player-card';
import IMG1 from './../../../public/image 7.png'
import IMG2 from './../../../public/image 8.png'
import IMG3 from './../../../public/image 9.png'
import IMG4 from './../../../public/image 10.png'
import IMG5 from './../../../public/image 11.png'
import IMG6 from './../../../public/image 13.png'
import IMG7 from './../../../public/image 16.png'
import IMG8 from './../../../public/image 7.png'
import PlayerModal from './player-modal';

export const players = [
    {
        name: "Lionel Messi",
        team: "U16 Eagles",
        age: 16,
        position: "FW",
        rating: 8.2,
        value: "$2.4M",
        club: "Alpha",
        image: IMG2
    },
    {
        name: "Ethan Carter",
        team: "U16 Eagles",
        age: 16,
        position: "FW",
        rating: 8.2,
        value: "$2.4M",
        club: "Alpha",
        image: IMG1
    },
    {
        name: "Liam Johnson",
        team: "U16 Eagles",
        age: 16,
        position: "FW",
        rating: 8.2,
        value: "$2.4M",
        club: "Alpha",
        image: IMG3
    },
    {
        name: "Noah Thompson",
        team: "U16 Eagles",
        age: 16,
        position: "FW",
        rating: 8.2,
        value: "$2.4M",
        club: "Alpha",
        image: IMG4
    },
    {
        name: "James Anderson",
        team: "U16 Eagles",
        age: 16,
        position: "FW",
        rating: 8.2,
        value: "$2.4M",
        club: "Alpha",
        image: IMG5
    },
    {
        name: "Lucas Brown",
        team: "U16 Eagles",
        age: 16,
        position: "FW",
        rating: 8.2,
        value: "$2.4M",
        club: "Alpha",
        image: IMG6
    },
    {
        name: "Oliver Martinez",
        team: "U16 Eagles",
        age: 16,
        position: "FW",
        rating: 8.2,
        value: "$2.4M",
        club: "Alpha",
        image: IMG7
    },
    {
        name: "Mason Wilson",
        team: "U16 Eagles",
        age: 16,
        position: "FW",
        rating: 8.2,
        value: "$2.4M",
        club: "Alpha",
        image: IMG8
    }
];

const PlayersList = ({ tab }) => {
    const [selectedPlayer, setSelectedPlayer] = useState(null);

    return (
        <div className='w-full relative'>
            {/* Grid of players */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {players.map((player, index) => (
                    <PlayerCard
                        key={index}
                        index={index}
                        name={player.name}
                        image={player.image}
                        team={player.team}
                        age={player.age}
                        position={player.position}
                        rating={player.rating}
                        value={player.value}
                        club={player.club}
                        selectedPlayer={selectedPlayer}
                        setSelectedPlayer={setSelectedPlayer}
                    />
                ))}
            </div>

            {/* Modal */}
            {selectedPlayer !== null && (
                <PlayerModal player={players[selectedPlayer]} onClose={()=> setSelectedPlayer(null)} />
            )}
        </div>
    );
}

export default PlayersList;
