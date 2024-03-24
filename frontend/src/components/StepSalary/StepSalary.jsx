import './StepSalary.css'
import Button from '../Button/Button.jsx'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';

function StepSalary() {
  const { data, handleChange } = useForm();
  console.log(JSON.stringify(data));
  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [errorMessage, setErrorMessage] = useState(true);
  const [stepIsValid, setStepIsValid] = useState(true);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/jobdescription/workinghours');

  return (
    <>
      <div className='salary__container'>
        <h1 className="salary__title">Заработная плата до вычета НДФЛ</h1>
        <div className="salary__inputs">
          <input
            className="salary__input"
            type="text"
            name="salary_from"
            value={data.salary_from}
            onChange={handleChange}
            placeholder="От"
          />
          <input
            className="salary__input"
            type="text"
            name="salary_to"
            value={data.salary_to}
            onChange={handleChange}
            placeholder="До"
          />
          <p className="salary__text">₽</p>
        </div>
        {/* <div className='salary__button'>
          <Button
            onClick={onRedirect}
            stepIsValid={stepIsValid}
            buttonTitle='Далее'
            buttonType='button'
          />
        </div> */}
      </div>
      <div className='salary__button'>
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

export default StepSalary
