import React, { Component } from 'react'

class EditBtn extends Component {
    render() {
        const {handleClick, previewMode, hideEditAndRemoveBtns, id} = this.props;
        let style = previewMode ? {display: 'none'} : null;
        if (hideEditAndRemoveBtns) style = {display: 'none'};
        return (
            <button id={id} style={style} className='edit-btn' onClick={handleClick}>
                Edit
            </button>
        )
    }
}

export default EditBtn
