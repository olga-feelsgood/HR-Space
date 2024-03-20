import './StepYearsOfExperience.css'
import Button from '../Button/Button.jsx'
import RadioButton from '../RadioButton/RadioButton.jsx'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function StepYearsOfExperience() {
  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [stepIsValid, setStepIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState(true);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/candidaterequirements/skills');

  return (
    <>
      <div className='years-experience__container'>
        <div className='years-experience__radiobuttons'>
          <RadioButton
            radioLabel='doesnot_matter'
            radioTitle='Не имеет значения'
            radioValue='doesnot_matter'
            radioName='work_experience'//от бэка
          />
          <RadioButton
            radioLabel='from_one_to_three_years'
            radioTitle='От 1 года до 3 лет'
            radioValue='from_one_to_three_years'
            radioName='work_experience'//от бэка
          />
          <RadioButton
            radioLabel='from_three_to_six_years'
            radioTitle='От 3 до 6 лет'
            radioValue='from_three_to_six_years'
            radioName='work_experience'//от бэка
          />
          <RadioButton
            radioLabel='more_six_years'
            radioTitle='Более 6 лет'
            radioValue='more_six_years'
            radioName='work_experience'//от бэка
          />
          <RadioButton
            radioLabel='without_experience'
            radioTitle='Нет опыта'
            radioValue='without_experience'
            radioName='work_experience'//от бэка
          />
        </div>
        {errorMessage && <p className='years-experience__error'>Ничего не выбрано</p>}
        <div className='years-experience__button'>
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

export default StepYearsOfExperience
