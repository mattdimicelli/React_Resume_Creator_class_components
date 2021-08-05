import React, { Component } from 'react';
import CancelBtn from './CancelBtn';
import SubmitBtn from './SubmitBtn';
import TextInput from './TextInput';

class KeyPointsForm extends Component {
    render() {
        return (
            <form>
                <TextInput placeholder='Key Point' />
                <CancelBtn />
                <SubmitBtn />
            </form>
        )
    }
}

export default KeyPointsForm
