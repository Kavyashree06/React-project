import React,{ Component } from 'react';    
import ReactDOM from 'react-dom';
import Task3 from './Buddyclub';
ReactDOM.render(<Task3/>,document.getElementById('root'));



/*
class App extends React.Component {  
   constructor(props) {  
      super(props);  
      this.state = {start: "Initial State"};  
      this.changeState = this.changeState.bind(this)  
   }    
   render() {  
      return (  
         <div>  
             <h1>ReactJS component's Lifecycle</h1>  
             <h3>Hello {this.state.start}</h3>  
             <button onClick = {this.changeState}>Click Here!</button>          
         </div>  
      );  
   }  
   componentWillMount() {  
      console.log('Component Will MOUNT!')  
   }  
   componentDidMount() {  
      console.log('Component Did MOUNT!')  
   }  
   changeState(){  
      this.setState({start:"All!!- Its a great reactjs tutorial."});  
   }  
   componentWillReceiveProps(newProps) {      
      console.log('Component Will Recieve Props!')  
   }  
   shouldComponentUpdate(newProps, newState) {  
      return true;  
   }  
   componentWillUpdate(nextProps, nextState) {  
      console.log('Component Will UPDATE!');  
   }  
   componentDidUpdate(prevProps, prevState) {  
      console.log('Component Did UPDATE!')  
   }  
   componentWillUnmount() {  
      console.log('Component Will UNMOUNT!')  
   }  
}  
ReactDOM.render(<App/>,document.getElementById('root'));*/
























/*import React from "react";
import  ReactDOM from "react-dom";
import {BrowserRouter as Router,Route,Routes,Link,Switch}from 'react-router-dom';
import Update3 from "./Update3";
import Unmount from "./Unmount";
ReactDOM.render(<Unmount/>,document.getElementById('root'));*/



/*import Home from "./Home";
import About from "./About";
import Joinus from "./Joinus";
const routing=(
  <Router>
    <div>
      <h1>Hello</h1>
      <Routes>
        <Route path="/Home"element={<Home/>}/>

        
        <Route path="/About"element={<About/>}/>
        <Route path="/Joinus"element={<Joinus/>}/>

      </Routes>
    </div>
  </Router>

)
ReactDOM.render(routing,document.getElementById('root'));*/

//import Sports from "./Sports";
//ReactDOM.render(<Sports/>,document.getElementById("root"));
//import Cartoon from './cartoon';
//import Header from './Header';
//import Headerc from './Headerc';
//import Update2 from './update2';
//ReactDOM.render(<Update2 favcol="yellow"/>,document.getElementById('root'));
//ReactDOM.render(<Headerc favcol="yellow"/>,document.getElementById('root'));

/*class Cartoon extends React.Component{
  constructor(props){
      super(props);
      this.state={Ilike:'Tom'};
  }
  static getDerivedStateFromProps(props,state){
    return{Ilike:props.A}
  }
  render(){
      return(
          <h1>This {this.state.Ilike} cartoon is cool</h1>
      );
  }
}*/
//ReactDOM.render(<Cartoon A="Jerry"/>,document.getElementById('root'));






//import Form from "./Form";
//import Formvalidation from "./Formvalidation";
//import Sports from "./Sports";
//import Hooks from "./Hooks";
//import App from "./App";
//import Task4 from "./Task 4";
//import Fruit from "./Fruit";
//import Mobile from "./Mobile";
//import Hookeffects from "./Hookeffects"
//import Fragment from "./Fragment";
//import Home from "./Home";
//import About from "./About";
//import Joinus from "./Joinus";

//ReactDOM.render(<About/>,document.getElementById("root"));



/*const routing=(
  <Router>
    <div>
      <h1>Hello</h1>
      <Routes>
        <Route path="/Home"element={<Home/>}/>

        
        <Route path="/About"element={<About/>}/>
        <Route path="/Joinus"element={<Joinus/>}/>

      </Routes>
    </div>
  </Router>

)
ReactDOM.render(routing,document.getElementById('root'));*/



  


