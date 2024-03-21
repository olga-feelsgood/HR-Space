import './StepFormSubmit.css'
import Button from '../Button/Button.jsx'
import { useState } from 'react';


function StepFormSubmit() {
  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [stepIsValid, setStepIsValid] = useState(true);

  return (
    <>
      <div className='form-submit__container'>
        <div> StepFormSubmit</div>
        <div className='form-submit__button'>
          <Button
            stepIsValid={stepIsValid}
            buttonTitle='Опубликовать'
            buttonType='submit'
          />
        </div>
      </div>
    </>
  )
}

export default StepFormSubmit
