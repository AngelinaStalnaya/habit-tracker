import './App.css';
import { useHabitStore } from '../state-managment/store';
import HabitItemInfo from './components/Habit/HabitItemInfo';
import HabitEditor from './components/Habit/HabitEditor';
import PortalModal from './components/Modal/Portal';
import HabitCreator from './components/Habit/HabitCreator';
import Header from './components/ui/text/Header';

function App() {
  const habits = useHabitStore((state) => state.habitsList);

  return (
    <div className='flex justify-center items-left flex-col gap-2'>
      <Header header='Current habit trackers: '/>
      {habits.map(item =>
        <HabitItemInfo
          header={item.name}
          paragraph={item.startDate}
          duration={item.duration}
          repeatedTimes={item.repeatedTimes}
          key={item.id}
        >
          <PortalModal portalBtnName='Edit'>
            <HabitEditor habit={item} />
          </PortalModal>
        </HabitItemInfo>)}

      <PortalModal portalBtnName='Add habit'>
        <HabitCreator />
      </PortalModal>
    </div>
  )
}

export default App;