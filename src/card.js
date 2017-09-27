import React from "react" // We need react to use react
import './card.css'; // Break up css, normal css -> head

// Defining a card component.
// That component is inherited functions from React.Component
class Card extends React.Component {

//the function we called from onCLick. We give it name and it
// takes no arguments.
// Is in class has access to 'this.'
  handleClick = () =>{
    alert("i was clicked" + this.props.src)
  }

// render() is a requierd function to our Component.
// React will invoke this function when it mounts the component.
  render() { //defining a function, NOT using fat arrow
  // The render function needs to return JSX
  // JSX is basiclly html with components
  // <Card /> in game, props becomes object
  return(
      <div className = "card" onClick={this.handleClick}>
        <img src = {this.props.src}/>
      </div >
  )
  }
}

//To be able to use 'Import Card from "./card"', we need to export it
export default Card
