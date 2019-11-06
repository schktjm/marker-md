import React from 'react'
import 'github-markdown-css';

const remark = require('remark');
const reactRenderer = require('remark-react');

const Preview = props => {
    return (
        <article className={"markdown-body"} style={props.style}>
            {remark().use(reactRenderer, {
                sanitize: false,
            }).processSync(props.text).contents}
        </article>
    )
};

export default Preview;
