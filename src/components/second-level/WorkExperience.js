import React, { Component } from 'react';
import TitleBar from '../TitleBar';
import AddButton from '../AddButton';
import WorkExperienceForm from '../WorkExperienceForm';
import WorkExperienceDisplay from '../WorkExperienceDisplay';

class WorkExperience extends Component {
    render() {
        const {preview} = this.props;

        return preview ?
        (
            <div>
                <TitleBar title='Work Experience' />
                <WorkExperienceDisplay preview={preview} />
            </div>
        ) :
        (
            <div>
                <TitleBar title='Work Experience' />
                <AddButton thingToAdd='Work Experience' />
                <WorkExperienceForm />
                <WorkExperienceDisplay />
            </div>
        )
    }
}

export default WorkExperience
