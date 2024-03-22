import './StepCandidateFirstWorkingDay.css'
import Button from '../Button/Button.jsx'
import CurrentApplicationBox from '../CurrentAplicationBox/CurrentApplicationBox';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


function StepCandidateFirstWorkingDay() {
  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [stepIsValid, setStepIsValid] = useState(true);
  const [selectedDate, setSelectedDate] = useState(new Date());


  let navigate = useNavigate();
  const onRedirect = () => navigate('/workingconditions/interview');

  return (
    <>
      <div className='candidate-firstday__container'>
        <div>
          <DatePicker
            showIcon
            toggleCalendarOnIconClick
            selected={selectedDate}
            placeholderText="Выберите дату"
            className="candidate-firstday__picker"
            onChange={(date) => setSelectedDate(date)}
          />
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
