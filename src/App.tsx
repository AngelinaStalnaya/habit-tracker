import './App.css';
import ButtonFilled from './components/ui/buttons/ButtonFilled';
import ButtonOutlined from './components/ui/buttons/ButtonOutlined';
import Checkbox from './components/ui/checkbox/Checkbox';
import InputText from './components/ui/inputs/InputText';
import InputTime from './components/ui/inputs/InputTime';
import Header from './components/ui/text/Header';
import Paragraph from './components/ui/text/Paragraph';

function App() {

  return (
    <div className='flex justify-center items-center flex-col gap-2'>
      <Header text='Habit tracker' />
      <Paragraph text='Description'/>
      <ButtonOutlined type='button' handleBtnClick={() => console.log('clicked outlined')}>Outlined</ButtonOutlined>
      <ButtonFilled type='button' handleBtnClick={() => console.log('clicked filled')}>Filled</ButtonFilled>
      <Checkbox label='Выпить стакан воды натощак' id='7' name='try' value='water' />
      <InputText name='1 input' />
      <InputTime required/>

    </div>
  )
}

export default App
