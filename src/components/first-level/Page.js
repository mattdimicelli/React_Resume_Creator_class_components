import React, { Component } from 'react';
import PersonalInfo from '../second-level/PersonalInfo';
import Summary from '../second-level/Summary';
import Education from '../second-level/Education';

class Page extends Component {
    render() {
        return (
            <div className='page'>
                <PersonalInfo />
                <Summary />
                <Education />
            </div>
        )
    }
}

export default Page;
