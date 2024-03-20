import './StepCandidateFirstWorkingDay.css'
import Button from '../Button/Button.jsx'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function StepCandidateFirstWorkingDay() {
  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [stepIsValid, setStepIsValid] = useState(true);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/workingconditions/interview');

  return (
    <>
      <div className='office-remote__container'>
        <div> StepCandidateFirstWorkingDay</div>
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

export default StepCandidateFirstWorkingDay
