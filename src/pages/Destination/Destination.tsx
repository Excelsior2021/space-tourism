import { useState } from "react"
import Header from "../../components/Header/Header"
import Title from "../../components/Title/Title"
import { destinationObjType } from "../../types/types"
import "./Destination.scss"

type destinationType = {
  destinations: destinationObjType[]
}

const Destination = ({ destinations }: destinationType) => {
  const [active, setActive] = useState(destinations[0])

  return (
    <div className="destination">
      <Header />

      <main className="destination__main">
        <Title index="01" name="pick your destination" />

        <div className="destination__content">
          <img
            className="destination__img"
            src={active.images.png}
            alt="destination"
          />

          <div className="destination__aside">
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

            <h1 className="destination__name">{active.name}</h1>
            <p className="destination__description">{active.description}</p>

            <div className="destination__info-container">
              <div className="destination__info">
                <p className="destination__label">avg. distance</p>
                <p className="destination__value">{active.distance}</p>
              </div>

              <div className="destination__info">
                <p className="destination__label">est. travel time</p>
                <p className="destination__value">{active.travel}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
export default Destination
