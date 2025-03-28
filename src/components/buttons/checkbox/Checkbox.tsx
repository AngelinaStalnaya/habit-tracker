import { useState } from "react"

type CheckboxProps = {
    label: string,
    id: string,
    name: string,
    value: string,
}

const Checkbox = ({ label, id, name, value }: CheckboxProps) => {
    const [checked, setChecked] = useState<boolean>(false);
 
    return (
        <span className="flex flex-row-reverse justify-center gap-2 ">
            <label htmlFor={id} className="text-purple-900 checked:text-purple-500 cursor:pointer">{label}</label>
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