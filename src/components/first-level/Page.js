import React, { Component } from 'react';
import PersonalInfo from '../second-level/PersonalInfo';
import Summary from '../second-level/Summary';
import Education from '../second-level/Education';
import WorkExperience from '../second-level/WorkExperience';

class Page extends Component {
    render() {
        const {previewMode} = this.props;
        return (
            <div className='page'>
                <PersonalInfo previewMode={previewMode} />
                <Summary previewMode={previewMode} />
                <Education previewMode={previewMode} />
                <WorkExperience previewMode={previewMode} />
            </div>
        )
    }
}

export default Page;
