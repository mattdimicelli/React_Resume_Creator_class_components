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
        showKeyPointForm: false,
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
        this.setState({showKeyPointForm: true})
    };

    handleSubmitKeyPointForm = (e, keyPointText) => {
            e.preventDefault();
            const randomID = uniqid();
            this.setState(prevState => {
                const keyPointsCopy = {...prevState.keyPoints};
                keyPointsCopy[randomID] = keyPointText;
                return {
                    keyPoints: keyPointsCopy,
                    showKeyPointForm: false,
                };
            }, () => console.log(this.state));
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

    handleClickEditKeyPoint = (e, id) => {
        e.preventDefault();
        //finish later
    }

        
    

    render() {
        const {headline, hideDisplayShowForm, keyPoints, showKeyPointForm} = this.state;
        const {previewMode} = this.props;
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
                <KeyPointsForm
                previewMode={previewMode}
                showKeyPointForm={showKeyPointForm}
                handleSubmitKeyPointForm={this.handleSubmitKeyPointForm}
                 />
                <KeyPointsDisplay
                keyPoints={keyPoints}
                handleClickEdit={this.handleClickEditKeyPoint}
                handleClickRemove={this.handleClickRemove} />
            </div>
        );
    }
}

export default Summary;
