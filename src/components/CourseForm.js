import React, { Component } from 'react'
import CancelBtn from './CancelBtn'
import SubmitBtn from './SubmitBtn'

export class CourseForm extends Component {
    render() {
        const {previewMode} = this.props;
        const style = previewMode ? {display: 'none'} : {};
        return (
            <form style={style} className='course-form'>
                <input type='text' />
                <CancelBtn />
                <SubmitBtn />
            </form>
            );
    }
}

export default CourseForm
