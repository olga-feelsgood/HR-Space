import './StepBusinessTrips.css'
import Button from '../Button/Button.jsx'
import RadioButton from '../RadioButton/RadioButton.jsx'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function StepBusinessTrips() {
  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [stepIsValid, setStepIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState(true);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/jobdescription/subordinatesnumber');

  return (
    <>
      <div className='business-trips__container'>
      <div className='business-trips__radiobuttons'>
          <RadioButton
            radioLabel='yes'
            radioTitle='Да'
            radioValue='yes'
            radioName='business_trip'//от бэка
          />
          <RadioButton
            radioLabel='no'
            radioTitle='Нет'
            radioValue='no'
            radioName='business_trip'//от бэка
          />
          <RadioButton
            radioLabel='sometimes'
            radioTitle='Иногда'
            radioValue='sometimes'
            radioName='business_trip'//от бэка
          />
        </div>
        {errorMessage && <p className='business-trips__error'>Ничего не выбрано</p>}
        <div className='business-trips__button'>
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

export default StepBusinessTrips
