import './StepWorkingHours.css'
import Button from '../Button/Button.jsx'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function StepWorkingHours() {
  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [stepIsValid, setStepIsValid] = useState(true);
  const [inputValue, setInputValue] = useState('');

  let navigate = useNavigate();
  const onRedirect = () => navigate('/jobdescription/employmenttype');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };


  return (
    <>
      <div className='office-remote__container'>
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
        <div className='office-remote__button'>

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
