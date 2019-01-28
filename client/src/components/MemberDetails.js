import React, { Component } from 'react'
import Jump from 'react-reveal/Jump'

const picture = 'https://randomuser.me/api/portraits/men/1.jpg';

export default class MemberDetails extends Component {

    displayDetails() {



        if (this.props.member === null) {
            return (
                <div className="noData">No Users Selected</div>
            )
        }
        else {
            const gender = this.props.member.gender;
            const displayGender = () => {
                if (gender == 'male') {
                    return <figure><img src={`https://randomuser.me/api/portraits/men/${this.props.member.index}.jpg`} alt="" /></figure>
                }
                else {
                    return <figure><img src={`https://randomuser.me/api/portraits/women/${this.props.member.index}.jpg`} alt="" /></figure>
                }
            }
            return (
                <Jump>
                    <div className="userDetailsWrapper">
                        {displayGender()}
                        <div className="userDetails">
                            <h2>{this.props.member.name}</h2>
                            <p>{this.props.member.email}</p>
                            <p>{this.props.member.Phone}</p>
                            <p>{this.props.member.age},{this.props.member.gender}</p>
                            <h5>{this.props.member.address}</h5>
                        </div>
                    </div>
                </Jump>
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
