import { ButtonProps } from "./buttontypes";

export default function ButtonOutlined({ children, type, handleBtnClick }: ButtonProps) {
    return (
        <button className="button_light flex px-3 pz-2 text-purple-900 rounded-lg border-2 border-purple-900 bg-white 
        hover:border-purple-300 hover:text-purple-500 active:text-purple-700 active:border-purple-700"
            type={type}
            onClick={handleBtnClick}>
            {children}
        </button>
    )
}

