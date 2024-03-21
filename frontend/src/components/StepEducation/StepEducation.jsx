import './StepEducation.css'
import Button from '../Button/Button.jsx'
import RadioButton from '../RadioButton/RadioButton.jsx'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function StepEducation() {
  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [stepIsValid, setStepIsValid] = useState(true);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/candidaterequirements/portfolio');
  const [errorMessage, setErrorMessage] = useState(true);

  return (
    <>
      <div className='education__container'>
      <div className='education__radiobuttons'>
          <RadioButton
            radioLabel='higher'
            radioTitle='Высшее'
            radioValue='higher'
            radioName='education'//от бэка
          />
          <RadioButton
            radioLabel='college'
            radioTitle='Среднее специальное'
            radioValue='college'
            radioName='education'//от бэка
          />
          <RadioButton
            radioLabel='courses'
            radioTitle='Курсы'
            radioValue='courses'
            radioName='education'//от бэка
          />
        </div>
        {errorMessage && <p className='education__error'>Ничего не выбрано</p>}
        <div className='education__button'>
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

export default StepEducation
