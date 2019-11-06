import React, {useState, useEffect} from 'react'
import InputArea from './Textarea';
import Preview from './Preview';
import Button from '@material-ui/core/Button';

const containerStyle = {
    position: "relative",
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

const floatButtonStyle = {
    position: "fixed",
    top: "60px",
    right: "30px",
    zIndex: "1000"
};

const Editor = () => {
    const [text, setText] = useState('');
    const [isShow, setIsShow] = useState(false);

    const handleChange = e => {
        setText(e.target.value);
        localStorage.setItem('text', e.target.value);
    };

    const handleClick = () => {
        setIsShow(!isShow);
    };

    useEffect(() => {
        setText(localStorage.getItem('text') || text);
    }, []);

    return (
        <div>
            <Button variant="contained" href={""} style={floatButtonStyle} onClick={handleClick}>
                {isShow ? "close" : "show editor"}
            </Button>
            <div style={containerStyle}>
                {!isShow ?
                    "" :
                    <InputArea handleChange={handleChange} value={text} style={{...boxStyle, ...inputAreaStyle}}/>
                }
                <Preview text={text} style={boxStyle}/>
            </div>
        </div>
    )
};

export default Editor;
