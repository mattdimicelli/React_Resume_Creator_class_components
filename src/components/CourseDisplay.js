import React, { Component } from 'react'
import EditBtn from './EditBtn'
import RemoveBtn from './RemoveBtn'

class CourseDisplay extends Component {
    render() {
        const {previewMode} = this.props;
        return (
            <li>
                Java Programming and Data Structures 
                <EditBtn previewMode={previewMode} />
                <RemoveBtn previewMode={previewMode}/>
            </li>
        )
    }
}

export default CourseDisplay
