import { basicStyles, ButtonProps } from "./buttontypes";

export default function ButtonOutlined({ children, type, handleBtnClick }: ButtonProps) {
    return (
        <button className={`${basicStyles} button_outlined 
        text-purple-900 border-purple-900 bg-white 
        hover:border-purple-500 hover:text-purple-500 
        active:text-purple-700 active:border-purple-700`}
            type={type}
            onClick={handleBtnClick}>
            {children}
        </button>
    )
}

