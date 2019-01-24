import React, { Component } from 'react'

export default class AddMember extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: "",
            gender: "",

        }
    }

    render() {
        return (
            <div>
                <div className="addMemberWrapper">
                    
                </div>
                <button className="addMemberBtn"><i className="material-icons">add</i></button>
            </div>
        )
    }
}
