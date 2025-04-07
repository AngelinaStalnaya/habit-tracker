import ButtonFilled from "../ui/buttons/ButtonFilled";

type ModalProps = {
    children: React.ReactNode,
    visibility: boolean,
    closeModal: () => void,

};


const Modal = ({ children, visibility, closeModal }: ModalProps) => {
    return (
        <div className="absolute flex flex-col transition-all duration-500 bg-purple-400 p-3 rounded-2xl" style={{ visibility: `${visibility ? 'visible' : 'hidden'}` }}>
            <div className="flex justify-end">
                <ButtonFilled type='button' handleBtnClick={closeModal}> Close Modal</ButtonFilled>
            </div>
            {children}
        </div>
    )
}

export default Modal;