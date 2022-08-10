import React from 'react';
import './Button.scss';

export default function Button(props) {
    return <button className="Button" onClick={props.onClick}>{ props.children }</button>
}