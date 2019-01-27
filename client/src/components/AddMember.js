import React, { Component } from 'react'
import Input from './common/Input'

export default class AddMember extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
        }
        this.onChangeHandle = this.onChangeHandle.bind(this);
    }
    onChangeHandle(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div>
                <div className="addMemberWrapper">
                    <form id="addMember">
                        <Input
                            required
                            label="Name"
                            placeholder="Enter Your Name"
                            name="name"
                            inputType="text"
                            onChangeHandle={this.onChangeHandle}
                        />
                        <Input
                            required
                            label="Email"
                            extraClass="email"
                            placeholder="Enter Your Email"
                            name="email"
                            inputType="email"
                            onChangeHandle={this.onChangeHandle}
                        />
                    </form>
                </div>
                <button className="addMemberBtn"><i className="material-icons">add</i></button>
            </div>
        )
    }
}
