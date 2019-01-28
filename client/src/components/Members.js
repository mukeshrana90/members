import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import membersList from '../dummy-data/users.json'

// Components
import MemberDetails from './MemberDetails'
import AddMember from './AddMember'

export default class Members extends Component {
    state = {
        selected: null,             
    }

    displayMembers() {
        return (
            membersList.map((member) => {
                return (
                    <li key={member.index} 
                        onClick={(e) => {this.handleClick(member)}}                                                 
                    >
                        <Fade bottom>{member.name}</Fade>
                    </li>
                )
            })
        )
    }

    handleClick(member) {
        this.setState({
            selected: member,         
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
