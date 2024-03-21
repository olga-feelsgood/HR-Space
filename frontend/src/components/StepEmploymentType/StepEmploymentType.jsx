import './StepEmploymentType.css'
import Button from '../Button/Button.jsx'
import RadioButton from '../RadioButton/RadioButton.jsx'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function StepEmploymentType() {
  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [stepIsValid, setStepIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState(true);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/jobdescription/businesstrips');

  return (
    <>
      <div className='employment-type__container'>
        <div className='employment-type__radiobuttons'>
          <RadioButton
            radioLabel='full'
            radioTitle='Полная'
            radioValue='full'
            radioName='type_employment'//от бэка
          />
          <RadioButton
            radioLabel='partial'
            radioTitle='Частичная'
            radioValue='partial'
            radioName='type_employment'//от бэка
          />
          <RadioButton
            radioLabel='project'
            radioTitle='Проектная'
            radioValue='project'
            radioName='type_employment'//от бэка
          />
          <RadioButton
            radioLabel='internship'
            radioTitle='Стажировка'
            radioValue='internship'
            radioName='type_employment'//от бэка
          />
        </div>
        {errorMessage && <p className='employment-type__error'>Ничего не выбрано</p>}
        <div className='employment-type__button'>
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

export default StepEmploymentType