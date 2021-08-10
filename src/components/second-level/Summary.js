import React, { Component } from 'react';
import TitleBar from '../TitleBar';
import AddButton from '../AddButton';
import KeyPointsDisplay from '../KeyPointsDisplay';
import KeyPointsForm from '../KeyPointsForm';
import HeadlineDisplay from '../HeadlineDisplay';
import HeadlineForm from '../HeadlineForm';
import uniqid from 'uniqid';


class Summary extends Component {
    state = {
        headline: '',
        hideDisplayShowForm: true,
        keyPoints: {},
    };

    handleChange = (e) => {
        this.setState({headline: e.target.value})
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({hideDisplayShowForm: false})
    };

    handleClickEdit = (e) => {
        e.preventDefault();
        this.setState({hideDisplayShowForm: true})
    }

    addKeyPointBtnClickHandler = (e) => {
        e.preventDefault();
        this.setState(prevState => {
            const keyPointsCopy = {...prevState.keyPoints};
            const randomId = uniqid();
            keyPointsCopy[randomId] = {
                text: '',
                showKeyPointForm: true,
            };
            return {
                keyPoints: keyPointsCopy,
            };
        })
    };

    handleSubmitKeyPointForm = (e, keyPointText, id) => {
            e.preventDefault();
            if (keyPointText === '') return;
            this.setState(prevState => {
                const keyPointsCopy = {...prevState.keyPoints};
                keyPointsCopy[id] = {
                    text: keyPointText,
                    showKeyPointForm: false,
                }
                return {
                    keyPoints: keyPointsCopy,
                };
            });
    };

    handleClickRemove = (e, id) => {
        e.preventDefault();
        this.setState(prevState => {
            const keyPointsCopy = {...prevState.keyPoints};
            delete keyPointsCopy[id];
            return {
                keyPoints: keyPointsCopy,
            };
        });
    }

    handleClickEditKeyPoint = (e, id, text) => {
        e.preventDefault();
        this.setState(prevState => {
            const copyOfKeyPoints = {...prevState.keyPoints};
            copyOfKeyPoints[id] = {
                text: text,
                showKeyPointForm: true,
            };
            return {
                keyPoints: copyOfKeyPoints,
            };
        });
    }

        
    

    render() {
        const {headline, hideDisplayShowForm, keyPoints} = this.state;
        const {previewMode} = this.props;
        const keyPointForms = Object.entries(this.state.keyPoints).map(idKeyPointObjPair => {
            const [id, keyPointObj] = idKeyPointObjPair;
            const {showKeyPointForm} = keyPointObj;
            return (
            <KeyPointsForm
                id={id}
                key={id}
                previewMode={previewMode}
                showKeyPointForm={showKeyPointForm}
                handleSubmitKeyPointForm={this.handleSubmitKeyPointForm}
                handleClickCancel={this.handleClickRemove}
                 />
            );
        })
        return (
            <div>
                <TitleBar title='Summary' />
                <HeadlineForm
                 headline={headline}
                previewMode={previewMode}
                 handleChange={this.handleChange}
                 handleSubmit={this.handleSubmit}
                 hideDisplayShowForm={hideDisplayShowForm}
                />
                <HeadlineDisplay
                headline={headline}
                previewMode={previewMode}
                hideDisplayShowForm={hideDisplayShowForm}
                handleClickEdit={this.handleClickEdit}
                 />
                <AddButton
                thingToAdd='Key Point'
                previewMode={previewMode}
                clickHandler={this.addKeyPointBtnClickHandler}  />

                {keyPointForms}
     
                <KeyPointsDisplay
                keyPoints={keyPoints}
                handleClickEdit={this.handleClickEditKeyPoint}
                handleClickRemove={this.handleClickRemove}
                previewMode={previewMode} />
            </div>
        );
    }
}

export default Summary;
