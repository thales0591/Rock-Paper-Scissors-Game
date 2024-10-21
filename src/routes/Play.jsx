import rock from "../assets/rock.png"
import paper from "../assets/paper.png"
import scissor from "../assets/scissor.png"
import bsrock from "../assets/bs-rock.png"
import bspaper from "../assets/bs-paper.png"
import bsscissor from "../assets/bs-scissor.png"
import { Link } from "react-router-dom"


function Play () {

    const moves = ['rock', 'paper', 'scissor'];

    function machineMove () {
        return moves[Math.floor(Math.random() * 3)]
    }

    return (
    <>
    <div className=" w-full text-center">
        <h1 className="font-passion text-sky-700 text-[38px] lg:text-[50px]">Make your move!</h1>
    </div>

    <div className="text-center h-[32rem] w-full flex flex-col justify-around items-center lg:flex-row lg:hidden gap-10 mt-5 mb-10">

        <Link to="/game" 
        state={{player: "rock", machine: machineMove()}}>
        <img src={rock} alt="rock hand image" className="hover:scale-110 transition-transform duration-0.3s" /></Link>

        <Link to="/game"
        state={{player: "paper", machine: machineMove()}}>
        <img src={paper} alt="paper hand image" className="hover:scale-110 transition-transform duration-0.3s" /></Link>

        <Link to="/game"
        state={{player: "scissor", machine: machineMove()}}>
        <img src={scissor} alt="scissor hand image" className="hover:scale-110 transition-transform duration-0.3s" /></Link>

    </div>

    <div className="text-center h-[32rem] w-full flex-col justify-around items-center lg:flex-row hidden lg:flex">

        <Link to="/game" 
        state={{player: "rock", machine: machineMove()}}>
        <img src={bsrock} alt="rock hand image" className="hover:scale-110 transition-transform duration-0.3s" /></Link>

        <Link to="/game"
         state={{player: "paper", machine: machineMove()}}>
        <img src={bspaper} alt="rock hand image" className="hover:scale-110 transition-transform duration-0.3s" /></Link>

        <Link to="/game"
        state={{player: "scissor", machine: machineMove()}}>
        <img src={bsscissor} alt="rock hand image" className="hover:scale-110 transition-transform duration-0.3s" /></Link>
    </div>
    </>
    )
}

export default Play