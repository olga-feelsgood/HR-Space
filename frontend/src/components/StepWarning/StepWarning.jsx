import './StepWarning.css'
import Button from '../Button/Button.jsx'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function StepWarning() {
  const [stepIsValid, setStepIsValid] = useState(true);
  let navigate = useNavigate();
  const onRedirect = () => navigate('/jobdescription/sphere');

  return (

    <div className='warning__container'>
      <h1 className="warning__title">Заполните все поля заявки максимально подробно.</h1>
      <p className="warning__text">Это поможет ускорить процесс поиска кандидата
        и сделает его максимально релевантным вашему запросу.</p>
      <div className='warning__button'>
        <Button
          onClick={onRedirect}
          stepIsValid={stepIsValid}
          buttonTitle='Далее'
          buttonType='button'
        />
      </div>
    </div>
  )
}

export default StepWarning
