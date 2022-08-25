import React from 'react';

export default function CheckBox({text}) {
    return <div>
        <label><input type="checkbox" /> {text}</label>
    </div>
}