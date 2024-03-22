import './StepMoneyForRecruiters.css'
import Button from '../Button/Button.jsx'
import rubl from '../../images/rubl.svg';
import CurrentApplicationBox from '../CurrentAplicationBox/CurrentApplicationBox';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function StepMoneyForRecruiters() {
  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [stepIsValid, setStepIsValid] = useState(true);
  const [inputValue, setInputValue] = useState('');


  let navigate = useNavigate();
  const onRedirect = () => navigate('/workingconditions/candidatefirstworkingday');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <div className='money-recruiters__container'>
        <div className="money-recruiters__paragraph">
          <input
            className="money-recruiters__input"
            type="text"
            name="money"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Введите размер вознаграждения"
          />
          <img className="rubl" src={rubl} alt="Rubl" />
        </div>

        <span>Рекомендуемый размер вознаграждения — 1,5-2 среднемесячные зарплаты кандидата и выше</span>
        <CurrentApplicationBox />
        <div className='money-recruiters__button'>
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

export default StepMoneyForRecruiters
