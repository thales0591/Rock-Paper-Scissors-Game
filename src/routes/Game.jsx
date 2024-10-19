import { useLocation } from "react-router-dom";
import rock from "../assets/rock.png";
import paper from "../assets/paper.png";
import scissor from "../assets/scissor.png";
import bsrock from "../assets/bs-rock.png";
import bspaper from "../assets/bs-paper.png";
import bsscissor from "../assets/bs-scissor.png";
import { Link } from 'react-router-dom'
import BtnPlayAgain from "../components/BtnPlayAgain";

function Game({ pScore, setscore }) {

   const location = useLocation();
   const {machine, player} = location.state || {};

   function checkMachinePlay(size) {
      if (machine == "rock") {
         if (size == 1) {
            return rock
         }
         return bsrock
      }
      if (machine == "paper") {
         if (size == 1) {
            return paper
         }
         return bspaper
      }
      if (machine == "scissor") {
         if (size == 1) {
            return scissor
         }
         return bsscissor  
      }
   }
   
   function gameResult() {
      if (player == "rock") {
         if (machine == "paper") {
            return "You lost :/"
         }
         if (machine == "scissor") {
            return "You won :D"
         }
         return "It's a draw!"
      }
      else if (player == "paper") {
         if (machine == "rock") {
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
            
            return "You won :D"
         }
         return "It's a draw!"
      }
   }

   return(
      location.state ? 
      (<>
      <div className="w-full h-[60%] flex flex-col justify-center animate-slideDown lg:hidden">
         <div className="flex justify-between lg:hidden">
            <h1 className="font-passion text-2xl text-sky-700 w-20 text-wrap text-center ml-[10%]">Player 1 (you):</h1>
            <h1 className="font-passion text-2xl text-sky-700 w-20 text-wrap text-center mr-[10%]">Player 2 (machine):</h1>
         </div>
         <div className="flex items-center justify-around lg:hidden h-[170px] "> 

            {player == "rock" && (
               <img src={rock} alt="rock hand image"/>)}
            {player == "paper" && (
               <img src={paper} alt="paper hand image"/>)}
            {player == "scissor" && (
               <img src={scissor} alt="scissor hand image" />)}
         
            <div className="flex flex-col justify-center items-center gap-10 mt-28  ">
               <h1 className="font-passion text-sky-700 text-4xl ">{gameResult()}</h1>
               <BtnPlayAgain />
            </div>

         <img src={checkMachinePlay(1)} alt="machine hand move"/>
         
         </div>
      </div>

      <div className="w-full h-[60%] lg:flex flex-col justify-center animate-slideDown hidden  ">
         

         <div className="flex justify-between">
            <h1 className="font-passion text-4xl text-sky-700 w-36 text-wrap text-center ml-[10%]">Player 1 (you):</h1>
            <h1 className="font-passion text-4xl text-sky-700 w-36 text-wrap text-center mr-[10%]">Player 2 (machine):</h1>
         </div>

         <div className=" w-full h-[18rem] hidden lg:flex items-center justify-around "> 

            {player == "rock" && (
               <img src={bsrock} alt="rock hand image" />)}
            {player == "paper" && (
               <img src={bspaper} alt="paper hand image" />)}
            {player == "scissor" && (
               <img src={bsscissor} alt="scissor hand image" />)}

            <div className="flex flex-col justify-center items-center gap-10 mt-28  ">
               <h1 className="font-passion text-sky-700 text-4xl ">{gameResult()}</h1>
               <BtnPlayAgain />
            </div>

            <img src={checkMachinePlay()} alt="" />

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