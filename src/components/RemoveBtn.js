import React, { Component } from 'react'

class RemoveBtn extends Component {
    
    render() {
        const {id, handleClick, previewMode, hideEditAndRemoveBtns} = this.props;
        let style = previewMode ? {display: 'none'} : null;
        if (hideEditAndRemoveBtns) style = {display: 'none'};
        return (
            <button id={id}
             className='remove-button'
             style={style}
             onClick={(e)=> handleClick(e, id)}>
                Remove
            </button>
        )
    }
}

export default RemoveBtn
