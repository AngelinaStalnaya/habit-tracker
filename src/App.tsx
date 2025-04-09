import './App.css';
import { useHabitStore } from '../state-managment/store';
import PortalModal from './components/Modal/Portal';
import HabitCreator from './components/Habit/HabitCreator';
import Header from './components/ui/text/Header';
import HabitList from './components/Habit/HabitList';

function App() {
  const habits = useHabitStore((state) => state.habitsList);

  return (
    <div className='flex justify-center items-left flex-col gap-2'>
      <Header header='Current habit trackers: '/>
      <HabitList habitList={habits}/>

      <PortalModal portalBtnName='Add habit'>
        <HabitCreator />
      </PortalModal>
    </div>
  )
}

export default App;