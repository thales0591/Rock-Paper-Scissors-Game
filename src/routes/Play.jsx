import rock from "../assets/rock.png"
import paper from "../assets/paper.png"
import scissor from "../assets/scissor.png"

function Play () {
    return (
    <div className="text-center mt-2 h-4/6 w-full flex flex-col justify-around items-center">
        <h1 className="font-passion text-sky-700 text-[38px]">Make your move!</h1>
        <img src={rock} alt="rock hand image" className="hover:scale-110 transition-transform duration-0.3s" />
        <img src={paper} alt="paper hand image" className="hover:scale-110 transition-transform duration-0.3s" />
        <img src={scissor} alt="scissor hand image" className="hover:scale-110 transition-transform duration-0.3s" />
    </div>
    )
}

export default Play