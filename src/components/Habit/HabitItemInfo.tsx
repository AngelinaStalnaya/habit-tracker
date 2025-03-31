import ButtonFilled from "../ui/buttons/ButtonFilled";
import ButtonOutlined from "../ui/buttons/ButtonOutlined";
import { ButtonProps } from "../ui/buttons/buttonTypes";
import ProgressBar from "../ui/progressBar/ProgressBar";
import { ProgressBarProps } from "../ui/progressBar/progressBarTypes";
import Header, { HeaderProps } from "../ui/text/Header";
import Paragraph, { ParagraphProps } from "../ui/text/Paragraph";

export type HabitItemInfoProps = HeaderProps & ParagraphProps & Partial<ProgressBarProps> & Partial<ButtonProps>

const HabitItemInfo = ({ header, paragraph, progress, containerWidth, label }: HabitItemInfoProps) => {
    
    return (
        <div className="habit-item flex gap-1.5 items-center">
            <Header header={header} />
            <Paragraph paragraph={`Start date: ${paragraph}`} />
            <ProgressBar progress={progress} containerWidth={containerWidth ? containerWidth : 200} label={label ? label : 'progress'} />
            <ButtonOutlined type='button' handleBtnClick={() => console.log('edit habit clicked')}>Edit</ButtonOutlined>
            <ButtonFilled type='button' handleBtnClick={() => console.log('delete habit clicked')}>Delete</ButtonFilled>
        </div>
    );
}

export default HabitItemInfo;