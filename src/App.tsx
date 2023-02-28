import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Destination from "./pages/Destination/Destination"
import Crew from "./pages/Crew/Crew"
import Technology from "./pages/Technology/Technology"
import data from "./data/data.json"

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route
      path="/destination"
      element={<Destination destinations={data.destinations} />}
    />
    <Route path="/crew" element={<Crew crew={data.crew} />} />
    <Route
      path="/technology"
      element={<Technology technology={data.technology} />}
    />
  </Routes>
)

export default App
