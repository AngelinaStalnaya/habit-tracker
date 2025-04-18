import { useHabitStore } from "../../../state-managment/store";
import ButtonFilled from "../ui/buttons/ButtonFilled";
import Paragraph from "../ui/text/Paragraph";


const HabitDelete = ({ habitId }: { habitId: string }) => {
    const deleteHabit = useHabitStore((state) => state.deleteHabitAsync);

    return (
        <div className="flex flex-col gap-2 p-4 items-center">
            <Paragraph paragraph="Are you OK with delete of this habit?" />
            <ButtonFilled type='button' handleBtnClick={() => deleteHabit(habitId)}>
                Yup, Delete anyway
            </ButtonFilled>
        </div>

    )
}

export default HabitDelete;