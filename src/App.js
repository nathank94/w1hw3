import React, { Component } from 'react';
import "./App.css";

class App extends Component {

  state ={
    gameInfo: {},
    showMe: true,
    score: 0

  }

  handleSubmit = e => {
    e.preventDefault()
    fetch("http://jservice.io/api/random")
    .then(response => response.json())
    .then(data => this.setState({gameInfo: data[0]}))
    .then( ()=> console.log(this.state.gameInfo))
    .catch(error => console.error(error))
  }

  handleToggle = () => {
    this.setState({
      showMe: !this.state.showMe
    })
  }

  handleIncrement = () => {
    //console.log('increment')
    this.setState({ score: this.state.score +1})
  }

  handleDecrement = () => {
    this.setState({ score: this.state.score -1})
  }

  handleReset = () => {
    this.setState({ score: 0})
  }

  render() {
    return (
      <div className="gameContainer">
        <h1>Welcome to Jeopardy!</h1>
        <div className="Score Row">
          <h2>Score: {this.state.score}</h2>
          <button onClick = {this.handleIncrement}>Increase</button> 
          <button onClick = {this.handleDecrement}>Decrease</button> 
          <button onClick= {this.handleReset}>Reset</button>

        </div>
        <h1 className = "Q"><span>Question: </span> {this.state.gameInfo.question}</h1>
        <button onClick = {this.handleSubmit}> Random Trivia Question</button>
        <h3 className = 'Cat'><span>Category</span> {this.state.gameInfo.category?.title}</h3>
        <h3 className = 'P'><span>Points</span>{this.state.gameInfo.value}</h3>
        
        {
          this.state.showMe?
          <h3 className = 'Ans'><span>Answer : {this.state.gameInfo.answer}</span></h3>
          :<h3 className = 'Ans'><span>Answer :</span></h3>
        }
        <button onClick = {this.handleToggle}>Answers</button>  
      </div>
    );
  }
}

export default App;
