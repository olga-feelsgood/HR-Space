import './StepFirstInterviewDate.css'
import calendar from '../../images/calendar.svg';
import Button from '../Button/Button.jsx'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import useForm from '../../hooks/useForm';

function StepFirstInterviewDate() {
  const { data, handleChange } = useForm();
  console.log(JSON.stringify(data));
  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [errorMessage, setErrorMessage] = useState(true);
  const [stepIsValid, setStepIsValid] = useState(true);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/recruiterrequirements/recruitersnumber');

  return (
    <>
      <div className='interview-date__container'>
        <div>
          <input
            className='interview-date__input'
            type='text'
            name='start_interview'
            value={data.start_interview}
            onChange={handleChange}
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
