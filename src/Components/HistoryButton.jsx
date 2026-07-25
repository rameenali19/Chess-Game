import { Navigate, useNavigate } from "react-router-dom";

function HistoryButton({ game }) {
  const navigate = useNavigate();
  return (
    <div className=" bg-[#FFF7EA] shadow-sm border border-[#E8DCC7]
        px-6 hover:shadow-md hover:-translate-y-0.5 transition h-20 w-full
         max-w-4xl flex items-center text-xl rounded-lg" >

      <span className="hover:cursor-pointer mx-7 font-inter text-xl
       text-[#17384A] font-semibold">Game # {game.id}</span>

    </div>
  )
}
export default HistoryButton