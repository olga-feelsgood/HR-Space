import './StepCity.css'
import DataOfCities from '../Data/DataOfCities.json';
import Select from 'react-select';
import Button from '../Button/Button.jsx'
import search from '../../images/search.svg';
import CurrentApplicationBox from '../CurrentAplicationBox/CurrentApplicationBox';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';

function StepCity() {
  const { handleChange } = useForm();
  const [selectedCity, setSelectedCity] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();
  const onRedirect = () => navigate('/jobdescription/officeremote');

  const handleCityChange = (selectedOption) => {
    if (!selectedOption) {
      setErrorMessage('Выберите город из списка');
    } else {
      setErrorMessage('');
    }
    setSelectedCity(selectedOption);
    handleChange({ target: { name: 'city', value: selectedOption ? selectedOption.value : '' } });
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      boxSizing: 'border-box',
      width: '538px',
      height: '40px',
      padding: '3px 14px',
      alignItems: 'center',
      borderRadius: '4px',
      border: '1px solid var(--Blue-50, #71a2ff)',
      background: 'var(--White-10, #fff)',
      // backgroundImage: `url(${search})`,
      // backgroundRepeat: 'no-repeat',
      // backgroundPosition: 'right center',
      // paddingRight: '0',
    }),
  };

  return (
    <>
      <div className='city__container'>
        {/* <img className="search_pic" src={search} alt='Поиск' /> */}
        <Select
          // className={`city__input ${errorMessage && 'city__input_error'}`}
          styles={customStyles}
          value={selectedCity}
          onChange={handleCityChange}
          options={DataOfCities.map(city => ({ value: city.city, label: city.city }))}
          placeholder='Выберите город'
        />
        <span className='city__error'>{errorMessage}</span>
        <div className='city__current'><CurrentApplicationBox /></div>
      </div>
      <div className='city__button'>
        <Button
          onClick={onRedirect}
          stepIsValid={!errorMessage && !!selectedCity}
          buttonTitle='Далее'
          buttonType='button'
        />
      </div>
    </>
  );
}

export default StepCity;
