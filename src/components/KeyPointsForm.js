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
        const {handleSubmitKeyPointForm, previewMode, showKeyPointForm,
             id, } = this.props;
        const {keyPointText} = this.state;
        const style = showKeyPointForm ? {} : {display: 'none'};
        return (
            <form className='key-point-form' style={style} onSubmit={(e) => handleSubmitKeyPointForm(e, this.state.keyPointText, id)}>
                <div className='kp-input-and-btn-container'>
                    <TextInput
                     value={keyPointText}
                     placeholder='Key Point'
                     previewMode={previewMode}
                     handleChange={this.handleChange}
                      />
                    <div className='kp-form-btns'>
                        <SubmitBtn
                        previewMode={previewMode}  />
                    </div>
                </div>
            </form>
        )
    }
}

export default KeyPointsForm
