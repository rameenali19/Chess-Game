import { motion } from "framer-motion";

function Modal({ className, children }) {

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-[#3E2C20]/25 z-50">

      < motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`border border-[#E8DCC7] shadow-2xl rounded-xl
         shadow-[rgba(23,56,74,0.15)] bg-[url('/orangebg.png')]
         bg-center bg-cover ${className}`}>

        {children}

      </motion.div>
    </div>
  )
}
export default Modal;