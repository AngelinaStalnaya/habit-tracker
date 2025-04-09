import { FormEvent } from "react";
import ButtonFilled from "../ui/buttons/ButtonFilled";
import InputDate from "../ui/inputs/InputDate";
import InputText from "../ui/inputs/InputText";
import InputTime from "../ui/inputs/InputTime";
import Paragraph from "../ui/text/Paragraph";
import InputNum from "../ui/inputs/InputNum";
import { HabitProps, useHabitStore } from "../../../state-managment/store";
import PortalModal from "../Modal/Portal";
import HabitDelete from "./HabitDelete";

type HabitEditorProps = {
    habit: HabitProps,
}

const HabitEditor = ({ habit }: HabitEditorProps) => {
    const { id, name, startDate, duration, notification, repeatedTimes } = habit;
    const editHabit = useHabitStore((state) => state.editHabitAsync);

    const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget));

        const editedHabit = {
            id: id,
            name: `${data['habit-name-new']}`.trim() || name,
            startDate: `${data['new-date-start']}`.startsWith('20') && `${data['new-date-start']}` || startDate,
            duration: Number(`${data['new-duration']}`) || duration,
            notification: `${data['notification']}`.length > 1 && `${data['notification']}` || notification,
            repeatedTimes: repeatedTimes,
        };
        await editHabit(id, editedHabit);

    }

    return (
        <form className="edit-habit" action='post' onSubmit={handleFormSubmit}>
            <fieldset className="bg-purple-200 rounded-2xl border-2 p-2 border-purple-900 flex flex-col gap-2 w-[500px]">
                <legend className="text-purple-900 bg-purple-300 rounded-2xl p-1 border-2">Edit habit</legend>
                <div className="habit-name flex gap-2">
                    <Paragraph paragraph={'Habit: ' + name + ' ->'} />
                    <InputText name='habit-name-new' />
                </div>
                <div className="habit-start flex gap-2">
                    <Paragraph paragraph={"New start date: " + startDate + ' ->'} />
                    <InputDate id={'new-date-start'} />
                </div>
                <div className="habit-duration flex gap-2">
                    <Paragraph paragraph={"Min duration period: " + duration + ' days ->'} />
                    <InputNum name='new-duration' />
                </div>
                <div className="habit-notification flex gap-2 mb-1">
                    <Paragraph paragraph={"Notify at: " + `${notification || 'Without notifications '}` + '->'} />
                    <InputTime />
                </div>
                <div className="btns flex justify-between">
                    <PortalModal portalBtnName='Delete habit'>
                        <HabitDelete habitId={id} />
                    </PortalModal>
                    <ButtonFilled type='submit'>
                        Save changes
                    </ButtonFilled>
                </div>
            </fieldset>
        </form>
    )
}

export default HabitEditor;