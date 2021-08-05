import React, { Component } from 'react'
import CancelBtn from './CancelBtn'
import SubmitBtn from './SubmitBtn'

export class CourseForm extends Component {
    render() {
        return (
            <form className='course-form'>
                <input type='text' />
                <CancelBtn />
                <SubmitBtn />
            </form>
            );
    }
}

export default CourseForm
