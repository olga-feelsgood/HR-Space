import './StepFormSubmit.css'
import Button from '../Button/Button.jsx'
import { useState } from 'react';


function StepFormSubmit() {
  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [stepIsValid, setStepIsValid] = useState(true);

  return (
    <>
      <div className='office-remote__container'>
        <div> StepFormSubmit</div>
        <div className='office-remote__button'>
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
