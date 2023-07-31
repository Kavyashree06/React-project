import React,{Component} from 'react';
import "./Style.css";
import styles from "./demo.module.css";
import lon from './lon.jpg';
import venice from './venice.jpg';
import paris from './paris.jpg';
import san from './san.jpg';
class Task4 extends React.Component{
    render(){
      const mystyle={
        color:'purple',
        fontFamily:'fantasy'
      };
      const ima1={
        padding:'10px 20px 20px 40px'
      
      }
      const ima2={
        padding:'10px 20px 20px 500px'
      }
      const ima3={
        padding:'30px 20px 20px 40px'
      }
      const ima4={
        padding:'30px 20px 20px 500px'
      }
      return(
        <div>
          <center>
          <h1 style={mystyle}>WELCOME TO BUDDY CLUB</h1>
          <h2 style={{color:'red'}}>EXPLORE</h2></center>
          <h3 className='App'>PLAY THE VIDEO</h3>
          
          <img src={lon} alt='logo' height="200px" width="300px" align="top-left" style={ima1}></img>
          <img src={venice} alt='logo' height="200px" width="300px" align="top-right" style={ima2}></img>
          <br></br>
          <center>
          <video width="500px" height="300px" align="center" controls autoPlay>
            <source src="./city.mp4" type="video/mp4"></source>
          </video>
          </center>
          <img src={paris} alt='logo' height="200px" width="300px" align="bottom-left" style={ima3}></img>
          <img src={san} alt='logo' height="200px" width="300px" align="bottom-right" style={ima4}></img>
        </div>
  
  
      );
    }
  }
  export default Task4;