import React, { Component } from 'react'

class EditBtn extends Component {
    render() {
        const {handleClick, previewMode} = this.props;
        const style = previewMode ? {display: 'none'} : null;
        return (
            <button style={style} className='edit-btn' onClick={handleClick}>
                Edit
            </button>
        )
    }
}

export default EditBtn
