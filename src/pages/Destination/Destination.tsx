import { useState } from "react"
import Header from "../../components/Header/Header"
import Title from "../../components/Title/Title"
import "./Destination.scss"

const Destination = ({ destinations }) => {
  const [active, setActive] = useState(destinations[0])

  return (
    <div className="destination">
      <Header />
      <Title index="01" name="pick your destination" />

      <img
        className="destination__img"
        src={active.images.png}
        alt="destination"
      />

      <nav className="destination__nav">
        <ul className="destination__list">
          {destinations.map(destination => (
            <li
              key={destination.name}
              className={
                active.name === destination.name
                  ? "destination__item destination__item--active"
                  : "destination__item"
              }
              onClick={() => setActive(destination)}>
              {destination.name}
            </li>
          ))}
        </ul>
      </nav>

      <div className="destination__top">
        <h1 className="destination__name">{active.name}</h1>
        <p className="destination__description">{active.description}</p>
      </div>

      <div className="destination__info">
        <p className="destination__label">avg. distance</p>
        <p className="destination__value">{active.distance}</p>
      </div>

      <div className="destination__info">
        <p className="destination__label">est. travel time</p>
        <p className="destination__value">{active.travel}</p>
      </div>
    </div>
  )
}
export default Destination
