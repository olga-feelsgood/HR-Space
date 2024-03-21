import './StepRecruitersTasks.css'
import Button from '../Button/Button.jsx'
import CheckBox from '../CheckBox/CheckBox.jsx'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function StepRecruitersTasks() {
  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [stepIsValid, setStepIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState(true);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/recruiterrequirements/recruiterspeculiarities');

  return (
    <>
      <div className='recruiters-tasks__container'>
        <div className='recruiters-tasks__checkbox'>
          <CheckBox
            checkboxLabel='selection'
            checkboxTitle='Подбор кандидатов'
            checkboxValue='selection'
            checkboxName='hr_responsibility'//от бэка
          />
          <CheckBox
            checkboxLabel='interview-organisation'
            checkboxTitle='Организация собеседований'
            checkboxValue='interview-organisation'
            checkboxName='hr_responsibility'//от бэка
          />
          <CheckBox
            checkboxLabel='interview'
            checkboxTitle='Проведение собеседований'
            checkboxValue='interview'
            checkboxName='hr_responsibility'//от бэка
          />
          <CheckBox
            checkboxLabel='recomendation'
            checkboxTitle='Запрос рекомендаций'
            checkboxValue='recomendation'
            checkboxName='hr_responsibility'//от бэка
          />
          <CheckBox
            checkboxLabel='tests'
            checkboxTitle='Отправка тестового задания'
            checkboxValue='tests'
            checkboxName='hr_responsibility'//от бэка
          />
        </div>
        {errorMessage && <p className='recruiters-tasks__error'>Ничего не выбрано</p>}
        <div className='recruiters-tasks__button'>
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

export default StepRecruitersTasks
