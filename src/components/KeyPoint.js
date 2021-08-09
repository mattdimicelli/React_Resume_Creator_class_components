import React, { Component } from 'react';
import EditBtn from './EditBtn';
import RemoveBtn from './RemoveBtn';

class KeyPoint extends Component {
    render() {
        const {previewMode, text, id, handleClickEdit,
        handleClickRemove} = this.props;
        if (text === '') return null;
        return (
            <li>
                 {text}
                <EditBtn
                handleClick={(e) => handleClickEdit(e, id, text)}
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
