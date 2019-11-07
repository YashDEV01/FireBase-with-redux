import React, { Component } from 'react'

     class CreateProject extends Component {
    state = {
        title:'',
        content:''

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
            <h5 className = "grey-text-darken-3">Project</h5>
            <div className = "inut-field">
               <label className= "title">Title</label> 
               <input type ="text" id="title" onChange={this.handleChange}
/>
            <div className = "inut-field">
               <label className= "content">Project Content</label> 
               <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>

            </div>
                 <div className="input-field">
                     <button className="btn pink lighten-1 z-depth-0">Create</button>
                 </div>
                
                </div>     
                </form>          
            </div>
        )
    }
}

export default CreateProject
