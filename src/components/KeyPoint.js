import React, { Component } from 'react';
import EditBtn from './EditBtn';
import RemoveBtn from './RemoveBtn';

class KeyPoint extends Component {
    render() {
        const {previewMode, text, id, handleClickEdit,
        handleClickRemove} = this.props;
        return (
            <li>
                 {text}
                <EditBtn
                handleClick={handleClickEdit}
                 previewMode={previewMode}
                  />

                <RemoveBtn
                    id={id}
                 handleClick={handleClickRemove}
                  previewMode={previewMode}
                   />
            </li>
        )
    }
}

export default KeyPoint
