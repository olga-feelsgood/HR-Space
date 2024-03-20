import './StepHome.css'
import Button from '../Button/Button.jsx'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function StepHome() {
  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [stepIsValid, setStepIsValid] = useState(true);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/jobdescription/warning');

  return (
    <>
      <div className='home__container'>
        <div> StepHome</div>
        <div className='home__button'>
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

export default StepHome