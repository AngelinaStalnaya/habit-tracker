import { FormEvent, useState } from "react";
import { useHabitStore } from "../../../state-managment/store";
import { v4 as uuid } from "uuid";
import ButtonFilled from "../ui/buttons/ButtonFilled";
import InputDate from "../ui/inputs/InputDate";
import InputText from "../ui/inputs/InputText";
import InputTime from "../ui/inputs/InputTime";
import Paragraph from "../ui/text/Paragraph";
import Checkbox from "../ui/checkbox/Checkbox";
import InputNum from "../ui/inputs/InputNum";


const HabitCreator = () => {
    const [checked, setChecked] = useState<boolean>(false);
    const saveHabit = useHabitStore((state) => state.addHabitAsync)

    const datestamp = new Date();
    const month = datestamp.getMonth() + 1;
    const day = datestamp.getDate();
    const today = `${datestamp.getFullYear()}-${month > 9 ? month : `0${month}`}-${day > 9 ? day : `0${day}`}`

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const data = Object.fromEntries(new FormData(e.currentTarget));

        const habit = {
            id: uuid(),
            name: `${data['new-habit']}`.trim(),
            startDate: `${data['date-start']}`,
            duration: Number(`${data['duration'] || 21}`),
            notification: `${data['notification']}`.length > 1 && `${data['notification']}`,
            repeatedTimes: 0,
        };
        saveHabit(habit)
    }

    return (
        <form className="new-habit" action='post' onSubmit={handleFormSubmit}>
            <fieldset className="bg-purple-200 rounded-2xl border-2 p-2 border-purple-900 flex flex-col gap-2 w-[500px]">
                <legend className="text-purple-900 bg-purple-300 rounded-2xl p-1 border-2">Add new habit</legend>
                <div className="habit-name flex gap-2">
                    <Paragraph paragraph="Set habit:" />
                    <InputText name='new-habit' required />
                </div>
                <div className="habit-start flex gap-2">
                    <Paragraph paragraph="Set start date:" />
                    <Checkbox name='start-day' label="today" id={'start'}
                        value={today} checked={checked} setChecked={setChecked} />
                    <Paragraph paragraph="or" />
                    <InputDate id={'start'} presetDate={checked ? today : null} required />
                </div>
                <div className="habit-duration flex gap-2">
                    <Paragraph paragraph="Set habit min duration period:" />
                    <InputNum name='duration-min' />
                </div>
                <div className="habit-notification flex gap-2 mb-1">
                    <Paragraph paragraph="Notify at:" />
                    <InputTime />
                </div>
                <div className="flex justify-end gap-2">
                    <ButtonFilled type='submit'>
                        Submit
                    </ButtonFilled>
                </div>
            </fieldset>
        </form>
    )
}

export default HabitCreator;