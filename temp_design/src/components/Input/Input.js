import React from 'react';
import './Input.scss';

export default function Input(props) {
    return (
        <input className="Input" placeholder={props.placeholder} onChange={props.onChange} required/>
    )
}