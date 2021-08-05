import React, { Component } from 'react';
import TitleBar from '../TitleBar';
import AddButton from '../AddButton';
import KeyPointsDisplay from '../KeyPointsDisplay';
import KeyPointsForm from '../KeyPointsForm';
import HeadlineDisplay from '../HeadlineDisplay';
import HeadlineForm from '../HeadlineForm';


class Summary extends Component {
    render() {
        return (
            <div>
                <TitleBar title='Summary' />
                <HeadlineForm />
                <HeadlineDisplay />
                <AddButton thingToAdd='Key Point' />
                <KeyPointsForm />
                <KeyPointsDisplay />

            </div>
        )
    }
}

export default Summary;
