'use client';
import React from 'react';
import Image from 'next/image';
import { FaTimes } from 'react-icons/fa';

const PlayerModal = ({ player, onClose }) => {
    if (!player) return null;

    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-end justify-end">
            <div className="bg-gray-900 w-full h-screen max-w-md relative text-white">
                {/* Close Button */}
                <div
                    onClick={onClose}
                    className="w-full p-3 border-b border-gray-700 flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer transition-all duration-300 delay-75"
                >
                    <FaTimes />
                    <p>Close</p>
                </div>

                <div className='w-full h-full px-4 overflow-y-scroll scrollbar-hidden'>
                    {/* Player Image */}
                    <div className="w-full flex justify-center mb-4">
                        <Image
                            src={player.image.src}
                            alt={player.name}
                            width={200}
                            height={200}
                            className="rounded-xl object-cover"
                        />
                    </div>

                    {/* Player Name & Position */}
                    <div className="text-center mb-4">
                        <h2 className="text-2xl font-bold">{player.name}</h2>
                        <span className="px-3 py-1 rounded-full bg-purple-600/30 text-purple-300 text-sm font-semibold">
                            {player.position} ({player.position})
                        </span>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                        <div>
                            <p className="text-gray-400">Games Played</p>
                            <p className="font-medium">{player.gamesPlayed || 36}</p>
                        </div>
                        <div>
                            <p className="text-gray-400">Goals</p>
                            <p className="font-medium">{player.goals || 25}</p>
                        </div>
                        <div>
                            <p className="text-gray-400">Assists</p>
                            <p className="font-medium">{player.assists || 10}</p>
                        </div>
                        <div>
                            <p className="text-gray-400">Team</p>
                            <p className="font-medium">{player.team}</p>
                        </div>
                    </div>

                    {/* Joined info */}
                    <div className="flex justify-between text-gray-400 text-xs mb-4">
                        <span>Joined Team: {player.joined || "08/10/2021"}</span>
                        <span>Club: {player.club}</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 mb-4">
                        <button className="flex-1 bg-blue-600 hover:bg-blue-700 rounded-lg py-2 text-white font-semibold">
                            View Profile
                        </button>
                        <button className="flex-1 bg-gray-700 hover:bg-gray-600 rounded-lg py-2 text-white font-semibold">
                            Switch Team
                        </button>
                        <button className="flex-1 bg-red-600 hover:bg-red-700 rounded-lg py-2 text-white font-semibold">
                            Remove
                        </button>
                    </div>

                    {/* Market Value */}
                    <div className="mb-4">
                        <p className="text-gray-400 text-sm mb-1">Market Value</p>
                        <p className="text-green-400 font-medium text-lg">{player.value || "$80M"}</p>
                        {/* Placeholder chart */}
                        <div className="w-full h-24 bg-gray-800 rounded-lg mt-2 flex items-end gap-1 p-1">
                            {[100, 80, 80, 70, 60, 50].map((val, i) => (
                                <div
                                    key={i}
                                    className="bg-blue-500 rounded-sm"
                                    style={{ height: `${val / 2}px`, flex: 1 }}
                                ></div>
                            ))}
                        </div>
                        <p className="text-green-500 text-xs mt-1">+15% compared to last month</p>
                    </div>

                    {/* Bottom Actions */}
                    <div className="flex gap-2">
                        <button className="flex-1 bg-gray-700 hover:bg-gray-600 rounded-lg py-2 text-white font-semibold">
                            Assign Task
                        </button>
                        <button className="flex-1 bg-gray-700 hover:bg-gray-600 rounded-lg py-2 text-white font-semibold">
                            Add Note
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerModal;
