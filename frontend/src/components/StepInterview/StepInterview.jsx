import './StepInterview.css'
import Button from '../Button/Button.jsx'
import RadioButton from '../RadioButton/RadioButton.jsx'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';

function StepInterview() {
  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [stepIsValid, setStepIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState(true);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/workingconditions/firstinterviewdate');

  return (
    <>
      <div className='interview__container'>
        <p className='interview__text'>Укажите, с какими кандидатами Вы бы хотели проводить собеседования самостоятельно:</p>
      <div className='interview__radiobuttons'>
          <RadioButton
            radioLabel='all_relevant'
            radioTitle='Со всеми кандидатами, чьё резюме будет релевантным'
            radioValue='all_relevant'
            radioName='format_interview'//от бэка
          />
          <RadioButton
            radioLabel='pre_interview'
            radioTitle='С кандидатами, прошедшими предварительный отбор'
            radioValue='pre_intervie'
            radioName='format_interview'//от бэка
          />
        </div>
        {errorMessage && <p className='interview__error'>Ничего не выбрано</p>}
        <div className='interview__button'>
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

export default StepInterview
