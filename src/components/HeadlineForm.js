import React, { Component } from 'react'
import TextInput from './TextInput';
import SubmitBtn from './SubmitBtn';

class HeadlineForm extends Component {
    render() {
        const {previewMode, headline, handleChange,
             handleSubmit, hideDisplayShowForm } = this.props;
        let style = hideDisplayShowForm ? {} : {display: 'none'};
        return (
            <form style={style} onSubmit={handleSubmit}>
                <TextInput value={headline} 
                previewMode={previewMode}
                placeholder='Headline'
                handleChange={handleChange}
                />
                <SubmitBtn previewMode={previewMode} />
            </form>
        )
    }
}

export default HeadlineForm
