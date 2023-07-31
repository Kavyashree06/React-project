
import React, {Component} from 'react';

class Joinus extends React.Component{
    constructor(){
        super();
        this.state={username:""}
        this.state={age:""}
    }
    uservalue=(event)=>
    {
        this.setState({username:event.target.value});
        
        
    }
    agevalue=(event)=>
    {
        this.setState({age:event.target.value});
    }

    render()
    {
        return(
            <form>
                <h1>Hello this is {this.state.username}</h1>
                Enter your name:<input type="text" name="username" onChange={this.uservalue}/><br></br><br></br>
                
                Enter your mobile number:<input type="number" name="age" onChange={this.agevalue} />
            </form>
        )
    }
}
export default Joinus;