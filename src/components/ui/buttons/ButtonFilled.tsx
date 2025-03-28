import { basicStyles, ButtonProps } from "./buttonTypes";

export default function ButtonFilled({ children, type, handleBtnClick }: ButtonProps) {
    return (
        <button className={`${basicStyles} button_filled 
        text-white border-purple-900 bg-purple-900 
        hover:border-purple-500 hover:bg-purple-500 
        active:bg-purple-700 active:border-purple-700`}
            type={type}
            onClick={handleBtnClick}>
            {children}
        </button>
    )
}

