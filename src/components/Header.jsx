import { useState } from 'react'

function Header() {
    //<h1 className='text-4xl'>✊✋✌</h1>
    const [playerScore, setplayerScore] = useState(0)

    return (
        <nav className="text-center mt-6 w-full lg:flex lg:justify-between lg:h-48 lg:items-center">
            <h1 className="font-passion text-3xl text-sky-700 lg:text-5xl lg:pl-10">LET'S PLAY ROCK,<br></br> PAPER AND SCISSORS! 
            <br></br>✊✋✌</h1>
            <div className="flex justify-center w-full mt-2 lg:w-80 lg:justify-center lg:h-full">
                <div className="border-2 border-blue-300 rounded-xl w-1/3 lg:w-2/3 lg:flex lg:flex-col lg:justify-center ">
                    <h1 className="font-passion font-thin text-3xl lg:text-4xl">SCORE:</h1>
                    <h1 className='font-play font-bold text-5xl lg:text-6xl'>{playerScore}</h1>
                </div>
            </div>
        </nav>
    )
}

export default Header