import { useState } from "react";
import { InputTimeProps } from "./inputTypes";


const InputTime = ({ required, startValue}: InputTimeProps) => {
    const [notifyTime, setNotifyTime] = useState<string | undefined>(undefined)
    return (
        <input
            className="text-purple-900 border-2 rounded-xl px-3 pz-2 cursor-pointer border-purple-900"
            type='time'
            name='notification'
            required={required}
            value={startValue? startValue :notifyTime}
            onChange={(e)=> setNotifyTime(e.target.value)}
        >
        </input>
    )
}

export default InputTime;
