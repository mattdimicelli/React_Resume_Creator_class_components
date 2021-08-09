import React, { Component } from 'react';

class AddButton extends Component {
    
    render() {
        const {clickHandler, thingToAdd} = this.props;
        const style = this.props.previewMode ? {display: 'none'} : null;
        return (
            <button onClick={clickHandler} style={style}>
                + {thingToAdd}
            </button>
        )
    }
}

export default AddButton;
