function HistoryNavBar({ games, filter, setFilter }) {

  return (

    <nav className="font-inter text-lg text-[#17384A] shadow-sm  
        border-b-[#E8DCC7] px-6 h-15 w-full max-w-4xl flex 
        items-center justify-start mb-4 gap-15">

      <div className="hover:cursor-pointer "
        onClick={() => { setFilter("all") }}
      >All Games
      </div>
      <div className="hover:cursor-pointer"
        onClick={() => { setFilter("finished") }}
      >Completed
      </div>
      <div className="hover:cursor-pointer"
        onClick={() => { setFilter("unfinished") }}
      >In Progress
      </div>
    </nav>
  )
}
export default HistoryNavBar