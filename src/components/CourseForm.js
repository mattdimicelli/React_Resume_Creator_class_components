import React, { Component } from 'react'
import SubmitBtn from './SubmitBtn'
import TextInput from './TextInput';

export class CourseForm extends Component {
    render() {
        const { previewMode, id, title, showCourseForm,
            handleChange, handleSubmit } = this.props;
        let style =  showCourseForm ?  {} : {display: 'none'}; 
        if (previewMode) style = {display: 'none'};
        
        return (
            <form
            onSubmit={handleSubmit}
            style={style}
            id={id}
            className='course-form'>
                <TextInput
                 handleChange={handleChange}
                 value={title}
                 id={id} />
                <SubmitBtn />
            </form>
        );
    }
}

export default CourseForm
