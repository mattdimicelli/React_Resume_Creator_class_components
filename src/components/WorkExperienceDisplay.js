import React, { Component } from 'react'
import EditBtn from './EditBtn'
import RemoveBtn from './RemoveBtn'

export default class WorkExperienceDisplay extends Component {
    render() {

        const {companyName, city, role,
            from, to, furtherAchievements} = this.props.info;

        const {previewMode, id, handleClickRemove,
        hideEditAndRemoveBtns, handleClickEdit}
         = this.props;

        return (
            <div>
                <h3>{companyName} {companyName && city ? '--' : ''} {city}</h3>
                <strong>{role}</strong>
                <p>{from} {from && to ? '-' : ''} {to}</p>
                <p>{furtherAchievements}</p>

                <EditBtn
                previewMode={previewMode}
                hideEditAndRemoveBtns ={hideEditAndRemoveBtns}
                id={id}
                handleClick={handleClickEdit}
                 />

                <RemoveBtn 
                hideEditAndRemoveBtns ={hideEditAndRemoveBtns}
                previewMode={previewMode}
                handleClick={handleClickRemove}
                id={id} />
                
            </div>
        )
    }
}

