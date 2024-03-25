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

  const line_of_business = ['Автомобильный бизнес', 'Добывающая отрасль', 'Лесная промышленность', 'Металлургия', 'Продукты питания', 'Сельское хозяйство', 'Строительство', 'Тяжелое машиностроение', 'Химическое производство', 'Энергетика'];

  const navigate = useNavigate();
  const onRedirect = () => navigate('/jobdescription/city');

  const handleChipClick = (chip) => {
    if (!selectedLine_of_business.includes(chip)) {
      setSelectedLine_of_business((prevSelectedLine_of_business) => [...prevSelectedLine_of_business, chip]);
      handleChange({ target: { name: 'line_of_business', value: [...selectedLine_of_business, chip] } });
    }
  };

  const validateStep = () => {
    const isStepValid = Object.values(data).every((value) => value !== '') && selectedLine_of_business.length > 0;
    setStepIsValid(isStepValid);
  };

  useEffect(() => {
    validateStep();
  }, [data, selectedLine_of_business]);

  return (
    <>
      <div className='sphere__container'>
        <input
          className={`sphere__input ${errorMessage && 'sphere__input_error'}`}
          type="text"
          name="line_of_business"
          value={data.line_of_business || ''}
          onChange={handleChange}
          placeholder="Введите название сферы"
        />
        <span className='sphere__error'>{errorMessage}</span>
        {errorMessage && <span className='sphere__error'>Ничего не выбрано</span>}

        <Stack className='sphere__chips-container' direction='row' spacing={1}>
          {line_of_business.map((item) => (
            <Chip
              key={item}
              className='sphere__chip'
              label={item}
              variant='outlined'
              sx={{ textTransform: 'none', borderRadius: '4px' }}
              onClick={() => handleChipClick(item)}
            />
          ))}
        </Stack>

        <div className="sphere__current">  <CurrentApplicationBox /></div>
      </div>
      <div className='sphere__button'>
        <Button
          onClick={onRedirect}
          stepIsValid={stepIsValid}
          buttonTitle='Далее'
          buttonType='button'
        />
      </div>
    </>
  );
}

export default StepSphere;

