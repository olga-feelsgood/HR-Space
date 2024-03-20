import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './StepHome.css'
import { useForm } from '../../hooks/useForm';
import Button from '../Button/Button';

function StepHome() {
  const { values, handleChange, errorMessage } = useForm({ vacancyName: '' });
  const [stepIsValid, setStepIsValid] = useState(true);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/jobdescription/application');

  return (
    <section className="stephome">
      <h1 className="stephome__title">Название вакансии</h1>
      <input
        className="stephome__input"
        type="text"
        value={values.vacancyName}
        onChange={handleChange}
        name="vacancyName"
        placeholder="Введите название вакансии"
      />
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <Button
        onClick={onRedirect}
        stepIsValid={stepIsValid}
        buttonTitle='Далее'
        buttonType='button' />
    </section>
  );
}

export default StepHome;
