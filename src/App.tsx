import { useHabitStore } from '../state-managment/store';
import PortalModal from './components/Modal/Portal';
import HabitCreator from './components/Habit/HabitCreator';
import Header from './components/ui/text/Header';
import HabitList from './components/Habit/HabitList';

function App() {
  const {habitsList} = useHabitStore();

  return (
    <div className='flex items-left flex-col gap-2'>
      <Header header='Current habit trackers: ' />
      <HabitList habitList={habitsList} />

      <PortalModal portalBtnName='Add habit'>
        <HabitCreator />5
      </PortalModal>

      <div className="notification flex justify-center gap-2 bg-fuchsia-400 rounded-2xl m-2 p-5">
        <Header header='Keep track on your habits 5+ days to get access to your personal statistics' />
      </div>
      <div className="dayly-habits flex flex-col gap-2 " >
      </div>

    </div>
  )
}

export default App;