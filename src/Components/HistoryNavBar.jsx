import Button from "./Button"

function HistoryNavBar({ games, filter, setFilter }) {
  const filters = [
    {
      filter: "all",
      text: "All Games"
    },
    {
      filter: "finished",
      text: "Completed"
    },
    {
      filter: "unfinished",
      text: "In Progress"
    }
  ]
  return (
    <nav className="font-inter text-lg text-[#17384A] shadow-sm border-b-[#E8DCC7] px-6
     h-15 w-full flex items-center justify-start mb-4 gap-15">
      {
        filters.map((button) => {
          return (
            <Button
              key={button.filter}
              text={button.text}
              variant="outline"
              textSize="large"
              fontWeight="normal"
              onClick={() => { setFilter(button.filter) }}
              className={
                filter === button.filter ?
                  "underline decoration-2 decoration-amber-600 underline-offset-4 text-amber-600"
                  : ""
              }
            />
          )
        })
      }

    </nav>
  )
}
export default HistoryNavBar;