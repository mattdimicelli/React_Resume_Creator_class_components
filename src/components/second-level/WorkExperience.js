import React, { Component } from 'react';
import TitleBar from '../TitleBar';
import AddButton from '../AddButton';
import WorkExperienceForm from '../WorkExperienceForm';
import WorkExperienceDisplay from '../WorkExperienceDisplay';
import uniqid from 'uniqid';

class WorkExperience extends Component {

    state = {
        workExperiences: {},
    }

    handleWorkExperienceChange = (e, id) => {
        const {name, value} = e.target;
        this.setState(prevState => {
            const workExperiencesCopy = {...prevState.workExperiences};
            const workExperience = workExperiencesCopy[id];
            const info = workExperience.info;
            info[name] = value;

            return {
                workExperiences: workExperiencesCopy,
            };
        });
    }

    addWorkExperienceHandler = (e) => {
        this.setState(prevState => {
            const copyOfWorkExperiences = {...prevState.workExperiences};
            const randomId = uniqid();
            copyOfWorkExperiences[randomId] = {
                info: {
                    companyName: '',
                    city: '',
                    from: '',
                    to: '',
                    role: '',
                    furtherAchievements: '',
                },
                showWorkExperienceForm: true,
            };
            return {
                workExperiences: copyOfWorkExperiences,
            };
        }); 
    };

    handleClickRemove = (e, id) => {
        e.preventDefault();
        this.setState(prevState => {
            const workExperiencesCopy = {...prevState.workExperiences};
            delete workExperiencesCopy[id];
            return {
                workExperiences: workExperiencesCopy,
            };
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {id} = e.target;
        const workExperienceInQuestion = this.state.workExperiences[id];
        if (workExperienceInQuestion.info.companyName === '' &&
        workExperienceInQuestion.info.city === '' &&
        workExperienceInQuestion.info.from === '' &&
        workExperienceInQuestion.info.to === '' &&
        workExperienceInQuestion.info.role === '' &&
        workExperienceInQuestion.info.furtherAchievements === '') {
            return;
        }
        this.setState(prevState => {
            const workExperiencesCopy = {...prevState.workExperiences};
            const workExperience = workExperiencesCopy[id];
            workExperience.showWorkExperienceForm = false;
            return {
                workExperiences: workExperiencesCopy,
            };
        });
    }

    handleClickEdit = (e) => {
        e.preventDefault();
        const {id} = e.target;
        this.setState(prevState => {
            const workExperiencesCopy = {...prevState.workExperiences};
            const workExperience = workExperiencesCopy[id];
            workExperience.showWorkExperienceForm = true;
        
            return {
                workExperiences: workExperiencesCopy,
            };
        });
    }

    render() {
        const {previewMode} = this.props;
        const workExperienceForms = Object.entries(this.state.workExperiences).map(pair => {
            const [id, pair2] = pair;
            const {info, showWorkExperienceForm} = pair2;
            return (
            <WorkExperienceForm
            id={id}
            info={info}
            showWorkExperienceForm={showWorkExperienceForm}
            previewMode={previewMode}
            key={id}
            handleChange = {this.handleWorkExperienceChange}
            handleCancel = {this.handleClickRemove}
            handleSubmit = {this.handleSubmit}
            /> );
        });

        const workExperienceDisplays = Object.entries(this.state.workExperiences).map(pair => {
            const [id, pair2] = pair;
            const {info, showWorkExperienceForm} = pair2;
            return (
                <WorkExperienceDisplay
                id={id}
                info={info}
                previewMode={previewMode}
                key={id}
                hideEditAndRemoveBtns={showWorkExperienceForm}
                handleClickRemove={this.handleClickRemove}
                handleClickEdit={this.handleClickEdit}
                />
            );
        });

        return (
            <div>
                <TitleBar title='Work Experience' />
                
                <div className='add-work-experience-btn-container'>
                    <AddButton
                    clickHandler={this.addWorkExperienceHandler}
                    thingToAdd='Work Experience'
                    previewMode={previewMode} />
                </div>

                {workExperienceForms}

                {workExperienceDisplays}
            </div>
        );
    }
}

export default WorkExperience
