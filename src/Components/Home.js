import React, { Component } from 'react';

class Home extends Component {
  
    render() {
        return(
                 <div>
                       <p>This is a component!</p>
                     <p>Your name is {this.props.name}, your age is {this.props.age}</p>
                           
                 </div>
        );
    }
      
}


export default Home;
