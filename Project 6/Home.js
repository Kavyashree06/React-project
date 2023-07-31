
import React, {Component} from 'react';
import mobg from './mobg.jpg';

import mbg from './mbg.avif';


class Home extends React.Component{
    
    render(){
        return(
        <div>
            <h1 style={{color:'red', fontFamily:'fantasy'}}>SHOP WITH US</h1>
            <img src={mobg} ></img>
            </div>

        );
    }
}
export default Home;