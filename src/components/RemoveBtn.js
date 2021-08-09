import React, { Component } from 'react'

class RemoveBtn extends Component {
    
    render() {
        const {id, handleClick} = this.props;
        const style = this.props.preview ? {display: 'none'} : null;
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
