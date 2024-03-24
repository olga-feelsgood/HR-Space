import './StepJobPeculiarities.css';
import Button from '../Button/Button.jsx'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';

function StepJobPeculiarities() {

  const { data, handleChange } = useForm();
  console.log(JSON.stringify(data));
  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [errorMessage, setErrorMessage] = useState(true);
  const [stepIsValid, setStepIsValid] = useState(true);

  const [text, setText] = useState('');
  const maxLength = 100;

  let navigate = useNavigate();
  const onRedirect = () => navigate('/candidaterequirements/yearsofexperience');

  const progress = (text.length / maxLength) * 1000;

  return (
    <>
      <div className='job-peculiarities__container'>
        <div className='job-peculiarities__input-container'>
          <input
            className="job-peculiarities__input"
            type="text"
            name="features_vacancy"
            value={data.features_vacancy}
            onChange={handleChange}
            maxLength={maxLength}
            placeholder="Например, Вы ищете сотрудника для 
          запуска нового проекта.                                                                                                                          Не дублируйте ранее описанные пункты."
          />
          <div style={{ width: `${progress}%` }}></div>
          <div className="job-peculiarities__character-count">{text.length}/{maxLength}</div>
        </div>
        {/* <div className='job-peculiarities__button'>
        <Button
          onClick={onRedirect}
          stepIsValid={stepIsValid}
          buttonTitle='Далее'
          buttonType='button'
        />
      </div> */}
      </div>
      <div className='job-peculiarities__button'>
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

export default StepJobPeculiarities
