import React, { Component } from 'react'
import EditBtn from './EditBtn'

class PersonalInfoDisplay extends Component {
    render() {
        return (
            <div>
                <div className='personal-info-display'>
                    <h2>Matt Di Micelli</h2>
                    <p>40 Woodbury Way, Syosset, NY 11791-2718</p>
                    <div className='contact-info'>
                        <span>516-382-2699</span>
                        <span>matthewdimicelli@gmail.com</span>
                        <span>linkedin.com/in/matthewdimicelli</span>
                        <span>github.com/mattdimicelli</span>
                    </div>
                    <hr />
                </div>
                <EditBtn />
            </div>
        )
    }
}

export default PersonalInfoDisplay;
