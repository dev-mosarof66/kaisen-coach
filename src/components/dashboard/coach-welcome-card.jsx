import React from "react"
import { Card } from "../ui/card"
import { Button } from "../ui/button"
import { FaPlus } from "react-icons/fa"

const WelcomeCard = () => {
    return (
        <Card className="w-full bg-transparent border-none text-white">
            <div className="flex flex-col gap-4 bg-linear-to-br from-gray-800 via-gray-800 to-blue-500/50  border border-gray-700 p-6 rounded-2xl">

                <div className="w-full flex flex-col gap-1">
                    <h1 className="text-2xl xl:text-3xl font-semibold tracking-tight">
                        Welcome back, <span>Coach Saleh</span>
                    </h1>
                    <p className="text-gray-500 text-sm xl:text-base">
                        Here’s what’s happening with your teams today.
                    </p>
                </div>

                <div className="w-full flex items-center gap-4">

                    <Button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white">
                        <FaPlus className="text-sm" />
                        Add Match
                    </Button>

                    <Button
                        variant="outline"
                        className="border-gray-600 bg-transparent hover:bg-white/5 text-white"
                    >
                        View Schedule
                    </Button>

                </div>
            </div>
        </Card>
    )
}

export default WelcomeCard
