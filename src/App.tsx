import './App.css';
import ButtonFilled from './components/buttons/ButtonFilled';
import ButtonOutlined from './components/buttons/ButtonOutlined';
import Checkbox from './components/buttons/checkbox/Checkbox';

function App() {

  return (
    <div className='flex justify-center items-center flex-col gap-2'>
      <h1 className="header text-purple-700 text-2xl ">Habit tracker</h1>
      <ButtonOutlined type='button' handleBtnClick={() => console.log('clicked outlined')}>Outlined</ButtonOutlined>
      <ButtonFilled type='button' handleBtnClick={() => console.log('clicked filled')}>Filled</ButtonFilled>
      <Checkbox label='Выпить стакан воды натощак' id='7' name='try' value='water'/>
    </div>
  )
}

export default App
