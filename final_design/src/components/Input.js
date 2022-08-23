import React from 'react';

export default function Input({header, onChange}) {
    return (
        <div>
            <h3>{header}</h3>
            <input type="text" onChange={onChange} />
        </div>
    )
}