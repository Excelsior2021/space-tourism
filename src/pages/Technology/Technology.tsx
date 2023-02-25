import { useState } from "react"
import Header from "../../components/Header/Header"
import Title from "../../components/Title/Title"
import "./Technology.scss"

const Technology = ({ technology }) => {
  const [technologyState, setTechnologyState] = useState(technology[0])
  return (
    <div className="technology">
      <Header />
      <Title index="03" name="space launch 101" />

      <img
        className="technology__img"
        src={technologyState.images.landscape}
        alt={technologyState.name}
      />

      <nav className="technology__nav">
        {technology.map((tech, i) => (
          <span
            key={tech.name}
            className={
              technologyState.name === tech.name
                ? "technology__item technology__item--active"
                : "technology__item"
            }
            onClick={() => setTechnologyState(technology[i])}>
            {i + 1}
          </span>
        ))}
      </nav>

      <div className="technology__info">
        <p className="technology__terminology">the terminology...</p>
        <p className="technology__name">{technologyState.name}</p>
        <p className="technology__description">{technologyState.description}</p>
      </div>
    </div>
  )
}

export default Technology
