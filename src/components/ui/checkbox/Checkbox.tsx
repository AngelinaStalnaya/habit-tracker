import { useState } from "react";
import { CheckboxProps } from "./checkboxTypes";


const Checkbox = ({ label, id, name, value }: CheckboxProps) => {
    const [checked, setChecked] = useState<boolean>(false);

    return (
        <span className="flex flex-row-reverse justify-center gap-2 ">
            <label htmlFor={id} className="text-purple-900 cursor-pointer transition-all duration-300
            hover:text-purple-500 
            active:text-purple-700 ">{label}</label>
            <input
                type='checkbox'
                name={name}
                id={id}
                value={value}
                checked={checked}
                onChange={() => setChecked(!checked)} />
        </span>
    )
}

export default Checkbox