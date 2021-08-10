import React, { Component } from 'react';
import SubmitBtn from './SubmitBtn';
import TextInput from './TextInput';
import CancelBtn from './CancelBtn';


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
        const {handleSubmitKeyPointForm, previewMode, showKeyPointForm,
             id, handleClickCancel} = this.props;
        const {keyPointText} = this.state;
        const style = showKeyPointForm ? {} : {display: 'none'};
        return (
            <form style={style} onSubmit={(e) => handleSubmitKeyPointForm(e, this.state.keyPointText, id)}>
                <TextInput
                 value={keyPointText}
                 placeholder='Key Point'
                 previewMode={previewMode}
                 handleChange={this.handleChange}
                  />
                <CancelBtn handleClickCancel={(e) => handleClickCancel(e, id)} />
                <SubmitBtn
                 previewMode={previewMode}  />
            </form>
        )
    }
}

export default KeyPointsForm
