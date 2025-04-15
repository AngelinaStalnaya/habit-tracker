import { calculateProgress } from "../../assets/calculateProgress";
import { ButtonProps } from "../ui/buttons/buttonTypes";
import ProgressBar from "../ui/progressBar/ProgressBar";
import { ProgressBarProps } from "../ui/progressBar/progressBarTypes";
import Header, { HeaderProps } from "../ui/text/Header";
import Paragraph, { ParagraphProps } from "../ui/text/Paragraph";

export type HabitItemInfoProps = HeaderProps & ParagraphProps & Partial<ProgressBarProps> & Partial<ButtonProps> & {
    duration: number | 21,
    repeatedTimes: number,
    description?: string,
    days?: Array<string>,
}

const HabitItemInfo = ({ header, paragraph, duration, repeatedTimes, containerWidth, label, children, description, days }: HabitItemInfoProps) => {
    const progress = calculateProgress(duration, repeatedTimes);

    return (
        <div className="habit-item flex gap-2 items-center justify-end">
            <Header header={header} />
            {<p>{description}</p>}
            <Paragraph paragraph={`On track since: ${paragraph}`} />
            <ProgressBar progress={progress} containerWidth={containerWidth ? containerWidth : 200} label={label ? label : `${progress}%`} />
            {days?.map(item => <p key={item}>{item}</p>)}
            {children}
        </div>
    );
}

export default HabitItemInfo;