import { Link } from 'react-router-dom'

function BtnPlayAgain() {
    return (
    <Link to="/">
        <button className="px-5 py-2 border-2  rounded-xl text-xl font-play font-bold bg-sky-800 text-white">
            Play Again
        </button>
    </Link>
    )
}

export default BtnPlayAgain