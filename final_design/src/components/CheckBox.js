import React from 'react';

export default function CheckBox({text}) {
    return <div>
        <input type="checkbox"/>
        <span>{text}</span>
    </div>
}