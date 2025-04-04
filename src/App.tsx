import './App.css';
import {useHabitStore} from '../state-managment/store';
import HabitItemInfo from './components/Habit/HabitItemInfo';
import HabitCreator from './components/Habit/HabitCreator';

function App() {
  const habits = useHabitStore((state) => state.habitsList);


  return (
    <div className='flex justify-center items-left flex-col gap-2'>
    {habits.map(item => 
    <HabitItemInfo 
    header={item.name} 
    paragraph={item.startDate} 
    progress={37} 
    key={item.name}/>)}
    <HabitCreator/>
    </div>
  )
}

export default App;