import { useState } from "react"
import Header from "../../components/Header/Header"
import Title from "../../components/Title/Title"
import "./Crew.scss"

const Crew = ({ crew }) => {
  const [memberState, setMemeberState] = useState(crew[0])
  return (
    <div className="crew">
      <Header />

      <main className="crew__main">
        <Title index="02" name="meet your crew" />

        <div className="crew__main-container">
          <div className="crew__img-container">
            <img
              className="crew__img"
              src={memberState.images.png}
              alt={memberState.name}
            />
          </div>

          <div className="crew__nav-info-container">
            <nav className="crew__nav">
              {crew.map((member, i) => (
                <span
                  key={member.name}
                  className={
                    memberState.name === member.name
                      ? "crew__dot crew__dot--active"
                      : "crew__dot"
                  }
                  onClick={() => setMemeberState(crew[i])}></span>
              ))}
            </nav>

            <div className="crew__info">
              <p className="crew__role">{memberState.role}</p>
              <p className="crew__name">{memberState.name}</p>
              <p className="crew__bio">{memberState.bio}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Crew
