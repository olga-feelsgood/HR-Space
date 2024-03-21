import './StepJobPeculiarities.css';
import Button from '../Button/Button.jsx'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function StepJobPeculiarities() {

  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [stepIsValid, setStepIsValid] = useState(true);
  const [inputValue, setInputValue] = useState('');

  const [text, setText] = useState('');
  const maxLength = 100;

  let navigate = useNavigate();
  const onRedirect = () => navigate('/jobdescription/workinghours');


  const handleChange = (event) => {
    setText(event.target.value);
  };

  const progress = (text.length / maxLength) * 1000;

  return (
    <>
      <div className='subordinates__container'>
        <input
          className="subordinates__input"
          type="text"
          name="paragraph"
          value={inputValue}
          onChange={handleChange}
          maxLength={maxLength}
          placeholder="Например, Вы ищете сотрудника для 
          запуска нового проекта.                                                                                                                          Не дублируйте ранее описанные пункты."
        />
        <div style={{ width: `${progress}%` }}></div>
        <div className="character-count">{text.length}/{maxLength}</div>
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

export default StepJobPeculiarities
