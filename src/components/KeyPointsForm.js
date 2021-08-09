import React, { Component } from 'react';
import SubmitBtn from './SubmitBtn';
import TextInput from './TextInput';


class KeyPointsForm extends Component {

    state = {
        keyPointText: '',
    }

    handleChange = (e) => {
        this.setState({
            keyPointText: e.target.value,
        });
    }

    render() {
        const {handleSubmitKeyPointForm, previewMode, showKeyPointForm} = this.props;
        const {keyPointText} = this.state;
        const style = showKeyPointForm ? {} : {display: 'none'};
        return (
            <form style={style} onSubmit={(e) => handleSubmitKeyPointForm(e, this.state.keyPointText)}>
                <TextInput
                 value={keyPointText}
                 placeholder='Key Point'
                 previewMode={previewMode}
                 handleChange={this.handleChange}
                  />
                <SubmitBtn
                 previewMode={previewMode}  />
            </form>
        )
    }
}

export default KeyPointsForm
