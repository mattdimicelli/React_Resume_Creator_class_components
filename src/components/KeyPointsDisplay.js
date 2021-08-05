import React, { Component } from 'react';
import EditBtn from './EditBtn';
import RemoveBtn from './RemoveBtn';


class KeyPointsDisplay extends Component {
    render() {
        return (
            <ul>
                <li>Blah blah
                    <EditBtn />
                    <RemoveBtn />
                </li>
                <li>Boo boo
                <EditBtn />
                <RemoveBtn />
                </li>
                <li>Meshiggles
                <EditBtn />
                <RemoveBtn />
                </li>
            </ul>
        );
    }
}

export default KeyPointsDisplay;
