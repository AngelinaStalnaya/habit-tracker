import { HabitProps } from "../../../state-managment/store";
import PortalModal from "../Modal/Portal";
import HabitEditor from "./HabitEditor";
import HabitItemInfo from "./HabitItemInfo";

export type HabitListProps = {
    habitList: Array<HabitProps>
}

const HabitList = ({ habitList }: HabitListProps) => {
    return (
        <>
            <ul className="flex flex-col list-disc gap-0.5 items-end">
                {habitList.map((item) =>
                    <HabitItemInfo
                        header={item.name}
                        paragraph={item.startDate}
                        duration={item.duration}
                        repeatedTimes={item.repeatedTimes}
                        key={item.id}
                        description={item.description}
                        days={item.days}
                        >
                        <PortalModal portalBtnName='Edit'>
                            <HabitEditor habit={item} />
                        </PortalModal>
                    </HabitItemInfo>)}
            </ul>
        </>
    )
}

export default HabitList;