import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './StepHome.css'
import { useForm } from '../../hooks/useForm';
import Button from '../Button/Button';

function StepHome() {
  const { values, handleChange, errorMessage } = useForm({ vacancyName: '' });
  const [stepIsValid, setStepIsValid] = useState(true);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/jobdescription/warning');

  return (
          <div className='home__container'>
    <div className="stephome">
      <h1 className="home__title">Название вакансии</h1>
      <input
        className="home__input"
        type="text"
        value={values.vacancyName}
        onChange={handleChange}
        name="vacancyName"
        placeholder="Введите название вакансии"
      />
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
</div>
 
        <div className='home__button'>
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

export default StepHome;
