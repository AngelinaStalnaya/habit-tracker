import './App.css';
import { useHabitStore } from '../state-managment/store';
import HabitItemInfo from './components/Habit/HabitItemInfo';
import HabitCreator from './components/Habit/HabitCreator';
import ButtonOutlined from './components/ui/buttons/ButtonOutlined';
import { useState } from 'react';
import Modal from './components/Modal/Modal';

function App() {
  const habits = useHabitStore((state) => state.habitsList);
  const deleteHabit = useHabitStore((state) => state.deleteHabitAsync);
  const editHabit = useHabitStore((state) => state.editHabitAsync);
  const [open, setOpen] = useState<boolean>(false);
  
  const itemInfo  = {
    name: 'new name'
  }

  return (
    <div className='flex justify-center items-left flex-col gap-2'>
      {habits.map(item =>
        <HabitItemInfo
          header={item.name}
          paragraph={item.startDate}
          progress={37}
          key={item.id} 
          editFnc={() => editHabit(item.id, itemInfo)}
          deleteFnc={()=> deleteHabit(item.id)}/>)}
      <div className='will-change-contents'><ButtonOutlined type='button' handleBtnClick={()=> setOpen(!open)} >Add new habit</ButtonOutlined></div>
      <Modal visibility={open} closeModal={()=> setOpen(false)}><HabitCreator/></Modal>
    </div>
  )
}

export default App;