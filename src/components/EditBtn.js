import React, { Component } from 'react'

class EditBtn extends Component {
    render() {
        const style = this.props.previewMode ? {display: 'none'} : null;
        const {handleBtnClick} = this.props;
        return (
            <button style={style} className='edit-btn' onClick={handleBtnClick}>
                Edit
            </button>
        )
    }
}

export default EditBtn
