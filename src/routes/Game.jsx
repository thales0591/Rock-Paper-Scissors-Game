import { useLocation } from "react-router-dom";
import bsrock from "../assets/bs-rock.png";
import bspaper from "../assets/bs-paper.png";
import bsscissor from "../assets/bs-scissor.png";

function Game() {

   const location = useLocation();
   const {machine, player} = location.state || {};

   function checkMachinePlay() {
      if (machine == "rock") {
         return bsrock
      }
      if (machine == "paper") {
         return bspaper
      }
      if (machine == "scissor") {
         return bsscissor  
      }
   }
   
   function gameResult() {
      if (player == "rock") {
         if (machine == "paper") {
            return "perdeu"
         }
         if (machine == "scissor") {
            return "ganhou"
         }
         return "empatou"
      }
      else if (player == "paper") {
         if (machine == "rock") {
            return "ganhou"
         }
         if (machine == "scissor") {
            return "perdeu"
         }
         return "empatou"
      }
      else {
         if (machine == "rock") {
            return "perdeu"
         }
         if (machine == "paper") {
            return "ganhou"
         }
         return "empatou"
      }
   }


   return(
      location.state ? 
      (<div> 
         {player == "rock" && (
            <img src={bsrock} alt="rock hand image" />)}
         {player == "paper" && (
            <img src={bspaper} alt="paper hand image" />)}
         {player == "scissor" && (
            <img src={bsscissor} alt="scissor hand image" />)}
         <h1>{gameResult()}</h1>
         <img src={checkMachinePlay()} alt="" />
      </div>)
         :
      (<div className="flex items-center w-full h-full justify-center">
         <h1 className="mb-48 w-[80%] font-passion text-center text-sky-700 text-[32px] lg:text-[50px]">Que pena! Você ainda não fez nenhuma jogada :(</h1>
      </div>)
   ) 
}
export default Game