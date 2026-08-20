import orangeBg from "../assets/Background/orangebg.png";
function Modal({ open, className, children }) {
  if (open) {

    return (
      <div className="fixed inset-0 flex justify-center items-center bg-[#3E2C20]/25 z-50">

        <div className={`page border border-[#E8DCC7] shadow-2xl rounded-xl
         shadow-[rgba(23,56,74,0.15)] bg-center bg-cover ${className}`}
          style={{ backgroundImage: `url(${orangeBg})` }}
        >
          {children}
        </div>
      </div>
    )
  }
  else return null
}
export default Modal;