import React from "react"
import Card from "./card"
import Counter from "./counter"
import './game.css';
import shuffle from "shuffle-array"

const photos = [
  "/images/cat1.jpg",
  "/images/cat2.jpg",
  "/images/cat3.jpg",
  "/images/cat4.jpg",
  "/images/cat5.jpg",
  "/images/cat6.jpg"
]

class Game extends React.Component {

  handleCardClicked = (cardSrc) => {
    console.log(cardSrc)
  }


  constructor(props) {
    super(props)
    this.state = {
      cards: this.setupGame()
    }
  }

  setupGame = () => {
    const dubblePhotos = photos.concat(photos)
    const shuffledPhotos = shuffle(dubblePhotos)
    return dubblePhotos.map((url) => ({
      src: url,
      isFlipped: false,
      isMatched: false
    }))


  }


  renderCard = (card) => {
    return <Card src = {card.src} onClick={this.handleCardClicked} />
  }


  render() {
    return ( <
        div className = "game" >
        <img className = "logotype" src = "/images/logo.png" / >
        <p> All of the cats have lost their super identical twin. < br / > Can you help find them all ? < /p> {
        this.state.cards.map(this.renderCard)
      }

      </div>
  )
}
}


export default Game
