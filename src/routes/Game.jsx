import { useLocation } from "react-router-dom";
import rock from "../assets/rock.png";
import paper from "../assets/paper.png";
import scissor from "../assets/scissor.png";
import bsrock from "../assets/bs-rock.png";
import bspaper from "../assets/bs-paper.png";
import bsscissor from "../assets/bs-scissor.png";
import { Link } from 'react-router-dom'
import BtnPlayAgain from "../components/BtnPlayAgain";
import { useEffect, useState } from "react";

function Game({ pScore, setscore }) {

   const location = useLocation();
   const {machine, player} = location.state || {};
   const [result, setResult] = useState('');

   useEffect(() => {
      setResult(gameResult())
   }, [])

   function checkMachinePlay(size) {
      if (machine == "rock") {
         return size == 1 ? rock : bsrock
      }
      if (machine == "paper") {
         return size == 1 ? paper : bspaper
      }
      if (machine == "scissor") {
         return size == 1 ? scissor : bsscissor
      }
   }
   
   function gameResult() {
      if (player == "rock") {
         if (machine == "paper") {
            
            return "You lost :/"
         }
         if (machine == "scissor") {
            setscore(pScore + 1)
            return "You won :D"
         }
         return "It's a draw!"
      }
      else if (player == "paper") {
         if (machine == "rock") {
            setscore(pScore + 1)
            return "You won :D"
         }
         if (machine == "scissor") {
            return "You lost :/"
         }
         return "It's a draw!"
      }
      else {
         if (machine == "rock") {
            return "You lost :/"
         }
         if (machine == "paper") {
            setscore(pScore + 1)
            return "You won :D"
         }
         return "It's a draw!"
      }
   }

   return(
      location.state ? 
      (<>
      <div className="w-full h-[60%] lg:hidden flex flex-row justify-around items-center animate-slideDown">

         <div className="flex flex-col items-center gap-5 text-center "> 

            <div className="w-full">
               <h1 className="font-passion text-2xl text-sky-700">Player 1</h1>
               <h1 className="font-passion text-2xl text-sky-700">(you):</h1>
            </div>
            {player == "rock" && (
               <img src={rock} alt="rock hand image"/>)}
            {player == "paper" && (
               <img src={paper} alt="paper hand image"/>)}
            {player == "scissor" && (
               <img src={scissor} alt="scissor hand image" />)}
         
         </div>

         <div className="flex flex-col justify-center items-center gap-5 mt-24 ">
               <h1 className="font-passion text-sky-700 text-3xl ">{result}</h1>
               <BtnPlayAgain />
         </div>

         <div className="flex flex-col items-center text-center gap-5">
            <div className="w-full">
               <h1 className="font-passion text-2xl text-sky-700">Player 2</h1>
               <h1 className="font-passion text-2xl text-sky-700">(machine):</h1>
            </div>
            <img src={checkMachinePlay(1)} alt="machine hands move" />
         </div>
         

      </div>
      


      <div className="w-full h-[60%] lg:flex flex-row justify-around items-center animate-slideDown hidden ">
         
         <div className="flex flex-col items-center gap-5 text-center">
            <div className="w-full">
               <h1 className="font-passion text-4xl text-sky-700">Player 1</h1>
               <h1 className="font-passion text-4xl text-sky-700">(you):</h1>
            </div>
            {player == "rock" && (
               <img src={bsrock} alt="rock hand image" />)}
            {player == "paper" && (
               <img src={bspaper} alt="paper hand image" />)}
            {player == "scissor" && (
               <img src={bsscissor} alt="scissor hand image" />)}
         </div>

         <div className="flex flex-col justify-center h-full gap-5 mt-24"> 
            <h1 className="font-passion text-sky-700 text-4xl">{result}</h1>
            <BtnPlayAgain />
         </div>

         <div className="flex flex-col items-center text-center gap-5">
            <div className="w-full">
               <h1 className="font-passion text-4xl text-sky-700">Player 2</h1>
               <h1 className="font-passion text-4xl text-sky-700">(machine):</h1>
            </div>
            <img src={checkMachinePlay()} alt="machine hands move" />
         </div>

      </div>

      </>)
         :
      (<div className="flex items-center w-full h-full justify-center">
         <h1 className="mb-48 w-[80%] font-passion text-center text-sky-700 text-[32px] lg:text-[50px]">Que pena! Você ainda não fez nenhuma jogada :(</h1>
      </div>)
   ) 
}
export default Game