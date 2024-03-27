import './StepSphere.css';
import CurrentApplicationBox from '../CurrentAplicationBox/CurrentApplicationBox.jsx'
import Button from '../Button/Button.jsx';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';


function StepSphere() {
  const { data, handleChange } = useForm();
  const [errorMessage, setErrorMessage] = useState('');
  const [stepIsValid, setStepIsValid] = useState(false);
  const [selectedLine_of_business, setSelectedLine_of_business] = useState([]);
  const [lineOfBusinessError, setLineOfBusinessError] = useState(false);

  const line_of_business = ['Администратор', 'Аналитик', 'Бухгалтер', 'Водитель', 'Врач', 'Грузчик', 'Дизайнер', 'Директор', 'Инженер', 'Кладовщик'];

  const navigate = useNavigate();
  const onRedirect = () => navigate('/jobdescription/city');

  const handleChipClick = (chip) => {
    if (!selectedLine_of_business.includes(chip)) {
      setSelectedLine_of_business((prevSelectedLine_of_business) => [...prevSelectedLine_of_business, chip]);
      handleChange({ target: { name: 'line_of_business', value: [...selectedLine_of_business, chip] } });
    }
  };

  const validateStep = () => {
    const isStepValid = Object.values(data).every((value) => value !== '') && selectedLine_of_business.length === 1;
    setStepIsValid(isStepValid);
  };

  const handleNextButtonClick = () => {
    validateStep();
    if (!stepIsValid) {
      setErrorMessage('Необходимо заполнить все поля и выбрать сферу');
      setLineOfBusinessError(selectedLine_of_business.length === 0);
    } else {
      setErrorMessage('');
      setLineOfBusinessError(false);
      onRedirect();
    }
  };


  useEffect(() => {
    validateStep();
  }, [data, selectedLine_of_business]);

  return (
    <>
      <div className='sphere__container'>
        <input
          className={`sphere__input ${lineOfBusinessError && 'sphere__input_error'}`}
          type="text"
          name="line_of_business"
          value={data.line_of_business || ''}
          onChange={handleChange}
          placeholder="Введите название вакансии"
        />
        <span className='sphere__error'>{errorMessage}</span>
        {lineOfBusinessError && <span className='sphere__error'>Ничего не выбрано</span>}

        <Stack className='sphere__chips-container' direction='row' spacing={1}>
          {line_of_business.map((item) => (
            <Chip
              key={item}
              className='sphere__chip'
              label={item}
              variant='outlined'
              sx={{ border: '1px solid var(--Blue-Violet-blue-40, #CFD8FA)', textTransform: 'none', borderRadius: '4px' }}
              onClick={() => handleChipClick(item)}
            />
          ))}
        </Stack>

        <div className="sphere__current">  <CurrentApplicationBox /></div>
      </div>
      <div className='sphere__button'>
        <Button
          onClick={handleNextButtonClick}
          disabled={!stepIsValid}
          onClick={onRedirect}
          stepIsValid={stepIsValid}
          buttonTitle='Далее'
          buttonType='button'
        />
        {errorMessage && <span className='sphere__error'>{errorMessage}</span>}
      </div>
    </>
  );
}

export default StepSphere;
