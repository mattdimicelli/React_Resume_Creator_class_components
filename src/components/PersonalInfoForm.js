import React, { Component } from 'react';
import TextInput from './TextInput';
import SubmitBtn from './SubmitBtn';


class PersonalInfoForm extends Component {
    render() {
        return (
            <form>
                <TextInput placeholder='First Name' />
                <TextInput placeholder='Last Name' />
                <TextInput placeholder='Address' />
                <TextInput placeholder='Phone' />
                <TextInput placeholder='Email' />
                <TextInput placeholder='LinkedIn URL' />
                <TextInput placeholder='Portfolio URL' />
                <SubmitBtn />
            </form>
        )
    }
}

export default PersonalInfoForm
