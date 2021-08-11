import React, { Component } from 'react'
import EditBtn from './EditBtn'
import RemoveBtn from './RemoveBtn'

class EducationDisplay extends Component {
    render() {
        const {universityName, city, degree,
        from, to, furtherAchievements} = this.props.info;
        const {previewMode, id, handleClickRemove,
             hideEditAndRemoveBtns, 
             handleClickEditUniversity} = this.props;
        return (
            <div className='education-display'>
                <p>{universityName.toUpperCase()} {universityName && city ? "--" : ''} {city}</p>
                <p><strong>{degree}{degree ? ',' : ''} &nbsp;</strong>{from} {from && to ? '-' : ''} {to}</p>
                <p>{furtherAchievements}</p>
                <EditBtn
                hideEditAndRemoveBtns ={hideEditAndRemoveBtns}
                previewMode={previewMode}
                id={id}
                handleClick={handleClickEditUniversity} />
                <RemoveBtn
                hideEditAndRemoveBtns ={hideEditAndRemoveBtns}
                previewMode={previewMode}
                handleClick={handleClickRemove}
                id={id} />
            </div>
        )
    }
}

export default EducationDisplay
