import React, { Component } from 'react'

class TextArea extends Component {
    
    autoResize = (e) => {
        e.target.style.height = 'auto';
        e.target.style.height = e.target.scrollHeight + 'px';
    }

    render() {
        const {handleChange, id, value, name} = this.props;
        return (
            <textarea
            value={value}
            placeholder={this.props.placeholder}
            onChange={(e) => handleChange(e, id)}
            onInput={this.autoResize}
            name={name}
            >
                
            </textarea>
        )
    }
}

export default TextArea
