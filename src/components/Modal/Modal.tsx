import ButtonFilled from "../ui/buttons/ButtonFilled";
import { ModalProps } from "./modalTypes";


const Modal = ({ children, closeModal }: ModalProps) => {
    return (
        <div className="absolute flex flex-col transition-all duration-500 
         bg-purple-400 p-3 rounded-2xl" >
            <div className="flex justify-end">
                <ButtonFilled type='button' handleBtnClick={closeModal}>Close Modal</ButtonFilled>
            </div>
            {children}
        </div>
    )
}

export default Modal;