import React, { Component } from 'react'

class RemoveBtn extends Component {
    
    render() {
        const {id, handleClick, previewMode} = this.props;
        const style = previewMode ? {display: 'none'} : null;
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
