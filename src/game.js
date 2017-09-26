import React from "react"
import Card from "./card"
import './game.css';

const Game = () => (
  <div className="game">
      <h1>Find all the cats</h1>
      <p>Cats are smart, freaky and unpredictable creatures.<br/>Can you find them all?</p>
      <Card src="/images/cat1.jpg" />
      <Card src="/images/cat2.jpg" />
      <Card src="/images/cat3.jpg" />
      <Card src="/images/cat1.jpg" />
      <Card src="/images/cat2.jpg" />
      <Card src="/images/cat3.jpg" />
  </div>
)
export default Game
