import React, { Component } from 'react';
import TextInput from './TextInput';
import TextArea from './TextArea';
import CancelBtn from './CancelBtn';
import SubmitBtn from './SubmitBtn';



class WorkExperienceForm extends Component {
    render() {
        return (
            <div>
                <TextInput placeholder="Company Name" />
                <TextInput placeholder="City" />
                <TextInput placeholder="From" />
                <TextInput placeholder="To" />
                <TextInput placeholder="Role" />
                <TextArea placeholder="Further Descriptions or Achievements" />
                <CancelBtn />
                <SubmitBtn />
            </div>
        )
    }
}

export default WorkExperienceForm;
