import React, { Component } from 'react';
import KeyPoint from './KeyPoint';


class KeyPointsDisplay extends Component {
    render() {
        const {previewMode, keyPoints, handleClickEdit, 
        handleClickRemove} = this.props;
        const keyPointList = Object.entries(keyPoints).map(pair => {
            const [id, keyPointObj ] = pair;
            const {text} = keyPointObj;
            return <KeyPoint handleClickEdit={handleClickEdit}
            handleClickRemove={handleClickRemove}
             key={id} id={id} text={text} previewMode={previewMode} />
        })
        return (
            <ul className='key-points-displays'>
                {keyPointList}
            </ul>
        );
    }
}

export default KeyPointsDisplay;
