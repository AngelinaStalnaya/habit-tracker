import './App.css';
import HabitCreator from './components/Habit/HabitCreator';
// import HabitList from './components/Habit/HabitList';

// const habitList = [
//   {
//       name: 'First habit',
//       progressNum: 17,
//       startDate: '12.03.2025'
//   },
//   {
//       name: 'Second habit',
//       progressNum: 85,
//       startDate: '12.02.2025'
//   },
//   {
//       name: 'Third habit',
//       progressNum: 36,
//       startDate: '20.03.2025'
//   }]


function App() {

  return (
    <div className='flex justify-center items-left flex-col gap-2'>
    
    {/* <HabitList list={habitList}/> */}
    <HabitCreator />
    </div>
  )
}

export default App
