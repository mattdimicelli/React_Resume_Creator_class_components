import React, { Component } from 'react'
import EditBtn from './EditBtn'
import RemoveBtn from './RemoveBtn'

export default class WorkExperienceDisplay extends Component {
    render() {
        const {preview} = this.props;
        return (
            <div>
                <h3>Bethesda Hospital East -- Boynton Beach, FL</h3>
                <strong>Registered Nurse, Quality Department</strong>
                <p>2020 - 2020</p>
                <p>Text area text.  I have no idea wtf I did here.</p>
                <EditBtn preview={preview} />
                <RemoveBtn preview={preview} />
            </div>
        )
    }
}

