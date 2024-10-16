import { useState } from 'react'

function Header() {

    const [playerScore, setplayerScore] = useState(0)

    return (
        <nav className="text-center mt-6">
            <h1>Header</h1>
        </nav>
    )
}

export default Header