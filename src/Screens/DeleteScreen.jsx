import { motion } from "framer-motion";
import Button from "../Components/Button";
import Modal from "../Components/Modal";
function DeleteScreen({ open, id, deleteFunction, setDeleteModal }) {

  if (open) {
    return (

      <Modal className="h-65 w-120">

        <div className="flex flex-col h-full justify-center gap-6">

          <div className="flex flex-col items-center gap-4">
            <h1 className="text-4xl font-bold font-cormorant text-[#17384A]">
              Delete Game
            </h1>
            <h1 className="text-xs font-inter text-[#17384A]">
              Do you want to Delete Game {id}
            </h1>
          </div>

          <div className="flex justify-center gap-10 w-full text-white font-inter font-medium">

            <Button
              text="Yes"
              variant="primary"
              fontWeight="medium"
              className="w-30 py-2"
              onClick={() => {
                deleteFunction(id)
                setDeleteModal(false)
              }}
            />

            <Button
              text="No"
              variant="primary"
              fontWeight="medium"
              className="w-30 py-2"
              onClick={() => {
                setDeleteModal(false)
              }}
            />
          </div>

        </div>


      </Modal>

    )
  }
}
export default DeleteScreen;