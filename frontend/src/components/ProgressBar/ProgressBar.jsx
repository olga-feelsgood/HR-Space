import './ProgressBar.css'
import { useLocation, NavLink } from 'react-router-dom'
import { useState } from 'react'
// import { useState } from 'react';
import progressLineActive from '../../images/progress-line-active.svg'
import progressLineDisabled from '../../images/progress-line-disabled.svg'

function ProgressBar() {

  let { pathname } = useLocation();

  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [stepIsActivated, setStepIsActivated] = useState(false);

  return (
    <section className='progress-bar'>
      <h2 className='progress-bar__title'>{pathname === '/formsubmit' || pathname === '/formpayment' ? 'Конец заявки' : 'Создание заявки'}</h2>
      <nav className='progress-bar__menu'>
        <ul className='progress-bar__links'>
          {pathname === '/' ||
            pathname === '/jobdescription' ||
            pathname === '/jobdescription' ||
            pathname === '/jobdescription/warning' ||
            pathname === '/jobdescription/sphere' ||
            pathname === '/jobdescription/city' ||
            pathname === '/jobdescription/officeremote' ||
            pathname === '/jobdescription/salary' ||
            pathname === '/jobdescription/workinghours' ||
            pathname === '/jobdescription/employmenttype' ||
            pathname === '/jobdescription/businesstrips' ||
            pathname === '/jobdescription/subordinatesnumber' ||
            pathname === '/jobdescription/jobpeculiarities' ||

            pathname === '/candidaterequirements/yearsofexperience' ||
            pathname === '/candidaterequirements/skills' ||
            pathname === '/candidaterequirements/education' ||
            pathname === '/candidaterequirements/portfolio' ||

            pathname === '/workingconditions/numberofvacancies' ||
            pathname === '/workingconditions/typesofreward' ||
            pathname === '/workingconditions/moneyforrecruiters' ||
            pathname === '/workingconditions/candidatefirstworkingday' ||
            pathname === '/workingconditions/interview' ||
            pathname === '/workingconditions/firstinterviewdate' ||

            pathname === '/recruiterrequirements/recruitersnumber' ||
            pathname === '/recruiterrequirements/recruiterstasks' ||
            pathname === '/recruiterrequirements/recruiterspeculiarities' ||
            pathname === '/formpayment' ||
            pathname === '/formsubmit' ||
            stepIsActivated

            ? < li className='progress-bar__link progress-bar__link_active'>
              <NavLink to='/jobdescription/sphere' className='progress-bar__step'>
                <img className='progress-bar__line' src={progressLineActive} alt='Прогресс лайн активный' />
                Опишите вакансию</NavLink>
            </li>

            : < li className='progress-bar__link'>
              <div className='progress-bar__step'>
                <img className='progress-bar__line' src={progressLineDisabled} alt='Прогресс лайн неактивный' />
              </div>
              Опишите вакансию
            </li>}

          {pathname === '/candidaterequirements/yearsofexperience' ||
            pathname === '/candidaterequirements/skills' ||
            pathname === '/candidaterequirements/education' ||
            pathname === '/candidaterequirements/portfolio' ||

            pathname === '/workingconditions/numberofvacancies' ||
            pathname === '/workingconditions/typesofreward' ||
            pathname === '/workingconditions/moneyforrecruiters' ||
            pathname === '/workingconditions/candidatefirstworkingday' ||
            pathname === '/workingconditions/interview' ||
            pathname === '/workingconditions/firstinterviewdate' ||

            pathname === '/recruiterrequirements/recruitersnumber' ||
            pathname === '/recruiterrequirements/recruiterstasks' ||
            pathname === '/recruiterrequirements/recruiterspeculiarities' ||
            pathname === '/formpayment' ||
            pathname === '/formsubmit' ||
            stepIsActivated

            ? < li className='progress-bar__link progress-bar__link_active'>
              <NavLink to='/candidaterequirements/yearsofexperience' className='progress-bar__step'>
                <img className='progress-bar__line' src={progressLineActive} alt='Прогресс лайн активный' />
                Требования к кандидату</NavLink>
            </li>

            : < li className='progress-bar__link'>
              <div className='progress-bar__step'>
                <img className='progress-bar__line' src={progressLineDisabled} alt='Прогресс лайн неактивный' />
              </div>
              Требования к кандидату
            </li>}

          {pathname === '/workingconditions/numberofvacancies' ||
            pathname === '/workingconditions/typesofreward' ||
            pathname === '/workingconditions/moneyforrecruiters' ||
            pathname === '/workingconditions/candidatefirstworkingday' ||
            pathname === '/workingconditions/interview' ||
            pathname === '/workingconditions/firstinterviewdate' ||

            pathname === '/recruiterrequirements/recruitersnumber' ||
            pathname === '/recruiterrequirements/recruiterstasks' ||
            pathname === '/recruiterrequirements/recruiterspeculiarities' ||
            pathname === '/formpayment' ||
            pathname === '/formsubmit' ||
            stepIsActivated

            ? < li className='progress-bar__link progress-bar__link_active'>
              <NavLink to='/workingconditions/numberofvacancies' className='progress-bar__step'>
                <img className='progress-bar__line' src={progressLineActive} alt='Прогресс лайн активный' />
                Условия работы</NavLink>
            </li>

            : < li className='progress-bar__link'>
              <div className='progress-bar__step'>
                <img className='progress-bar__line' src={progressLineDisabled} alt='Прогресс лайн неактивный' />
              </div>
              Условия работы
            </li>}


          {pathname === '/recruiterrequirements/recruitersnumber' ||
            pathname === '/recruiterrequirements/recruiterstasks' ||
            pathname === '/recruiterrequirements/recruiterspeculiarities' ||
            pathname === '/formpayment' ||
            pathname === '/formsubmit' ||
            stepIsActivated

            ? < li className='progress-bar__link progress-bar__link_active'>
              <NavLink to='/recruiterrequirements/recruitersnumber' className='progress-bar__step'>
                <img className='progress-bar__line' src={progressLineActive} alt='Прогресс лайн активный' />
                Требования к рекрутеру</NavLink>
            </li>

            : < li className='progress-bar__link'>
              <div className='progress-bar__step'>
                <img className='progress-bar__line' src={progressLineDisabled} alt='Прогресс лайн неактивный' />
              </div>
              Требования к рекрутеру
            </li>}
        </ul>
      </nav>
    </section >
  )
}

export default ProgressBar;
