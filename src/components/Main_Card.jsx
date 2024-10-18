import Header from "./Header";
import Play from "../routes/Play";
import { Routes, Route } from 'react-router-dom';
import { useState } from "react";
import ErrorPage from "../routes/ErrorPage";
import Game from "../routes/Game"

function Main_Card() {

    const [playerScore, setPlayerScore] = useState(0);

    return (
        <div className="bg-blue-800 h-screen flex justify-center items-center ">
            <div className=" bg-white w-10/12 h-[90%] rounded-2xl shadow-2xl flex flex-col items-center">
                < Header pScore={playerScore} />
                <Routes>
                    <Route path="/" 
                    element={<Play pScore={playerScore} pSetScore={setPlayerScore} />} />
                    <Route path="/game" element={<Game />}/>
                    <Route path="*" element={<ErrorPage />}/>
                </Routes>
            </div>
        </div>
    )
}

export default Main_Card

