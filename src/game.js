import React from "react"
import Card from "./card"
import Counter from "./counter"
import './game.css';

const Game = () => (
  <div className="game">
      <img className="logotype" src="/images/logo.png" />
      <p>All of the cats have lost their super identical twin.<br/>Can you help find them all?</p>
      <Counter />
      <Card src="/images/cat1.jpg" />
      <Card src="/images/cat2.jpg" />
      <Card src="/images/cat3.jpg" />
      <Card src="/images/cat1.jpg" />
      <Card src="/images/cat2.jpg" />
      <Card src="/images/cat3.jpg" />
  </div>
)
export default Game
