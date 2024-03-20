import './StepSubordinatesNumber.css';
import Button from '../Button/Button.jsx'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function StepSubordinatesNumber() {

  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [stepIsValid, setStepIsValid] = useState(true);
  const [inputValue, setInputValue] = useState('');

  let navigate = useNavigate();
  const onRedirect = () => navigate('/jobdescription/workinghours');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };


  return (
    <>
      <div className='subordinates__container'>
        <input
          className="subordinates__input"
          type="text"
          name="the begin of the workday"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Сотрудников в подчинении"
        />

        <div className='subordinates__button'>

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

export default StepSubordinatesNumber
