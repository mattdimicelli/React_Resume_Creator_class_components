import React, { Component } from 'react'

class CancelBtn extends Component {
    render() {
        const style = this.props.preview ? {display: 'none'} : null;
        return (
            <button className='cancel-btn' style={style}>
                Cancel
            </button>
        )
    }
}

export default CancelBtn
