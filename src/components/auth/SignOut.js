import React, { Component } from 'react'

     class SignOut extends Component {
    state = {
        email:'',
        password:''

    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state)
    }
    

    render() {
        return (
            <div className = "container">
            <form onSubmit={this.handleSubmit} className="white">
            <h5 className = "grey-text-darken-3">SignOut</h5>
            <div className = "inut-field">
               <label className= "email">Email</label> 
               <input type ="email" id="email" onChange={this.handleSubmit}
/>
            <div className = "inut-field">
               <label className= "password">Password</label> 
               <input type ="password" id="password" onChange={this.handleChange}
/>
            </div>
                 <div className="input-field">
                     <button className="btn pink lighten-1 z-depth-0">Login</button>
                 </div>
                
                </div>     
                </form>          
            </div>
        )
    }
}

export default SignOut
