import React, { Component } from 'react'

class SubmitBtn extends Component {
    render() {
       
        const style = this.props.previewMode ? {display: 'none'} : null;
        return (
            <button
             style={style}
            className='submit-btn'
            >
                Submit
            </button>
        )
    }
}

export default SubmitBtn
