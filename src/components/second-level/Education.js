import React, { Component } from 'react'
import AddButton from '../AddButton'
import TitleBar from '../TitleBar';
import EducationForm from '../EducationForm';
import EducationDisplay from '../EducationDisplay';
import CourseForm from '../CourseForm';
import CourseDisplay from '../CourseDisplay';


class Education extends Component {
    render() {
        return (
            <div>
                <TitleBar title='Education' />
                <AddButton thingToAdd='University' />
                <AddButton thingToAdd="Course" />
                <EducationForm />
                <CourseForm />
                <EducationDisplay />
                <ul>
                    <CourseDisplay />
                </ul>
                

            </div>    
        );    
        }
}

export default Education
