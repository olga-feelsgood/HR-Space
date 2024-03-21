import './StepWorkingHours.css'
import Button from '../Button/Button.jsx'
import RadioButton from '../RadioButton/RadioButton.jsx'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function StepWorkingHours() {
  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [stepIsValid, setStepIsValid] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState(true);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/jobdescription/employmenttype');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };


  return (
    <>
      <div className='working-hours__container'>
        <div className="working-hours__inputs">
          <input
            className="working-hours__input"
            type="text"
            name="the begin of the workday"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Начало рабочего дня"
          />
          <input
            className="working-hours__input"
            type="text"
            name="the end of the worday"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Конец рабочего дня"
          />
        </div>

        <div className='working-hours__radiobuttons'>
          <RadioButton
            radioLabel='full_day'
            radioTitle='Полный день'
            radioValue='full_day'
            radioName='schedule'//от бэка
          />
          <RadioButton
            radioLabel='flexible_schedule'
            radioTitle='Гибкий график'
            radioValue='flexible_schedule'
            radioName='schedule'//от бэка
          />
          <RadioButton
            radioLabel='shift_work'
            radioTitle='Сменный график'
            radioValue='shift_work'
            radioName='schedule'//от бэка
          />
          <RadioButton
            radioLabel='watch'
            radioTitle='Вахтовый метод'
            radioValue='watch'
            radioName='schedule'//от бэка
          />
        </div>
        {errorMessage && <p className='working-hours__error'>Укажите начало и конец рабочего дня, выберете график</p>}
        <div className='working-hours__button'>
          <Button
            onClick={onRedirect}
            stepIsValid={stepIsValid}
            buttonTitle='Далее'
            buttonType='button'
          />
        </div>
      </div>
    </>
  )
}

export default StepWorkingHours
