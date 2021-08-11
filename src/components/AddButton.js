import React, { Component } from 'react';

class AddButton extends Component {
    
    render() {
        const {clickHandler, thingToAdd, previewMode} = this.props;
        const style = previewMode ? {display: 'none'} : null;
        const theClassName = thingToAdd === 'Course' ? 'add-course-btn' : 'add-btn';
        return (
            <button className={theClassName} onClick={clickHandler} style={style}>
                + {thingToAdd}
            </button>
        )
    }
}

export default AddButton;
