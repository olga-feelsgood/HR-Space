import './StepFirstInterviewDate.css'
import calendar from '../../images/calendar.svg';
import Button from '../Button/Button.jsx'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


function StepFirstInterviewDate() {
  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [stepIsValid, setStepIsValid] = useState(true);
  const [dateValue, setDateValue] = useState('');


  let navigate = useNavigate();
  const onRedirect = () => navigate('/recruiterrequirements/recruitersnumber');

  const handleDateChange = event => {
    dateValue(event.target.value);
  };

  return (
    <>
      <div className='interview-date__container'>
        <div>
          <input
            className='interview-date__input'
            type='text'
            name='date'
            value={dateValue}
            onChange={handleDateChange}
            placeholder='ДД.ММ.ГГГГ'
          />
        </div>
        <div className='interview-date__button'>
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

export default StepFirstInterviewDate
