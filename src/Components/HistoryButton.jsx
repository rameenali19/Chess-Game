import { Navigate, useNavigate } from "react-router-dom";

function HistoryButton({ id }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/game/${id}`)
      }}
      className=" bg-amber-200 h-20 w-3xl flex items-center text-2xl"
    >
      <span className="hover:cursor-pointer mx-7">Game # {id}</span>
    </div>
  )
}
export default HistoryButton