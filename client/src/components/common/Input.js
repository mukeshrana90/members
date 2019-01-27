import React, { Component } from 'react'

export default class Input extends Component {
    // Label  
    hasLabel() {
        if (this.props.label) {
            return (<label>{this.props.label}</label>)
        }
    }
    // Placeholder
    hasPlaceholder() {
        if (this.props.placeholder) {
            return (this.props.placeholder)
        }
        else {
            return ("Please Enter value")
        }
    }
    // Extra Classes
    hasExtraClass() {
        if (this.props.extraClass) {
            return (this.props.extraClass)
        }
    }
    // Required
    isRequired() {
        if(this.props.required) {
            return (this.props.required)
        }
    }
    render() {
        return (
            <div className="input-group">
                {this.hasLabel()}
                <input
                    type={this.props.inputType}
                    required={this.props.required}
                    className={`form-control ${this.hasExtraClass()}`}
                    name={this.props.name}
                    placeholder={this.hasPlaceholder()}
                    onChange={this.props.onChangeHandle}
                />
            </div>
        )
    }
}
