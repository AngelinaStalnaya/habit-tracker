import { useState } from "react";
import { InputNumProps } from "./inputTypes";

const InputNum = ({ name }: InputNumProps) => {
    const [inputValue, setInputValue] = useState<string>('');

    return (
        <input className="text-purple-900 border-2 border-purple-900 bg-white rounded-lg px-3 pz-2 overflow-hidden transition-all duration-300 w-[70px]
        hover:text-purple-500 hover:border-purple-500
        active:text-purple-700 active:border-purple-700"
            name={name}
            type='number'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}>
        </input>
    )
}

export default InputNum;