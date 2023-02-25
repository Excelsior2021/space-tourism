import Menu from "../Menu/Menu"
import logo from "../../assets/shared/logo.svg"

import "./Header.scss"

const Header = () => {
  return (
    <>
      <Menu />
      <header className="header">
        <img src={logo} alt="logo" className="header__logo" />
      </header>
    </>
  )
}

export default Header
