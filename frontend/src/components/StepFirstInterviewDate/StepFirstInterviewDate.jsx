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
  const [selectedDate, setSelectedDate] = useState(new Date());

  let navigate = useNavigate();
  const onRedirect = () => navigate('/recruiterrequirements/recruitersnumber');

  // const handleDateChange = (date) => {
  //   setSelectedDate(date);
  // };

  return (
    <>
      <div className='interview-date__container'>
        <div>
          <DatePicker
            showIcon
            toggleCalendarOnIconClick
            selected={selectedDate}
            placeholderText="Выберите дату"
            className="interview-date__picker"
            onChange={(date) => setSelectedDate(date)}
          />
          {/* <img
            className="calendar__icon"
            src={calendar} alt="Календарь" /> */}
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
