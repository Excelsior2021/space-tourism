import Header from "../../components/Header/Header"
import "./Home.scss"

const Home = () => (
  <div className="home">
    <Header />
    <main className="home__main">
      <article className="home__intro">
        <p className="home__text-one">so, you want to travel to</p>
        <p className="home__text-two">space</p>
        <p className="home__text-three">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </article>

      <button className="home__button">explore</button>
      <div className="home__button-hover"></div>
    </main>
  </div>
)

export default Home
