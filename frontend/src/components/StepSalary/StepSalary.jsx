import './StepSalary.css'
import Button from '../Button/Button.jsx'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function StepSalary() {
  const [stepIsValid, setStepIsValid] = useState(true);
  const [fromValue, setFromValue] = useState('');
  const [toValue, setToValue] = useState('');

  const navigate = useNavigate();

  const onRedirect = () => navigate('/jobdescription/workinghours');

  const handleFromChange = event => {
    setFromValue(event.target.value);
  };

  const handleToChange = event => {
    setToValue(event.target.value);
  };

  return (
    <div className='salary__container'>
      <h1 className="salary__title">Заработная плата до вычета НДФЛ</h1>
      <div className="salary__inputs">
        <input
          className="salary__input"
          type="text"
          name="from"
          value={fromValue}
          onChange={handleFromChange}
          placeholder="От"
        />
        <input
          className="salary__input"
          type="text"
          name="to"
          value={toValue}
          onChange={handleToChange}
          placeholder="До"
        />
        <span className="salary__text">₽</span>
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
  );
}

export default StepSalary;
