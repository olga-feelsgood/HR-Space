import './StepCity.css'
import Button from '../Button/Button.jsx'
import search from '../../images/search.svg';
import CurrentApplicationBox from '../CurrentAplicationBox/CurrentApplicationBox';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';


function StepCity() {
  //примерно список для проверки
  const cities = ['Москва', 'Тверь', 'Санкт-Петербург', 'Екатеринбург', 'Cамара', 'Челябинск', 'Владивосток'];

  // тут используем хук useForm
  const { errorMessage, handleSubmit } = useForm({ cityName: '' });
  const [inputValue, setInputValue] = useState(''); // объявляем состояние для input

  const navigate = useNavigate();

  const onRedirect = () => navigate('/jobdescription/officeremote');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className='city__container'>
      <input
        className='city__input city__input_error'
        type='text'
        name='cityName'
        list='cities'
        value={inputValue}
        onChange={handleInputChange}
        placeholder='Введите название города'
      />
      <datalist
        className='city__datalist'
        id='cities'>
        <img src={search} alt='Поиск' />
        {cities.map((city, index) => (
          <option key={index} value={city} />
        ))}
      </datalist>
      {errorMessage && <span className='city__error'>{errorMessage}</span>}
      <div className='city__current'><CurrentApplicationBox /></div>
      <div className='city__button'>
        <Button
          onClick={onRedirect}
          stepIsValid={handleSubmit}
          buttonTitle='Далее'
          buttonType='button'
        />
      </div>
    </div>
  )
}

export default StepCity
