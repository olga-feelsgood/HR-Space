import './StepOfficeRemote.css'
import Button from '../Button/Button.jsx'
import RadioButton from '../RadioButton/RadioButton.jsx'
import CurrentApplicationBox from '../CurrentAplicationBox/CurrentApplicationBox'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';

function StepOfficeRemote() {

  const { data, handleChange } = useForm();
  console.log(JSON.stringify(data));
  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [errorMessage, setErrorMessage] = useState(true);
  const [stepIsValid, setStepIsValid] = useState(true);

  const [topping, setTopping] = useState('');

  const onOptionChange = (e) => {
    const target = e.target;
    setTopping(target.value)
  }

  console.log(`topping: ${topping}`)

  let navigate = useNavigate();
  const onRedirect = () => navigate('/jobdescription/salary');

  return (
    <>
      <div className='office-remote__container'>
        <div className='office-remote__radiobuttons'>
          <RadioButton
            radioLabel='remote'
            radioTitle='Удалённая'
            radioValue='remote'
            onChange={onOptionChange}
            checked={topping == 'remote'? true : false}
            radioName='work_format'//от бэка
          />
          <RadioButton
            radioLabel='mixed'
            radioTitle='Гибрид'
            radioValue='mixed'
            onChange={onOptionChange}
            // onChange={handleChange}
            // checked={data.work_format === 'mixed'}
            checked={topping == 'mixed'? true : false}
            // onChange={handleChange}
            // checked= {data.work_format.office} //от бэка
            radioName='work_format'//от бэка
          />
          <RadioButton
            radioLabel='office'
            radioTitle='Офис'
            radioValue='office'
            onChange={onOptionChange}
            checked={topping == 'office'? true : false}
            // onChange={handleChange}
            // checked={data.work_format}
            // checked= {data.work_format='office'} //от бэка
            radioName='work_format'//от бэка
          />
        </div>
        {errorMessage && <span className='office-remote__error'>Ничего не выбрано</span>}
        <div className="office-remote__current"><CurrentApplicationBox /></div>
        <div className='office-remote__button'>
          <Button
            onClick={onRedirect}
            stepIsValid={stepIsValid}
            buttonTitle='Далее'
            buttonType='button'
          />
        </div>
      </div>
    </>
  )
}

export default StepOfficeRemote;
