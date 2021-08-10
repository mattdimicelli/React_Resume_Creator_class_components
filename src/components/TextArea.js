import React, { Component } from 'react'

class TextArea extends Component {
    render() {
        const {handleChange, id, value, name} = this.props;
        return (
            <textarea
            value={value}
            placeholder={this.props.placeholder}
            onChange={(e) => handleChange(e, id)}
            name={name}
            >
                
            </textarea>
        )
    }
}

export default TextArea
