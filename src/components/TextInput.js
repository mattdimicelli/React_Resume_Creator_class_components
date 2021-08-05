import React from 'react';

export default class TextInput extends React.Component {

    render() {
        return(
            <input type="text" placeholder={this.props.placeholder} className='text-input' />
        )
    }
}