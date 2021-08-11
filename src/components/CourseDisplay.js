import React, { Component } from 'react'
import EditBtn from './EditBtn'
import RemoveBtn from './RemoveBtn'

class CourseDisplay extends Component {
    render() {
        const {previewMode, title, id, hideEditAndRemoveBtns,
        handleClickRemove, handleClickEditCourse} = this.props;

        if (title) {
            return (
                <li>
                    {title}
                    <div>
                        <EditBtn
                        previewMode={previewMode}
                        handleClick={handleClickEditCourse}
                        hideEditAndRemoveBtns={hideEditAndRemoveBtns}
                        id={id} />

                        <RemoveBtn
                        previewMode={previewMode}
                        hideEditAndRemoveBtns={hideEditAndRemoveBtns}
                        id={id}
                        handleClick={handleClickRemove}
                        />
                    </div>
                </li>
            )
    } else {return null;}
    }
}

export default CourseDisplay
