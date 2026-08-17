function HistoryFooter() {

  return (
    <div className="font-inter text-lg text-[#17384A] bg-[#FFF7EA] shadow-sm border 
        border-[#E8DCC7] px-6 hover:shadow-md hover:-translate-y-0.5 transition rounded-lg
         h-15 w-full flex items-center justify-center">
      <img className="object-contain w-12 h-8"
        src="/bulb.png" alt="bulb image"
      ></img>
      <div>
        Continue unfinished games or review completed matches
      </div>
    </div>
  )
}
export default HistoryFooter;