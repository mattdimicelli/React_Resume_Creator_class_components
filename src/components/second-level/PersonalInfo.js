import React from 'react';
import PersonalInfoDisplay from '../PersonalInfoDisplay';
import PersonalInfoForm from '../PersonalInfoForm';



export default class PersonalInfo extends React.Component {
    render() {
        return(
            <div>
                <PersonalInfoForm />
                <PersonalInfoDisplay />
            </div>
        );
    }
}