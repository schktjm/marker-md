import React from 'react';

const InputArea = props => {
    return (
        <>
            <textarea onChange={props.handleChange} value={props.value} style={props.style}/>
        </>
    )
};

export default InputArea;
