import React, { Component } from 'react'
import Notifications from "./Notification"
import ProjectList from '../projects/ProjectList'

export class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard contanier">
                <div className = "row">
                 <div className="col s12 m6">
                    <ProjectList/>
                    <div className = "col s12 m5 offset-m1">
                    <Notifications/>
                    </div>
                  </div>
                </div>
                
            </div>
        )
    }
}

export default Dashboard
