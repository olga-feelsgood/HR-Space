import './Header.css'
import logo from '../../images/logo.svg';
import heart from '../../images/heart.svg';
import alarm from '../../images/alarm.svg';
import cursor from '../../images/cursor.svg';
import avatar from '../../images/avatar.svg';

function Header() {
  return (

    <header className="header">

      <div>
        <img src={logo} alt="Logo" />
      </div>

      <nav className="nav_menu">

        <div className="nav_el">
          {/* <Link to="/">
                  </Link> */}
          Главная
        </div>

        <div className="nav_el">
          {/* <Link to="/">
                  </Link> */}
          Мои заявки
        </div>

        <div className="nav_el">
          {/* <Link to="/">
                  </Link> */}
          Помощь
          <img
            className="cursor"
            src={cursor}
            alt="Курсор" />
        </div>

      </nav>


      <button
        className="icons"
        type="button">
        <img src={heart}
          alt="Лайк" />
      </button>

      <button
        className="icons"
        type="button">
        <img src={alarm}
          alt="Уведомление" />
      </button>

      <div className="profile">
        <div className="avatar">
          <img src={avatar} />
        </div>
        <img
          className="cursor"
          src={cursor}
          alt="Курсор" />
        <div className="info">
          <p>
            Анастасия Волошина
          </p>
          <p>#67334 Рекрутер</p>
        </div>
      </div>

    </header>

  )
}

export default Header
