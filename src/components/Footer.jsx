import { useState } from "react"

function Footer() {

    const [isOpen, setIsOpen] = useState(false);

    function openModal() {
        return setIsOpen(true);
    }

    function closeModal() {
        return setIsOpen(false);
    }

    return (

        <div className=" w-full h-[15%] flex justify-center items-center">
            <button className="px-10 py-2 border-2 border-white rounded-xl text-base font-play font-bold bg-indigo-600 hover:bg-indigo-800 text-white"
            onClick={openModal}
            >Rules</button>

            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
            
                <div className="bg-white p-6 rounded-lg shadow-lg relative w-2/3 animate-slideDown">
                  <h2 className="text-xl font-bold mb-4">Rules</h2>
                  <p><span className="mb-4 font-bold">1. Rock beats Scissors: </span> <span>Rock can crush scissors.</span></p>
                  <p><span className="mb-4 font-bold">2. Scissors beat Paper: </span> <span>Scissors can cut through paper.</span></p> 
                  <p><span className="font-bold">3. Paper beats Rock: </span> <span>Paper can wrap around rock.</span></p>

                  <p className="mb-4 mt-4">Both players choose one of these moves at the same time. The winner is determined by the rules above. If both players choose the same move, it’s a draw.</p>

                  <span className="font-bold">Important rule:</span> <span>You can not play rock two times in a row!</span >
                  <button
                    onClick={closeModal} 
                    className="bg-indigo-600 text-white px-4 py-2 mt-4 rounded hover:bg-indigo-800 block">
                    Close 
                  </button>

                </div>
              </div>
            )}
            
        </div>
    )
}

export default Footer
