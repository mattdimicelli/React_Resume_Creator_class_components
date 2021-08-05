import React, { Component } from 'react'
import TextInput from './TextInput';
import CancelBtn from './CancelBtn';
import SubmitBtn from './SubmitBtn';

class HeadlineForm extends Component {
    render() {
        return (
            <form>
                <TextInput placeholder='Headline' />
                <CancelBtn />
                <SubmitBtn />
            </form>
        )
    }
}

export default HeadlineForm
