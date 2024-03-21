import './StepSphere.css';
import CurrentApplicationBox from '../CurrentAplicationBox/CurrentApplicationBox.jsx'
import check from '../../images/check.svg';
import Button from '../Button/Button.jsx';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function StepSphere() {
  const [stepIsValid, setStepIsValid] = useState(true);
  const [inputValue, setInputValue] = useState('');

  const navigate = useNavigate();
  const onRedirect = () => navigate('/jobdescription/city');

  //пропишу логику позже
  const handleChipClick = (chip) => {
    console.log('Вы добавили чипс');
  }
  //оставлю пока эту функцию на будущее
  const handleDelete = () => {
    console.log('Вы удалили чипс');
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (

    <div className='sphere__container'>

      <input
        className="sphere__input"
        type="text"
        name="sphereName"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Введите название сферы"
      />

      <Stack
        className="sphere__chips-container"
        direction="row" spacing={1}>

        <Chip
          className="sphere__chip"
          label="Автомобильный бизнес"
          variant="outlined"
          onDelete={handleDelete}
          onClick={() => handleChipClick("Автомобильный бизнес")}
        />

        <Chip
          className="sphere__chip"
          label="Добывающая отрасль"
          variant="outlined"
          onDelete={handleDelete}
          onClick={() => handleChipClick("Добывающая отрасль")}
        />

        <Chip
          className="sphere__chip"
          label="Лесная промышленность"
          variant="outlined"
          onDelete={handleDelete}
          onClick={() => handleChipClick("Лесная промышленность")}
        />

        <Chip
          className="sphere__chip"
          label="Металлургия"
          variant="outlined"
          onDelete={handleDelete}
          onClick={() => handleChipClick("Металлургия")}
        />

        <Chip
          className="sphere__chip"
          label="Продукты питания"
          variant="outlined"
          onDelete={handleDelete}
          onClick={() => handleChipClick("Продукты питания")}
        />

        <Chip
          className="sphere__chip"
          label="Сельское хозяйство"
          variant="outlined"
          onDelete={handleDelete}
          onClick={() => handleChipClick("Сельское хозяйство")}
        />

        <Chip
          className="sphere__chip"
          label="Строительство"
          variant="outlined"
          onDelete={handleDelete}
          onClick={() => handleChipClick("Строительство")}
        />

        <Chip
          className="sphere__chip"
          label="Тяжелое машиностроение"
          variant="outlined"
          onDelete={handleDelete}
          onClick={() => handleChipClick("Тяжелое машиностроение")} />

        <Chip
          className="sphere__chip"
          label="Химическое производство"
          variant="outlined"
          onDelete={handleDelete}
          onClick={() => handleChipClick("Химическое производство")}
        />

        <Chip
          className="sphere__chip"
          label="Энергетика"
          variant="outlined"
          onDelete={handleDelete}
          onClick={() => handleChipClick("Энергетика")}
        />

      </Stack>
      <div className="sphere__current">  <CurrentApplicationBox /></div>
      <div className='sphere__button'>
        <Button
          onClick={onRedirect}
          stepIsValid={stepIsValid}
          buttonTitle='Далее'
          buttonType='button'
        />
      </div>
    </div>
  );
}

export default StepSphere

