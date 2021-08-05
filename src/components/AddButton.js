import React, { Component } from 'react';

class AddButton extends Component {
    render() {
        return (
            <button>
                + {this.props.thingToAdd}
            </button>
        )
    }
}

export default AddButton;
