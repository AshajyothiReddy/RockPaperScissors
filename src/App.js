import {Component} from 'react'
import GameStatusItem from './components/GameStatusItem'
import Button from './components/Button'
import {Heading, Paragraph} from './styledComponents'
import RulesPopup from './components/RulesPopup'
import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    oponentImg: '',
    yourImg: '',
    score: 0,
    gameStatus: '',
    isGameStarted: false,
  }

  onClickPlayAgain = () => {
    this.setState({
      isGameStarted: true,
    })
  }

  onClickButton = id => {
    const reqChoice = choicesList.find(each => each.id === id)
    const randomIndex = Math.floor(Math.random() * choicesList.length)
    const opponentId = choicesList[randomIndex].id
    if (id === opponentId) {
      this.setState({
        gameStatus: 'IT IS DRAW',
      })
    } else if (id === 'ROCK' && opponentId === 'SCISSORS') {
      this.setState({
        gameStatus: 'YOU WON',
      })
      this.setState(prevState => ({score: prevState.score + 1}))
    } else if (id === 'ROCK' && opponentId === 'PAPER') {
      this.setState({
        gameStatus: 'YOU LOSE',
      })
      this.setState(prevState => ({score: prevState.score - 1}))
    } else if (id === 'PAPER' && opponentId === 'ROCK') {
      this.setState({
        gameStatus: 'YOU WON',
      })
      this.setState(prevState => ({score: prevState.score + 1}))
    } else if (id === 'PAPER' && opponentId === 'SCISSORS') {
      this.setState({
        gameStatus: 'YOU LOSE',
      })
      this.setState(prevState => ({score: prevState.score - 1}))
    } else if (id === 'SCISSORS' && opponentId === 'ROCK') {
      this.setState({
        gameStatus: 'YOU LOSE',
      })
      this.setState(prevState => ({score: prevState.score - 1}))
    } else if (id === 'SCISSORS' && opponentId === 'PAPER') {
      this.setState({
        gameStatus: 'YOU WON',
      })
      this.setState(prevState => ({score: prevState.score + 1}))
    }

    this.setState({
      yourImg: reqChoice.imageUrl,
      oponentImg: choicesList[randomIndex].imageUrl,
      isGameStarted: true,
    })
  }

  render() {
    const {score, yourImg, oponentImg, isGameStarted, gameStatus} = this.state
    return (
      <div className="bg-container">
        <div className="score-container">
          <div className="headings-container">
            <Heading>
              ROCK <br /> PAPER <br /> SCISSORS
            </Heading>
          </div>
          <div className="score-card">
            <Paragraph fontFamily="bree serif">SCORE</Paragraph>
            <Paragraph fontFamily="Roboto">{score}</Paragraph>
          </div>
        </div>
        {isGameStarted ? (
          <GameStatusItem
            yourImg={yourImg}
            oponentImg={oponentImg}
            gameStatus={gameStatus}
          />
        ) : (
          <ul className="images-container">
            {choicesList.map(each => (
              <Button
                key={each.id}
                buttonDetails={each}
                onClickButton={this.onClickButton}
              />
            ))}
          </ul>
        )}
        <div className="rules-button">
          <RulesPopup />
        </div>
      </div>
    )
  }
}

export default App
