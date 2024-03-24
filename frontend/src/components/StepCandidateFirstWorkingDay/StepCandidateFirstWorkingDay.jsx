import './StepCandidateFirstWorkingDay.css'
import Button from '../Button/Button.jsx'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CurrentApplicationBox from '../CurrentAplicationBox/CurrentApplicationBox';
import useForm from '../../hooks/useForm';


function StepCandidateFirstWorkingDay() {
  const { data, handleChange } = useForm();
  console.log(JSON.stringify(data));
  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [stepIsValid, setStepIsValid] = useState(true);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/workingconditions/interview');

  return (
    <>
      <div className='candidate-firstday__container'>
        <div>
          <input
            className='candidate-firstday__input'
            type='text'
            name='start_work'
            value={data.start_work}
            onChange={handleChange}
            placeholder='ДД.ММ.ГГГГ'
          />
          <span>По статистике площадки средний срок закрытия вакансии — 1 месяц.</span>
        </div>
        <CurrentApplicationBox />
        {/* <div className='candidate-firstday__button'>
          <Button
            onClick={onRedirect}
            stepIsValid={stepIsValid}
            buttonTitle='Далее'
            buttonType='button'
          />
        </div> */}
      </div>
      <div className='candidate-firstday__button'>
        <Button
          onClick={onRedirect}
          stepIsValid={stepIsValid}
          buttonTitle='Далее'
          buttonType='button'
        />
      </div>
    </>
  )
}

export default StepCandidateFirstWorkingDay
