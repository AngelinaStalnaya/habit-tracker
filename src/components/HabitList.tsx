import HabitItemInfo from "./Habit/HabitItemInfo";

export type HabitListProps = {
    name: string ,
    progressNum: number ,
    startDate: string
}

const HabitList = ({ list }: {list: Array<HabitListProps>}) => {
    return (
        <ul className="flex flex-col list-disc gap-0.5 items-end">
            {list.map((item => <HabitItemInfo header={item.name} progress={item.progressNum} paragraph={item.startDate} />))}
        </ul>
    )
}

export default HabitList;