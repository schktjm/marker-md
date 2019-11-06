import React, {useState, useEffect} from 'react'
import InputArea from './Textarea';
import Preview from './Preview';

const containerStyle = {
    display: "flex",
    justifyContent: "space-around"
};

const boxStyle = {
    minHeight: '100vh',
    width: "50vw",
    padding: "20px"
};

const inputAreaStyle = {
    border: "none",
    borderRight: "1px solid rgba(0,0,0,0.1)",
    fontSize: "20px",
    outline: "none"
};

const Editor = () => {
    const [text, setText] = useState('# This is a header\n\nAnd this is a paragraph\n\n```javascript=\n a=1\n```\n\n > aaa');

    const handleChange = e => {
        setText(e.target.value);
        localStorage.setItem('text', e.target.value);
    };
    useEffect(() => {
        setText(localStorage.getItem('text') || '');
    }, []);

    return (
        <div style={containerStyle}>
            <InputArea handleChange={handleChange} value={text} style={{...boxStyle, ...inputAreaStyle}}/>
            <Preview text={text} style={boxStyle}/>
        </div>
    )
};

export default Editor;
