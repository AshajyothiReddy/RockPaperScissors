import './index.css'

const GameStatusItem = props => {
  const {yourImg, oponentImg, gameStatus, onClickPlayAgain} = props

  return (
    <div className="game-status-container">
      <div className="images-container">
        <img src={yourImg} alt="your choice" className="image" />
        <img src={oponentImg} alt="opponent choice" className="image" />
      </div>
      <p className="status">{gameStatus}</p>
      <button type="button" className="button" onClick={onClickPlayAgain}>
        PLAY AGAIN
      </button>
    </div>
  )
}

export default GameStatusItem
