import { basicStyles, ButtonProps } from "./buttonTypes";

export default function ButtonFilled({ children, type, handleBtnClick, disabled }: ButtonProps) {
    return (
        <button className={`${basicStyles} button_filled w-fit
        text-white border-purple-900 bg-purple-900 
        hover:border-purple-500 hover:bg-purple-500 
        active:bg-purple-700 active:border-purple-700
        disabled:bg-gray-500 disabled:border-gray-700 disabled:text-black`}
            type={type}
            onClick={handleBtnClick}
            disabled={disabled}>
            {children}
        </button>
    )
}

