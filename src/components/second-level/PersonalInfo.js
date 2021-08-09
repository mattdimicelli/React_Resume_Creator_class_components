import React from 'react';
import PersonalInfoDisplay from '../PersonalInfoDisplay';
import PersonalInfoForm from '../PersonalInfoForm';



export default class PersonalInfo extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        address: '',
        phone: '',
        email: '',
        linkedIn: '',
        portfolio: '',
        hideDisplayShowForm: true,
    };

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value,
        });
        
        
    };

    handleBtnClick = (e) => {
        e.preventDefault();
        if (e.target.name === 'form') {
            this.setState({hideDisplayShowForm: false});
        } else {
            this.setState({hideDisplayShowForm: true});
        }
    };

    render() {
        const {previewMode} = this.props;
        return (
            <div>
                <PersonalInfoForm handleSubmit={this.handleBtnClick} handleChange={this.handleChange} data={this.state} previewMode={previewMode} />
                <PersonalInfoDisplay handleBtnClick={this.handleBtnClick} data={this.state} previewMode={previewMode} />
            </div>
        );
    }
}