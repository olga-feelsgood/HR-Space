import './StepTypesOfReward.css'
import Button from '../Button/Button.jsx'
import RadioButtonPaymen from '../RadioButtonPayment/RadioButtonPayment.jsx';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function StepTypesOfReward() {
  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [stepIsValid, setStepIsValid] = useState(true);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/workingconditions/moneyforrecruiters');

  return (
    <>
      <div className='types-reward__container'>
        <div className='types-reward__radiobuttons'>
          <RadioButtonPaymen
            radioLabel='prepayment'
            radioLabelPercentage='100%'
            radioLabelTitle='За выход сотрудника'
            radioLabelText='При этом варианте вознаграждение рекрутер получит в день вступления кандидата в должность'
            radioValue='prepayment'
            radioName='award_option'//от бэка
          />

          <RadioButtonPaymen
            radioLabel='50percentage'
            radioLabelPercentage='50% 50%'
            radioLabelTitle='50% за выход + 50% по окончании гарантийного периода'
            radioLabelText='Часть оплаты рекрутер получает в день вступления кандидата в должность, а часть оплаты — после окончания гарантийного периода (1 месяц)'
            radioValue='50percentage'
            radioName='award_option'//от бэка
          />

          <RadioButtonPaymen
            radioLabel='postpayment'
            radioLabelPercentage='100%'
            radioLabelTitle='По окончании гарантийного периода (1 месяц)'
            radioLabelText='В этом случае рекрутер получаеь оплату спустя месяц нахождения кандидата в должности'
            radioValue='postpayment'
            radioName='award_option'//от бэка
          />

        </div>
        <div className='types-reward__button'>
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

export default StepTypesOfReward