import React, { useState } from 'react';
import { StyledInput, StyledLabel } from './StyledInput';
import visibility from 'assets/img/visibility.png';
import visibilityOff from 'assets/img/visibilityOff.png';

export default function Input({ header, option, inputProps, isPassword=false}) {
    // password visibility 제어
    const [passwordType, setPasswordType] = useState({
        type: 'text',
        visible: !isPassword,
    });
        
        //password 제어 핸들러
    const handlePasswordType = e => {
        setPasswordType(() => {
            if (!passwordType.visible) {
                e.target.src = visibility;
                return { type: 'text', visible: true };
            }
            e.target.src = visibilityOff;
            return { type: 'password', visible: false };
        })
    };
    return (
        <div>
            <StyledLabel option={option}> {header}
                <StyledInput option={option} {...inputProps} {...passwordType} />
                {isPassword && <img src={visibility} onClick={handlePasswordType} alt='visibilityProps' />}
            </StyledLabel>
        </div>
    )
}