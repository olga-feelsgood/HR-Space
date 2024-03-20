import './StepCity.css'
import Button from '../Button/Button.jsx'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function StepCity() {
  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [stepIsValid, setStepIsValid] = useState(true);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/jobdescription/officeremote');

  return (
    <>
      <div className='office-remote__container'>
        <div> StepCity</div>
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

export default StepCity