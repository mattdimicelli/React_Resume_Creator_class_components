import React from 'react';

export default class TextInput extends React.Component {

    render() {
        const {handleChange, name, placeholder,
            previewMode, value} = this.props;

        const style = previewMode ? {display: 'none'} : {};
        return(
            <input
             style={style}
             value={value}
            name={name}
            onChange={handleChange}
            type="text"
            placeholder={placeholder}
            className='text-input'
             />
        )
    }
}