import './StepSkills.css'
import Button from '../Button/Button.jsx'
import CurrentApplicationBox from '../CurrentAplicationBox/CurrentApplicationBox';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function StepSkills() {
  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [stepIsValid, setStepIsValid] = useState(true);
  const [inputValue, setInputValue] = useState('');

  let navigate = useNavigate();
  const onRedirect = () => navigate('/candidaterequirements/education');

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
    <div className='skills__container'>

      <input
        className="skills__input"
        type="text"
        name="skillsName"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Введите навык"
      />

      <Stack
        className="skills__chips-container"
        direction="row" spacing={1}>

        <Chip
          className="skills__chip"
          label="Авансовый отчёт"
          variant="outlined"
          onDelete={handleDelete}
          onClick={() => handleChipClick("Авансовый отчёт")}
        />

        <Chip
          className="skills__chip"
          label="Акты сверок"
          variant="outlined"
          onDelete={handleDelete}
          onClick={() => handleChipClick("Акты сверок")}
        />

        <Chip
          className="skills__chip"
          label="Архивация"
          variant="outlined"
          onDelete={handleDelete}
          onClick={() => handleChipClick("Архивация")}
        />

        <Chip
          className="skills__chip"
          label="Бухгалтерская отчетность"
          variant="outlined"
          onDelete={handleDelete}
          onClick={() => handleChipClick("Бухгалтерская отчетность")}
        />

        <Chip
          className="skills__chip"
          label="Бухгалтерский учет"
          variant="outlined"
          onDelete={handleDelete}
          onClick={() => handleChipClick("Бухгалтерский учет")}
        />

        <Chip
          className="skills__chip"
          label="Дебиторская должность"
          variant="outlined"
          onDelete={handleDelete}
          onClick={() => handleChipClick("Дебиторская должность")}
        />

        <Chip
          className="skills__chip"
          label="Налоговая отчетность"
          variant="outlined"
          onDelete={handleDelete}
          onClick={() => handleChipClick("Налоговая отчетность")}
        />

        <Chip
          className="skills__chip"
          label="Тяжелое машиностроение"
          variant="outlined"
          onDelete={handleDelete}
          onClick={() => handleChipClick("Тяжелое машиностроение")} />

        <Chip
          className="skills__chip"
          label="1С: Бухгалтерия"
          variant="outlined"
          onDelete={handleDelete}
          onClick={() => handleChipClick("1С: Бухгалтерия")}
        />

        <Chip
          className="skills__chip"
          label="Отчётность в ФСС"
          variant="outlined"
          onDelete={handleDelete}
          onClick={() => handleChipClick("Отчётность в ФСС")}
        />


        <Chip
          className="skills__chip"
          label="Первичная документация"
          variant="outlined"
          onDelete={handleDelete}
          onClick={() => handleChipClick("Первичная документация")}
        />

      </Stack>
      <div className="skills__current">  <CurrentApplicationBox /></div>
      <div className='skills__button'>
        <Button
          onClick={onRedirect}
          stepIsValid={stepIsValid}
          buttonTitle='Далее'
          buttonType='button'
        />
      </div>
    </div>
  )
}

export default StepSkills
