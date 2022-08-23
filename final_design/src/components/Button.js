import React from 'react';

export default function InputForm({children, onClick}) {
    return (
        <button onClick={onClick}>{ children }</button>
    )
}