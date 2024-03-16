import './Header.css'
import logo from '../../images/logo.svg';
import heart from '../../images/heart.svg';
import alarm from '../../images/alarm.svg';

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
        </div>

      </nav>

      {/* добавить стили чтобы исчез белый квадрат */}
      <button type="button">
        <img src={heart} alt="Иконка" width="20" height="20" />
      </button>

      <button type="button">
        <img src={alarm} alt="Иконка" width="20" height="20" />
      </button>

    </header>

  )
}

export default Header
