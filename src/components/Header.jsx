import { useState } from 'react'

function Header() {

    const [playerScore, setplayerScore] = useState(0)

    return (
        <nav className="text-center mt-6">
            <h1 className="font-passion text-4xl text-sky-700">LET'S PLAY ROCK, PAPER AND SCISSORS!</h1>
            <h1 className='text-4xl'>✊✋✌</h1>
            <div className="flex justify-center w-full mt-2">
                <div className="border-4 border-blue-300 rounded-xl w-1/2">
                    <h1 className="font-passion font-thin text-4xl">SCORE:</h1>
                    <h1 className='font-play font-bold text-7xl'>{playerScore}</h1>
                </div>
            </div>
        </nav>
    )
}

export default Header