import React, { Component } from 'react';
import EditBtn from './EditBtn';

class HeadlineDisplay extends Component {
    render() {
        const {previewMode, headline, 
            hideDisplayShowForm, handleClickEdit } = this.props;
        let style = hideDisplayShowForm ? {display: 'none'} : {};
        return (
            <div className='headline-display' style={style}>
                <em>
                    {headline}
                </em>
                <div className='headline-edit-btn-container'>
                    <EditBtn handleClick={handleClickEdit}
                    previewMode={previewMode} />
                </div>
            </div>
        )
    }
}

export default HeadlineDisplay
