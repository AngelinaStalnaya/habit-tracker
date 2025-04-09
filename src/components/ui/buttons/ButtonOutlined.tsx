import { basicStyles, ButtonProps } from "./buttonTypes";

export default function ButtonOutlined({ children, type, handleBtnClick, disabled }: ButtonProps) {
    return (
        <button className={`${basicStyles} button_outlined  w-fit
        text-purple-900 border-purple-900 bg-white 
        hover:border-purple-500 hover:text-purple-500 
        active:text-purple-700 active:border-purple-700
        disabled:border-gray-700 disabled:text-black`}
            type={type}
            onClick={handleBtnClick}
            disabled={disabled}>
            {children}
        </button>
    )
}

