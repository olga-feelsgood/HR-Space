import './StepSkills.css'
import Button from '../Button/Button.jsx'
import vector from '../../images/vector.svg'
import CurrentApplicationBox from '../CurrentAplicationBox/CurrentApplicationBox';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';

function StepSkills() {
  const { data, handleChange } = useForm();
  const skills = ['Авансовый отчёт', 'Акты сверок', 'Архивация', 'Бухгалтерская отчетность', 'Бухгалтерский учет', 'Дебиторская должность', 'Налоговая отчетность', 'Тяжелое машиностроение', '1С: Бухгалтерия', 'Отчётность в ФСС', 'Первичная документация'];
  const [selectedSkills, setSelectedSkills] = useState([]);

  const handleChipClick = (skill) => {
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills(prevSelectedSkills => [...prevSelectedSkills, skill]);
    }
    handleChange({ target: { name: "skill", value: [...selectedSkills, skill] } });
  }

  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [errorMessage, setErrorMessage] = useState(true);
  const [stepIsValid, setStepIsValid] = useState(true);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/candidaterequirements/education');


  return (
    <div className='skills__container'>

      <input
        className="skills__input"
        type="text"
        name="skill"
        value={data.skill}
        onChange={() => { }}
        placeholder="Введите навык"
      />

      {/* <Stack
        className="skills__chips-container"
        direction="row" spacing={1}>

        <Chip
          className="skills__chip"
          label="Авансовый отчёт"
          variant="outlined"

          onClick={() => handleChipClick("Авансовый отчёт")}
        />

        <Chip
          className="skills__chip"
          label="Акты сверок"
          variant="outlined"

          onClick={() => handleChipClick("Акты сверок")}
        />

        <Chip
          className="skills__chip"
          label="Архивация"
          variant="outlined"

          onClick={() => handleChipClick("Архивация")}
        />

        <Chip
          className="skills__chip"
          label="Бухгалтерская отчетность"
          variant="outlined"

          onClick={() => handleChipClick("Бухгалтерская отчетность")}
        />

        <Chip
          className="skills__chip"
          label="Бухгалтерский учет"
          variant="outlined"

          onClick={() => handleChipClick("Бухгалтерский учет")}
        />

        <Chip
          className="skills__chip"
          label="Дебиторская должность"
          variant="outlined"

          onClick={() => handleChipClick("Дебиторская должность")}
        />

        <Chip
          className="skills__chip"
          label="Налоговая отчетность"
          variant="outlined"

          onClick={() => handleChipClick("Налоговая отчетность")}
        />

        <Chip
          className="skills__chip"
          label="Тяжелое машиностроение"
          variant="outlined"

          onClick={() => handleChipClick("Тяжелое машиностроение")} />

        <Chip
          className="skills__chip"
          label="1С: Бухгалтерия"
          variant="outlined"

          onClick={() => handleChipClick("1С: Бухгалтерия")}
        />

        <Chip
          className="skills__chip"
          label="Отчётность в ФСС"
          variant="outlined"

          onClick={() => handleChipClick("Отчётность в ФСС")}
        />


        <Chip
          className="skills__chip"
          label="Первичная документация"
          variant="outlined"

          onClick={() => handleChipClick("Первичная документация")}
        />

      </Stack> */}

      <Stack className="skills__chips-container" direction="row" spacing={1}>
        {skills.map(skill => (
          <Chip
            key={skill}
            className={`skills__chip ${selectedSkills.includes(skill) ? 'skills__chip--selected' : ''}`}
            label={skill}
            variant="outlined"
            sx={{ textTransform: 'none', borderRadius: '4px' }}
            onClick={() => handleChipClick(skill)}

          />
        ))}
      </Stack>
      <div className="skills__chip-selected">
        {selectedSkills.map(skill => (
          <Chip key={skill} className="skills__chip-selected-item" label={skill} />
        ))}
      </div>

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
