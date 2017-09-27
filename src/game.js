import React from "react"
import Card from "./card"
import './game.css';
import shuffle from "shuffle-array"
import uuidv4 from "uuid/v4"

const photos = [
  "/images/cat1.jpg",
  "/images/cat2.jpg",
  "/images/cat3.jpg",
  "/images/cat4.jpg",
  "/images/cat5.jpg",
  "/images/cat6.jpg"
]

class Game extends React.Component {

//new function which will take one argument,
// a "card src" and logged it
  handleCardClicked = (cardSrc) => {
    //passed function from card
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
      isMatched: false,
      id: uuidv4()
    }))


  }


  renderCard = (card) => {
    //lägg till function till card och skicka till card.js
    //key unique identifier from array
    //id unique identifier we can use
    return <Card
      src={card.src}
      key={card.id}
      id={card.id}
      whenClicked={this.handleCardClicked} />
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
