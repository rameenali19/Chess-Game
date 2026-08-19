import Button from "./Button"

function HistoryNavbar({ status, setStatus }) {
  const filters = [
    {
      status: null,
      text: "All Games"
    },
    {
      status: "finished",
      text: "Completed"
    },
    {
      status: "unfinished",
      text: "In Progress"
    }
  ]
  return (
    <nav className="font-inter text-lg text-[#17384A] shadow-sm border-b-[#E8DCC7] px-6
     h-15 flex items-center justify-start gap-15">
      {
        filters.map((button) => {
          return (
            <Button
              key={button.status}
              text={button.text}
              variant="outline"
              textSize="large"
              fontWeight="normal"
              onClick={() => { setStatus(button.status) }}
              className={
                status === button.status ?
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
export default HistoryNavbar;