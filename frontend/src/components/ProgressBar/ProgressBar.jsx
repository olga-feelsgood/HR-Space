import './ProgressBar.css'
import { useLocation } from 'react-router-dom'
// import { useState } from 'react';
import progressLineActive from '../../images/progress-line-active.svg'
import progressLineDisabled from '../../images/progress-line-disabled.svg'

function ProgressBar() {
  // const [progress, setProgress] = useState(0);

  // const handleClick = () => {
  // };
  let { pathname } = useLocation();

  return (
    <section className='progress-bar'>
      <h2 className='progress-bar__title'>Создание заявки</h2>
      <nav className='progress-bar__menu'>
        <ul className='progress-bar__links'>
          {pathname === '/jobdescription' ||
            pathname === '/jobdescription/warning' ||
            pathname === '/jobdescription/sphere' ||
            pathname === '/jobdescription/city' ||
            pathname === '/jobdescription/officeremote' ||
            pathname === '/jobdescription/salary' ||
            pathname === '/jobdescription/workinghours' ||
            pathname === '/jobdescription/employmenttype' ||
            pathname === '/jobdescription/businesstrips' ||
            pathname === '/jobdescription/subordinatesnumber' ||
            pathname === '/jobdescription/jobpeculiarities'

            ? < li className='progress-bar__link progress-bar__link_active'
            // onClick={() => handleClick(0)}
            >
              <div className='progress-bar__step'>
                <img className='progress-bar__line' src={progressLineActive} alt='Прогресс лайн активный' />
              </div>
              Опишите вакансию
            </li>

            : < li className='progress-bar__link'
            // onClick={() => handleClick(0)}
            >
              <div className='progress-bar__step'>
                <img className='progress-bar__line' src={progressLineDisabled} alt='Прогресс лайн неактивный' />
              </div>
              Опишите вакансию
            </li>}

          {pathname === '/candidaterequirements/yearsofexperience' ||
            pathname === '/candidaterequirements/skills' ||
            pathname === '/candidaterequirements/education' ||
            pathname === '/candidaterequirements/portfolio'

            ? < li className='progress-bar__link progress-bar__link_active'
            // onClick={() => handleClick(0)}
            >
              <div className='progress-bar__step'>
                <img className='progress-bar__line' src={progressLineActive} alt='Прогресс лайн активный' />
              </div>
              Требования к кандидату
            </li>

            : < li className='progress-bar__link'
            // onClick={() => handleClick(0)}
            >
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
            pathname === '/workingconditions/firstinterviewdate'

            ? < li className='progress-bar__link progress-bar__link_active'
            // onClick={() => handleClick(0)}
            >
              <div className='progress-bar__step'>
                <img className='progress-bar__line' src={progressLineActive} alt='Прогресс лайн активный' />
              </div>
              Условия работы
            </li>

            : < li className='progress-bar__link'
            // onClick={() => handleClick(0)}
            >
              <div className='progress-bar__step'>
                <img className='progress-bar__line' src={progressLineDisabled} alt='Прогресс лайн неактивный' />
              </div>
              Условия работы
            </li>}


          {pathname === '/recruiterrequirements/recruitersnumber' ||
            pathname === '/recruiterrequirements/recruiterstasks' ||
            pathname === '/recruiterrequirements/recruiterspeculiarities'

            ? < li className='progress-bar__link progress-bar__link_active'
            // onClick={() => handleClick(0)}
            >
              <div className='progress-bar__step'>
                <img className='progress-bar__line' src={progressLineActive} alt='Прогресс лайн активный' />
              </div>
              Требования к рекрутеру
            </li>

            : < li className='progress-bar__link'
            // onClick={() => handleClick(0)}
            >
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
