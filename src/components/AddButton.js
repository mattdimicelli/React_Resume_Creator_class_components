import React, { Component } from 'react';

class AddButton extends Component {
    
    render() {
        const {clickHandler, thingToAdd, previewMode} = this.props;
        const style = previewMode ? {display: 'none'} : null;
        return (
            <button onClick={clickHandler} style={style}>
                + {thingToAdd}
            </button>
        )
    }
}

export default AddButton;
