import React, { Component } from 'react'
import EditBtn from './EditBtn'
import RemoveBtn from './RemoveBtn'

class CourseDisplay extends Component {
    render() {
        return (
            <li>
                Java Programming and Data Structures 
                <EditBtn />
                <RemoveBtn />
            </li>
        )
    }
}

export default CourseDisplay
