import './StepSalary.css'
import Button from '../Button/Button.jsx'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function StepSalary() {
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
      <div className='salary__container'>
        <h1 className="salary__title">Заработная плата до вычета НДФЛ</h1>
        <div className="salary__inputs">
          <input
            className="salary__input"
            type="text"
            name="from"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="От"
          />
          <input
            className="salary__input"
            type="text"
            name="to"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="До"
          />
          <p className="salary__text">₽</p>
        </div>
        <div className='salary__button'>
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

export default StepSalary
