import React, { Component } from 'react'

class CancelBtn extends Component {
    render() {
        const {handleClickCancel} = this.props;
        const style = this.props.preview ? {display: 'none'} : null;
        return (
            <button onClick={handleClickCancel} className='cancel-btn' style={style}>
                Remove
            </button>
        )
    }
}

export default CancelBtn
