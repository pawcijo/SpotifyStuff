import './App.css';

import React, {Component} from 'react';

import logo from './logo.svg';


let defaultTextColor = '#000';
let defaultStyle = {
  color: defaultTextColor
}

class Aggreate extends Component {
  render() {
    return (<div style = {{...defaultStyle,width: '40%', display: 'inline-block'}}>
    <h2>Text</h2>
      </div>

    );
  }
}

class Filter extends Component {
  render() {
    return (
    <div style={defaultStyle}>
      <img/>
      <input type="text"/>
    </div>
    );
  }
}

class Playlist extends Component{
render(){
  return <div style={{...defaultStyle,display: 'inline-block',width: "25%"}}>
          <img/>
          <h3>Playlist Name</h3>
          <ul>
            <li>Song1 </li>
            <li>Song2 </li>
            <li>Song3 </li>
          </ul>
    </div>
 }
}


class App extends Component {

    
  render() {
    return (  
      <div className='App'>
          <h1 style={{...defaultStyle, 'font-size': '54px'}}> Title</h1>
          <Aggreate/>
          <Aggreate/>
          <Filter/>
          <Playlist/>
          <Playlist/>
          <Playlist/>
      </div>
    );
  }
}

export default App;
