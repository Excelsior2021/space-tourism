import Menu from "../Menu/Menu"
import logo from "../../assets/shared/logo.svg"

import "./Header.scss"

const Header = () => {
  return (
    <>
      <header className="header">
        <img src={logo} alt="logo" className="header__logo" />
        <Menu />
      </header>
    </>
  )
}

export default Header
