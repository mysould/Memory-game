import React from "react"

class Counter extends React.Component {

    state = {
      count: 0
    }

    addButtonClick = () => {
        this.setState({ count: this.state.count + 1})
    }
    reduceButtonClick = () => {
        this.setState({ count: this.state.count - 1})
    }


    render () {
        return (
          <div>
            Count: {this.state.count}
            <button onClick={this.addButtonClick}>Add!</button>
            <button onClick={this.reduceButtonClick}>Reduce!</button>
          </div>
        )
    }

}

export default Counter
