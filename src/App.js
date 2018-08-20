import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';
import Header from './Components/Header.js';
import Home from './Components/Home.js';

class App extends Component {
  
  state = {
    persons: [
      {name:'max',  age: 28},
      {name:'john', age: 30}
    ]
  }

  switchNameHandler = (newName) => {
   // console.log(alert('Was Clicked!'));
   this.setState({ 
     persons:[
      {name: newName,  age: 28},
      {name:'john', age: 50}
   ]
  })
  }

  nameChangedHandler = (event) => {
    this.setState({
    persons:[
      {name: 'max',  age: 28},
      {name: event.target.value, age: 50}
   ]
  })
}

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (

      <div className="container">
      <Header/>
      <Home/>

      <div className="App">
        <h1>Hi I am a new app</h1>
        
        <button style = {style}
        onClick={this.switchNameHandler.bind(this, 'Maximilion')} >Switch Name</button>
        <Person 
        name={this.state.persons[0].name}   
        age={this.state.persons[0].age} />
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age} 
        click={this.switchNameHandler.bind(this, 'Makk')}
        changed={this.nameChangedHandler}
        >My Hobbies: Racing</Person>
        
      </div>
      </div>
    );
  }
}




export default App;
