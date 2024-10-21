import Header from "./Header";
import Play from "../routes/Play";
import { Routes, Route } from 'react-router-dom';
import { useState } from "react";
import ErrorPage from "../routes/ErrorPage";
import Game from "../routes/Game"
import Footer from "./Footer";

function Main_Card() {

    const [playerScore, setPlayerScore] = useState(0);
    const [rockMoves, setRockMoves] = useState(0);

    return (
        <div className="bg-blue-800 h-screen flex justify-center items-center ">
            <div className=" bg-white w-10/12 h-[95%] overflow-y-auto rounded-2xl shadow-2xl flex flex-col items-center">
                < Header pScore={playerScore} rockMoves={rockMoves} setRockMoves={setRockMoves} />
                <Routes>
                    <Route path="/" 
                    element={<Play />} />
                    <Route path="/game" 
                    element={<Game 
                    pScore={playerScore} setscore={setPlayerScore} 
                    rockMoves={rockMoves} setRockMoves={setRockMoves} />}/>
                    <Route path="*" element={<ErrorPage />}/>
                </Routes>
                <Footer />
            </div>
        </div>
    )
}

export default Main_Card

