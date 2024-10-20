import { Link } from 'react-router-dom'

function BtnPlayAgain({text}) {

    // 
    return (
    <Link to="/">
        <button className="px-5 py-2 border-2 border-white lg:hidden rounded-xl text-base font-play font-bold bg-sky-700 text-white hover:bg-sky-800">
            {text}
        </button>

        <button className="px-5 py-2 hidden border-white lg:block border-2 rounded-xl text-xl font-play font-bold bg-sky-700 text-white hover:bg-sky-800">
            {text}
        </button>
    </Link>
    )
}

export default BtnPlayAgain