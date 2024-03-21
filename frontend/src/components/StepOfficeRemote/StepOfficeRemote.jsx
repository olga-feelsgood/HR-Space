import './StepOfficeRemote.css'
import Button from '../Button/Button.jsx'
import RadioButton from '../RadioButton/RadioButton.jsx'
import CurrentApplicationBox from '../CurrentAplicationBox/CurrentApplicationBox'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Field } from "formik";


function StepOfficeRemote() {
  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [stepIsValid, setStepIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState(true);


  const handleSubmit = (values) => {
    console.log(values);
    navigate('/jobdescription/salary');
  };

  return (
    <>
      <div className='office-remote__container'>
        <div className='office-remote__radiobuttons'>
          <RadioButton
            radioLabel='remote'
            radioTitle='Удалённая'
            radioValue='remote'
            radioName='work_format'//от бэка
          />
          <RadioButton
            radioLabel='mixed'
            radioTitle='Гибрид'
            radioValue='mixed'
            radioName='work_format'//от бэка
          />
          <RadioButton
            radioLabel='office'
            radioTitle='Офис'
            radioValue='office'
            radioName='work_format'//от бэка
          />
        </div>
        {errorMessage && <p className='office-remote__error'>Ничего не выбрано</p>}
                   <div className="form__current">
            <CurrentApplicationBox /></div>
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

export default StepOfficeRemote;
