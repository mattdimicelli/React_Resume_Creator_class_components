import React, { Component } from 'react'
import AddButton from '../AddButton'
import TitleBar from '../TitleBar';
import EducationForm from '../EducationForm';
import EducationDisplay from '../EducationDisplay';
import CourseForm from '../CourseForm';
import CourseDisplay from '../CourseDisplay';
import uniqid from 'uniqid';


class Education extends Component {
    
    state = {
        universities: {},
    };

    addUniversityHandler = (e) => {
        this.setState(prevState => {
            const copyOfUniversities = {...prevState.universities};
            const randomId = uniqid();
            copyOfUniversities[randomId] = {
                info: null,
                showEducationForm: true,
            };
            return {
                universities: copyOfUniversities,
            };
        }); 
    };


    render() {
        const {previewMode} = this.props;
        const educationForms = Object.entries(this.state.universities).map(pair => {
            const [id, pair2] = pair;
            const {info, showEducationForm} = pair2;
            return ( <EducationForm
            id={id}
            info={info}
            showEducationForm={showEducationForm}
            previewMode={previewMode}
            key={id}
            /> );
        })
       

        return (
            <div>
                <TitleBar title='Education' />
                <AddButton 
                clickHandler={this.addUniversityHandler}
                thingToAdd='University'
                 previewMode={previewMode} />
                <AddButton thingToAdd="Course" previewMode={previewMode} />
                {educationForms}
                <CourseForm previewMode={previewMode} />
                <EducationDisplay previewMode={previewMode} />
                <ul>
                    <CourseDisplay previewMode={previewMode} />
                </ul>
                

            </div>    
        )    
        }
}

export default Education
