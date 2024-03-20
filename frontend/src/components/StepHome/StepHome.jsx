import React from 'react';
import './StepHome.css'
import { useForm } from '../../hooks/useForm';
import Button from '../Button/Button';

function StepHome() {
  const { values, handleChange, errorMessage } = useForm({ vacancyName: '' });

  return (
    <form className="stephome">
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
      <Button />
    </form>
  );
}

export default StepHome;
