import ButtonFilled from "../ui/buttons/ButtonFilled";
import InputDate from "../ui/inputs/InputDate";
import InputText from "../ui/inputs/InputText";
import InputTime from "../ui/inputs/InputTime";
import Paragraph from "../ui/text/Paragraph";
import Checkbox from "../ui/checkbox/Checkbox";
import { FormEvent, useState } from "react";

const HabitCreator = () => {
    const [checked, setChecked] = useState<boolean>(false);
    const datestamp = new Date();
    const today = `${datestamp.getFullYear()}-${datestamp.getMonth() + 1}-${datestamp.getDate()}`

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const data = Object.fromEntries(new FormData(e.currentTarget))
        console.table(data)
    }

    return (
        <form className="new-habit" action='post' onSubmit={handleFormSubmit}>
            <fieldset className="bg-purple-200 rounded-2xl border-2 p-2 border-purple-900 flex flex-col gap-2">
                <legend className="text-purple-900 bg-purple-300 rounded-2xl p-1 border-2">Add new habit</legend>
                <div className="habit-name flex gap-2">
                    <Paragraph paragraph="Set habit:" />
                    <InputText name='new-habit' />
                </div>
                <div className="habit-start flex gap-2">
                    <Paragraph paragraph="Set start date:" />
                    <Checkbox name='start-day' label="today" id={'start'}
                        value={today} checked={checked} setChecked={setChecked} />
                    <Paragraph paragraph="or" />
                    <InputDate id={'start'} presetDate={checked ? '2025-04-03' : null} />
                </div>
                <div className="habit-notification flex gap-2 mb-1">
                    <Paragraph paragraph="Notify at:" />
                    <InputTime required={false} />
                </div>
                <div className="flex justify-end">
                    <ButtonFilled type='submit'>
                        Submit
                    </ButtonFilled>
                </div>
            </fieldset>
        </form>
    )
}

export default HabitCreator;