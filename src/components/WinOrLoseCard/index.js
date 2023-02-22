import './index.css'

const WinOrLoseCard = props => {
  const {isWon, score, clickPlayAgain} = props
  const resultText = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'
  const imgUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  return (
    <div className="score-card">
      <div className="score-container">
        <h1 className="result">{resultText}</h1>
        <p className="score-label">{scoreLabel}</p>
        <p className="score">{score}/12</p>
        <button
          className="play-again-button"
          onClick={clickPlayAgain}
          type="button"
        >
          Play Again
        </button>
      </div>
      <img src={imgUrl} alt="win or lose" className="win-or-loss-image" />
    </div>
  )
}

export default WinOrLoseCard
