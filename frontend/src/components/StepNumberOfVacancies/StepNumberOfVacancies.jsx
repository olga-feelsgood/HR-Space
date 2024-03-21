import './StepNumberOfVacancies.css'
import Button from '../Button/Button.jsx'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function StepNumberOfVacancies() {
  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [stepIsValid, setStepIsValid] = useState(true);
  const [inputValue, setInputValue] = useState('');

  let navigate = useNavigate();
  const onRedirect = () => navigate('/workingconditions/typesofreward');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <div className='number-vacancies__container'>
        <div>

          <input
            className="number-vacancies__input"
            type="text"
            name="cityName"
            list="cities"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Введите число сотрудников для поиска"
          />

        </div>
        <div className='number-vacancies__button'>
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

export default StepNumberOfVacancies
