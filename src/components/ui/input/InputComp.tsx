import { useState } from "react";
import { InputProps } from "./inputTypes";

const InputComp = ({ name }: InputProps) => {
    const [inputValue, setInputValue] = useState<string>('');

    return (
        <input className="text-purple-900 border-2 border-purple-900 bg-white rounded-lg px-3 pz-2 overflow-hidden transition-all duration-300
        hover:text-purple-500 hover:border-purple-500
        active:text-purple-700 active:border-purple-700"
            name={name}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}>
        </input>
    )
}

export default InputComp;