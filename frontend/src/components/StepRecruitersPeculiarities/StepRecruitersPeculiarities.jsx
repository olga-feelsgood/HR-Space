import './StepRecruitersPeculiarities.css'
import Button from '../Button/Button.jsx'
import CheckBox from '../CheckBox/CheckBox.jsx'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function StepRecruitersPeculiarities() {
  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [stepIsValid, setStepIsValid] = useState(true);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/formsubmit');

  return (
    <>
      <div className='recruiters-peculiarities__container'>
      <div className='recruiters-peculiarities__checkbox'>
          <CheckBox
            checkboxLabel='entity'
            checkboxTitle='Только для юридических лиц и ИП'
            checkboxValue='entity'
            checkboxName='hr_requirements'//от бэка
          />
          <CheckBox
            checkboxLabel='freelancing'
            checkboxTitle='Только для самозанятых и фрилансеров'
            checkboxValue='freelancing'
            checkboxName='hr_requirements'//от бэка
          />
        </div>
        <div className='recruiters-peculiarities__button'>
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

export default StepRecruitersPeculiarities
