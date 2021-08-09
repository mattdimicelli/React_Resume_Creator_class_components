import React, { Component } from 'react';
import KeyPoint from './KeyPoint';


class KeyPointsDisplay extends Component {
    render() {
        const {previewMode, keyPoints, handleClickEdit, 
        handleClickRemove} = this.props;
        const keyPointList = Object.entries(keyPoints).map(IDTextPair => {
            const [id, text] = IDTextPair;
            return <KeyPoint handleClickEdit={handleClickEdit}
            handleClickRemove={handleClickRemove}
             key={id} id={id} text={text} previewMode={previewMode} />
        })
        return (
            <ul>
                {keyPointList}
            </ul>
        );
    }
}

export default KeyPointsDisplay;
