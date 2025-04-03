import { useState } from "react";

type InputDateProps = {
    id: string,
    presetDate?: string | null,
}


const InputDate = ({ id, presetDate }: InputDateProps) => {
    const [userDate, setUserDate] = useState<string>('');
    return (
        <input
            className="text-purple-900 border-2 rounded-xl px-3 pz-2 cursor-pointer border-purple-900 transition-all duration-300
            hover:text-purple-500 hover:border-purple-500
            active:text-purple-700 active:border-purple-700"
            type="date"
            required
            id={id}
            name='date-start'
            value={presetDate ? presetDate : userDate}
            onChange={(e) => setUserDate(e.target.value)}
        />
    )
}

export default InputDate;



