import { ProgressBarProps } from "./progressBarTypes";

const ProgressBar = ({ progress, containerWidth, label }: ProgressBarProps) => {
  const progressWidth = Math.round(containerWidth / 100 * progress);

  return (

    <div className={`progress-bar relative bg-purple-300 border-1 rounded-2xl border-purple-900  bg-grey-200 
      flex item-center p-0.3 overflow-hidden`} 
    style={{ width: `${containerWidth}px` }}>
      <div className={`progress-status rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
        h-[20px] animate-pulse`} style={{width: `${progressWidth}px`}}></div>
      <div className="absolute left-[25%] right-[25%] text-xs">{label}</div>
    </div>

  )
}

export default ProgressBar;