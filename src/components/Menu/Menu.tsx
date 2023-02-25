import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import menuImg from "../../assets/shared/icon-hamburger.svg"
import menuClose from "../../assets/shared/icon-close.svg"
import "./Menu.scss"

const pages = [
  { name: "home", url: "/" },
  { name: "destination", url: "/destination" },
  { name: "crew", url: "/crew" },
  { name: "technology", url: "/technology" },
]

const Menu = () => {
  const [menu, setMenu] = useState(false)

  useEffect(() => {
    menu
      ? (document.getElementsByTagName("body")[0].style.overflow = "hidden")
      : (document.getElementsByTagName("body")[0].style.overflow = "auto")
  }, [menu])

  return (
    <>
      <img
        src={menu ? menuClose : menuImg}
        alt="menu"
        className={"menu__icon"}
        onClick={() => {
          setMenu(!menu)
        }}
      />
      <div className={menu ? "menu menu--open" : "menu"}>
        <nav className="nav">
          <ul className="nav__list">
            {pages.map(({ name, url }, i) => (
              <li key={name} className={"nav__item"}>
                <NavLink
                  to={url}
                  className={({ isActive }) =>
                    isActive ? "nav__link nav__link--active" : "nav__link"
                  }>
                  <span className="nav__index">{`0${i}`}</span>
                  <span className="nav__page-name">{name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Menu
