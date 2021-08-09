import React, { Component } from 'react'
import EditBtn from './EditBtn'
import RemoveBtn from './RemoveBtn'

class CourseDisplay extends Component {
    render() {
        const {preview} = this.props;
        return (
            <li>
                Java Programming and Data Structures 
                <EditBtn preview={preview} />
                <RemoveBtn preview={preview}/>
            </li>
        )
    }
}

export default CourseDisplay
