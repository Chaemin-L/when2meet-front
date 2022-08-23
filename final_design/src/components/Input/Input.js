import React from 'react';
import { Label, StyledInput } from './StyledInput';

export default function Input({header, placeholder, option, onChange}) {
    return (
        <div>
            <Label option={option}> {header}
                <StyledInput  placeholder={placeholder} onChange={onChange} option={option}/>
            </Label>
        </div>
    )
}