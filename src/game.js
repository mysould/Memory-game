import React from "react"
import Card from "./card"
import Counter from "./counter"
import './game.css';

class Game extends React.Component {

  state = {
    cards: [
      { src: "/images/cat1.jpg" },
      { src: "/images/cat2.jpg" },
      { src: "/images/cat3.jpg" }
    ]
  }


  render () {
      return (
          <div className="game">
              <img className="logotype" src="/images/logo.png" />
              <p>All of the cats have lost their super identical twin.<br/>Can you help find them all?</p>
              {this.state.cards.map((card) => (
                <Card src={card.src} />
              ))}
              
          </div>
      )
  }
}


export default Game
