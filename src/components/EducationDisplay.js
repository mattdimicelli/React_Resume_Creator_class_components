import React, { Component } from 'react'
import EditBtn from './EditBtn'
import RemoveBtn from './RemoveBtn'

class EducationDisplay extends Component {
    render() {
        return (
            <div>
                <h3>State University of New York at Geneseo -- Geneseo, NY</h3>
                <strong>Bachelor's of Arts in Spanish</strong>
                <p>2007 - 2011</p>
                <p>Studied abroad in Cordoba, Argentina.  Text area text</p>
                <EditBtn />
                <RemoveBtn />
            </div>
        )
    }
}

export default EducationDisplay
