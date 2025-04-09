import { calculateProgress } from "../../assets/calculateProgress";
import ButtonFilled from "../ui/buttons/ButtonFilled";
import { ButtonProps } from "../ui/buttons/buttonTypes";
import ProgressBar from "../ui/progressBar/ProgressBar";
import { ProgressBarProps } from "../ui/progressBar/progressBarTypes";
import Header, { HeaderProps } from "../ui/text/Header";
import Paragraph, { ParagraphProps } from "../ui/text/Paragraph";

export type HabitItemInfoProps = HeaderProps & ParagraphProps & Partial<ProgressBarProps> & Partial<ButtonProps> & {
    deleteFnc: () => void | Promise<void>,
    duration: number | 21,
    repeatedTimes: number,
}

const HabitItemInfo = ({ header, paragraph, duration, repeatedTimes, containerWidth, label, children, deleteFnc }: HabitItemInfoProps) => {
    const progress = calculateProgress(duration, repeatedTimes);

    return (
        <div className="habit-item flex gap-1.5 items-center">
            <Header header={header} />
            <Paragraph paragraph={`Start date: ${paragraph}`} />
            <ProgressBar progress={progress} containerWidth={containerWidth ? containerWidth : 200} label={label ? label : 'progress'} />
            {children}
            <ButtonFilled type='button' handleBtnClick={deleteFnc}>Delete</ButtonFilled>
        </div>
    );
}

export default HabitItemInfo;