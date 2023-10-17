import React from 'react';

import './Button.css'

const Button = ({props}) => {
    return (
        <button className={'but'}>{props}</button>
    );
};

export {Button};