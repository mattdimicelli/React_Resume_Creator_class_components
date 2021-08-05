import React, { Component } from 'react';

class TitleBar extends Component {
    render() {
        return (
            <div className='title-bar'>
                {this.props.title}
            </div>
        )
    }
}

export default TitleBar;
    