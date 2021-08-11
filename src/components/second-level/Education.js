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
        courses: {},
    };

    addUniversityHandler = (e) => {
        this.setState(prevState => {
            const copyOfUniversities = {...prevState.universities};
            const randomId = uniqid();
            copyOfUniversities[randomId] = {
                info: {
                    universityName: '',
                    city: '',
                    from: '',
                    to: '',
                    degree: '',
                    furtherAchievements: '',
                },
                showEducationForm: true,
            };
            return {
                universities: copyOfUniversities,
            };
        }); 
    };

    addCourseHandler = (e) => {
        this.setState(prevState => {
            const copyOfCourses = {...prevState.courses};
            const randomId = uniqid();
            copyOfCourses[randomId] = {
                title: '',
                showCourseForm: true,
            };
            return {
                courses: copyOfCourses,
            };
        }); 
    };

    handleEducationChange = (e, id) => {
        const {name, value} = e.target;
        this.setState(prevState => {
            const universitiesCopy = {...prevState.universities};
            const university = universitiesCopy[id];
            const info = university.info;
            info[name] = value;

            return {
                universities: universitiesCopy,
            };
        });
    }

    handleCourseChange = (e, id) => {
        const {value} = e.target;
        this.setState(prevState => {
            const coursesCopy = {...prevState.courses};
            const course = coursesCopy[id];
            course.title = value;

            return {
                courses: coursesCopy,
            };
        });
    }

    handleClickRemove = (e, id) => {
        e.preventDefault();
        this.setState(prevState => {
            const universitiesCopy = {...prevState.universities};
            delete universitiesCopy[id];
            return {
                universities: universitiesCopy,
            };
        });
    }

    handleClickRemoveCourse = (e, id) => {
        e.preventDefault();
        this.setState(prevState => {
            const coursesCopy = {...prevState.courses};
            delete coursesCopy[id];
            return {
                courses: coursesCopy,
            };
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {id} = e.target;
        const universityInQuestion = this.state.universities[id];
        if (universityInQuestion.info.universityName === '' &&
         universityInQuestion.info.city === '' &&
          universityInQuestion.info.from === '' &&
           universityInQuestion.info.to === '' &&
            universityInQuestion.info.degree === '' &&
             universityInQuestion.info.furtherAchievements === '') {
            return;
        }
        this.setState(prevState => {
            const universitiesCopy = {...prevState.universities};
            const university = universitiesCopy[id];
            university.showEducationForm = false;
            return {
                universities: universitiesCopy,
            };
        });
    }

    handleCourseSubmit = (e) => {
        e.preventDefault();
        const {id} = e.target;
        const courseInQuestion = this.state.courses[id];
        if (courseInQuestion.title === '') {
            return;
        }
        this.setState(prevState => {
            const coursesCopy = {...prevState.courses};
            const course = coursesCopy[id];
            course.showCourseForm = false;
            return {
                courses: coursesCopy,
            };
        });
    }

    handleClickEditUniversity = (e) => {
        e.preventDefault();
        const {id} = e.target;
        this.setState(prevState => {
            const universitiesCopy = {...prevState.universities};
            const university = universitiesCopy[id];
            university.showEducationForm = true;
        
            return {
                universities: universitiesCopy,
            };
        });
    }

    handleClickEditCourse = (e) => {
        e.preventDefault();
        const {id} = e.target;
        this.setState(prevState => {
            const coursesCopy = {...prevState.courses};
            const course = coursesCopy[id];
            course.showCourseForm = true;
        
            return {
                courses: coursesCopy,
            };
        });
    }

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
            handleChange = {this.handleEducationChange}
            handleCancel = {this.handleClickRemove}
            handleSubmit = {this.handleSubmit}
            /> );
        });

        const educationDisplays = Object.entries(this.state.universities).map(pair => {
            const [id, pair2] = pair;
            const {info, showEducationForm} = pair2;
            return (
                <EducationDisplay
                id={id}
                info={info}
                previewMode={previewMode}
                key={id}
                hideEditAndRemoveBtns={showEducationForm}
                handleClickRemove={this.handleClickRemove}
                handleClickEditUniversity={this.handleClickEditUniversity}
                />
            );
        });

        const courseDisplays = Object.entries(this.state.courses).map(pair => {
            const [id, pair2] = pair;
            const {title, showCourseForm} = pair2;
            return (
                <CourseDisplay
                id={id}
                title={title}
                previewMode={previewMode}
                key={id}
                hideEditAndRemoveBtns={showCourseForm}
                handleClickRemove={this.handleClickRemoveCourse}
                handleClickEditCourse={this.handleClickEditCourse}
                />
            );
        });
        
       
        const courseForms = Object.entries(this.state.courses).map(pair => {
            const [id, pair2] = pair;
            const {title, showCourseForm} = pair2;
            return ( 
            <CourseForm
            id={id}
            title={title}
            showCourseForm={showCourseForm}
            previewMode={previewMode}
            key={id}
            handleChange = {this.handleCourseChange}
            handleRemove = {this.handleClickRemoveCourse}
            handleSubmit = {this.handleCourseSubmit}
            />
            );
        });
    

        return (
            <div>
                <TitleBar title='Education' />
                <div className='education-btns-container'>
                    <AddButton 
                    clickHandler={this.addUniversityHandler}
                    thingToAdd='University'
                     previewMode={previewMode} />

                 <AddButton
                    thingToAdd="Course"
                    previewMode={previewMode}
                    clickHandler={this.addCourseHandler} />
                </div>
                {educationForms}

                {courseForms}

                {educationDisplays}

                <ul>
                    {courseDisplays}
                </ul>
                

            </div>    
        )    
        }
}

export default Education
