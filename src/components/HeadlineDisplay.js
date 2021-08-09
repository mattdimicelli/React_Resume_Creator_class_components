import React, { Component } from 'react';
import EditBtn from './EditBtn';

class HeadlineDisplay extends Component {
    render() {
        const {previewMode, headline, 
            hideDisplayShowForm, handleClickEdit } = this.props;
        let style = hideDisplayShowForm ? {display: 'none'} : {};
        return (
            <div style={style}>
                <em>
                    {headline}
                </em>
                <EditBtn handleBtnClick={handleClickEdit}
                 previewMode={previewMode} />
            </div>
        )
    }
}

export default HeadlineDisplay
