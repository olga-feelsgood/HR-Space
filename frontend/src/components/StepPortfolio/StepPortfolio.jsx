import './StepPortfolio.css'
import Button from '../Button/Button.jsx'
import RadioButton from '../RadioButton/RadioButton.jsx'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function StepPortfolio() {
  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [stepIsValid, setStepIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState(true);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/workingconditions/numberofvacancies');

  return (
    <>
      <div className='portfolio__container'>
      <div className='portfolio__radiobuttons'>
          <RadioButton
            radioLabel='required'
            radioTitle='Необходимо предоставить'
            radioValue='required'
            radioName='portfolio'//от бэка
          />
          <RadioButton
            radioLabel='not_applicable'
            radioTitle='Не требуется'
            radioValue='not_applicable'
            radioName='portfolio'//от бэка
          />
        </div>
        {errorMessage && <p className='portfolio__error'>Ничего не выбрано</p>}
        <div className='portfolio__button'>
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

export default StepPortfolio
