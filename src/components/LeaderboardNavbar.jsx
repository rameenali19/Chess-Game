import { useState } from "react";
import Button from "./Button";

function LeaderboardNavbar({ setStatus }) {
  const [selected, setSelected] = useState(null)
  const filter = [
    {
      text: "My Stats",
      status: "myStats"
    },
    {
      text: "Global Stats",
      status: "globalStats"
    }
  ]
  return (
    <nav className="shadow-sm border-b-[#E8DCC7] px-6 h-15 flex items-center justify-start gap-15">
      {
        filter.map((button) => {
          return (
            <Button
              key={button.status}
              text={button.text}
              variant="outline"
              textSize="normal"
              fontWeight="normal"
              onClick={() => {
                setStatus(button.status)
                setSelected(button.status)
              }}
              className={
                selected === button.status ?
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
export default LeaderboardNavbar;