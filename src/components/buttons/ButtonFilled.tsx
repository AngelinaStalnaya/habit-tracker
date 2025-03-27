import { ButtonProps } from "./buttontypes";

export default function ButtonFilled({ children, type, handleBtnClick }: ButtonProps) {
    return (
        <button className="button_filled flex px-3 pz-2 text-white rounded-lg border-2 border-purple-900 bg-purple-900 
        hover:border-purple-300 hover:bg-purple-300 active:bg-purple-700 active:border-purple-700"
            type={type}
            onClick={handleBtnClick}>
            {children}
        </button>
    )
}

