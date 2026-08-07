function HistoryNavBar({ games, filter, setFilter }) {

  return (

    <nav className="font-inter text-lg text-[#17384A] shadow-sm  
        border-b-[#E8DCC7] px-6 h-15 w-full  flex 
        items-center justify-start mb-4 gap-15">

      <div onClick={() => { setFilter("all") }}
        className={`hover:cursor-pointer ${filter === "all" ?
          "underline decoration-2 decoration-amber-600 underline-offset-4 text-amber-600"
          : ""
          }`}
      >All Games
      </div>
      <div onClick={() => { setFilter("finished") }}
        className={`hover:cursor-pointer ${filter === "finished" ?
          "underline decoration-2 decoration-amber-600 underline-offset-4 text-amber-600"
          : ""
          }`}
      >Completed
      </div>
      <div onClick={() => { setFilter("unfinished") }}
        className={`hover:cursor-pointer ${filter === "unfinished" ?
          "underline decoration-2 decoration-amber-600 underline-offset-4 text-amber-600"
          : ""
          }`}
      >In Progress
      </div>
    </nav>
  )
}
export default HistoryNavBar;