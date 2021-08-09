import React, { Component } from 'react'
import EditBtn from './EditBtn'

class PersonalInfoDisplay extends Component {
    render() {
        const {previewMode, handleBtnClick} = this.props;
        const {firstName, lastName, address, phone, email, linkedIn,
        portfolio, hideDisplayShowForm} = this.props.data;

        const style = hideDisplayShowForm ? {display: 'none'} : {};

        return (
            <div style={style}>
                <div className='personal-info-display'>
                    <h2>{firstName} {lastName}</h2>
                    <p>{address}</p>
                    <div className='contact-info'>
                        <span>{phone}</span>
                        <span>{email}</span>
                        <span>{linkedIn}</span>
                        <span>{portfolio}</span>
                    </div>
                    <hr />
                </div>
                <EditBtn handleBtnClick={handleBtnClick} previewMode={previewMode} />
            </div>
        )
    }
}

export default PersonalInfoDisplay;
