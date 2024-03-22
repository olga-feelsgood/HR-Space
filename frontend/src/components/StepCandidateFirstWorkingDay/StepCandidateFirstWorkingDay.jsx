import './StepCandidateFirstWorkingDay.css'
import Button from '../Button/Button.jsx'
import CurrentApplicationBox from '../CurrentAplicationBox/CurrentApplicationBox';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';


function StepCandidateFirstWorkingDay() {
  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [stepIsValid, setStepIsValid] = useState(true);
  const [dateValue, setDateValue] = useState('');


  let navigate = useNavigate();
  const onRedirect = () => navigate('/workingconditions/interview');

  const handleInputChange = event => {
    dateValue(event.target.value);
  };

  return (
    <>
      <div className='candidate-firstday__container'>
        <div>
          <input
            className='candidate-firstday__input'
            type='text'
            name='date'
            value={dateValue}
            onChange={handleInputChange}
            placeholder='ДД.ММ.ГГГГ'
          />
          <span>По статистике площадки средний срок закрытия вакансии — 1 месяц.</span>
        </div>
        <CurrentApplicationBox />
        <div className='candidate-firstday__button'>
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
