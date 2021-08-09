import React, { Component } from 'react'
import TextInput from './TextInput';
import TextArea from './TextArea';
import CancelBtn from './CancelBtn';
import SubmitBtn from './SubmitBtn';

class EducationForm extends Component {
    
    render() {
        const {previewMode} = this.props;
        const style = previewMode ? {display: 'none'} : {};
        return (
            <form style={style}>
                <TextInput placeholder="University or School Name" />
                <TextInput placeholder="City" />
                <TextInput placeholder="From" />
                <TextInput placeholder="To" />
                <TextInput placeholder="Degree" />
                <TextArea placeholder="Further Descriptions or Achievements" />
                <CancelBtn />
                <SubmitBtn />
            </form>
        )
    }
}

export default EducationForm
