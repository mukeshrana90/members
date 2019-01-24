import React, { Component } from 'react'

export default class MemberDetails extends Component {

    displayDetails() {
        console.log(this.props)
        if(this.props.member === null) {
            return (
                <div className="noData">No Users Selected</div>
            )
        }
        else {
            return (
                
                <div className="userDetailsWrapper">
                    <figure><img src={this.props.member.picture} alt=""/></figure>
                    <div className="userDetails">
                    <h2>{this.props.member.name}</h2>
                        <p>{this.props.member.email}</p>
                        <p>{this.props.member.Phone}</p>
                        <p>{this.props.member.age},{this.props.member.gender}</p>
                        <h5>{this.props.member.address}</h5>
                    </div>
                </div>
            )             
        }
    }
    render() {
        
        return (
            <div>
                {this.displayDetails()}
            </div>
        )
    }
}
