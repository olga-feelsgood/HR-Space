import './StepRecruitersNumber.css'
import Button from '../Button/Button.jsx'
import RadioButton from '../RadioButton/RadioButton.jsx'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function StepRecruitersNumber() {
  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [stepIsValid, setStepIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState(true);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/recruiterrequirements/recruiterstasks');

  return (
    <>
      <div className='recruiters-number__container'>
        <p className='recruiters-number__text'>Укажите количество рекрутеров, которые будут работать над заявкой:</p>
        <div className='recruiters-number__radiobuttons'>
          <RadioButton
            radioLabel='one'
            radioTitle='1'
            radioValue='one'
            radioName='hr_requirements'//от бэка
          />
          <RadioButton
            radioLabel='two'
            radioTitle='2'
            radioValue='two'
            radioName='hr_requirements'//от бэка
          />
          <RadioButton
            radioLabel='three'
            radioTitle='3'
            radioValue='three'
            radioName='hr_requirements'//от бэка
          />
        </div>
        {errorMessage && <p className='recruiters-number__error'>Ничего не выбрано</p>}
        <div className='recruiters-number__button'>
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

export default StepRecruitersNumber
