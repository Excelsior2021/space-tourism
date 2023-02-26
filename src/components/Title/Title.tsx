//@ts-nocheck
import "./Title.scss"

const Title = ({ index, name }) => {
  return (
    <span className="title">
      <p className="title__index">{index}</p>
      <h2 className="title__name">{name}</h2>
    </span>
  )
}

export default Title
