import React, { Component } from 'react'
import membersList from '../dummy-data/users.json'
import MemberDetails from './MemberDetails'
import AddMember from './AddMember'

export default class Members extends Component {
    state = {
        selected : null,
        toggleClass: false
    }

    displayMembers() {  
        return (
            membersList.map((member)=> {                
                return (
                    <li key={member.index} onClick={(e)=> {
                        this.handleClick(member)
                    }} className={this.state.toggleClass?'active':''} >{member.name}</li>
                )
            })
        )        
    }

    handleClick(member) {
        
        this.setState({
            selected: member,
            toggleClass: !this.state.toggleClass
        })
    }

    render() {
        return (
            <div className="mainContainer">
                <div className="sidebar">
                    <ul className="usersList">{this.displayMembers()}</ul>
                </div>
                <div className="mainContent">
                    <MemberDetails member={this.state.selected} />
                </div>

                <AddMember />

            </div>
        )
    }
}
