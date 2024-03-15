import './Header.css'

function Header() {
  return (

    <header className="header">

      <div>
        <img className="logo" src="./images/logo.svg" alt="Logo" />
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

      {/* иконки и аватарка для авторизации */}


    </header>

  )
}

export default Header
