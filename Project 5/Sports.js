import React from "react";
class Sports extends React.Component
{
    constructor(){
        super();
        this.state={username:"",age:null,errmsg:""};
    }
    uservalue=(event)=>{
        let n=event.target.name;
        let v=event.target.value;
        let err="";
        if(n=="age"){
            if(v!=""&&!Number(v))
            {
                err=<strong style={{color:'red'}}>invalid,age must be number </strong>
            }

        }
        this.setState({errmsg:err});
        this.setState({[n]:v});
    }
    formsubmit=(event)=>{
        event.preventDefault();
        alert( this.state.username+"!Successfully submitted");
    }
    valuetennis=(event)=>{
        var n=500;
        return(
            document.getElementById('root').innerHTML=n

        ) 

    }

    render(){
        return(
            <form>
                
                <h1 style={{color:"red"}}>SPORTS REGISTRATION FORM</h1><br></br><br></br>
                Select Sport <select name="sports" id="sports" defaultValue="Select Sport">
                    <option value="Tennins" onSelect={this.valuetennis}>Tennis</option>
                    <option value="Football">Football</option>
                    <option value="Cricket">Cricket</option>
                    <option value="Handball">Handball</option>
                </select><br></br><br></br>
                Name:<input type="text" name="username" onChange={this.uservalue}/><br></br><br></br>
                Phone Number:<input type="text" name="age" onChange={this.uservalue} /><br></br><br></br>
                Address:<input type="text" name="address"></input><br></br><br></br>
                Fees:<input type="Cricket" name="fees" value={this.valuetennis}></input><br></br><br></br>
                Refrences:<input type="number" name="Refrences"></input><br></br><br></br>
                Total Amount to be paid:<input type="amount" name="amount"></input><br></br><br></br>
                {this.state.errmsg}<br></br><br></br>
                <button type="button" name="button"onClick={this.formsubmit}>submit</button>
                
            </form>
        )
    }
}
export default Sports;