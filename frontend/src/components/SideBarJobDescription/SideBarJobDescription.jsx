import './SideBarJobDescription.css'
import { NavLink, useLocation } from 'react-router-dom'

function SideBarJobDescription() {

  let { pathname } = useLocation();

  return (
    <>
      <nav className='navigation'>
        <NavLink to='/jobdescription/sphere'
          className={pathname !== '/jobdescription/sphere'
            ? 'navigation__link'
            : 'navigation__link navigation__link_active'}>Сфера</NavLink>
        <NavLink to='/jobdescription/city'
          className={pathname !== '/jobdescription/city'
            ? 'navigation__link'
            : 'navigation__link navigation__link_active'}>Город</NavLink>
        <NavLink to='/jobdescription/officeremote'
          className={pathname !== '/jobdescription/officeremote'
            ? 'navigation__link'
            : 'navigation__link navigation__link_active'}>Формат работы</NavLink>
        <NavLink to='/jobdescription/salary'
          className={pathname !== '/jobdescription/salary'
            ? 'navigation__link'
            : 'navigation__link navigation__link_active'}>Заработная плата</NavLink>
        <NavLink to='/jobdescription/workinghours'
          className={pathname !== '/jobdescription/workinghours'
            ? 'navigation__link'
            : 'navigation__link navigation__link_active'}>График работы</NavLink>
        <NavLink to='/jobdescription/employmenttype'
          className={pathname !== '/jobdescription/employmenttype'
            ? 'navigation__link'
            : 'navigation__link navigation__link_active'}>Тип занятости</NavLink>
        <NavLink to='/jobdescription/businesstrips'
          className={pathname !== '/jobdescription/businesstrips'
            ? 'navigation__link'
            : 'navigation__link navigation__link_active'}>Командировки</NavLink>
        <NavLink to='/jobdescription/subordinatesnumber'
          className={pathname !== '/jobdescription/subordinatesnumber'
            ? 'navigation__link'
            : 'navigation__link navigation__link_active'}>Сотрудников в подчинении</NavLink>
        <NavLink to='/jobdescription/jobpeculiarities'
          className={pathname !== '/jobdescription/jobpeculiarities'
            ? 'navigation__link'
            : 'navigation__link navigation__link_active'}>Особенности вакансии</NavLink>
      </nav >
    </>
  )
}

export default SideBarJobDescription