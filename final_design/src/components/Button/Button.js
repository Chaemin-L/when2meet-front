import React from 'react';
import {StyledButton} from './StyledButton';

export default function Button({children, option, onClick}) {
    return (
        <StyledButton option={option} onClick={onClick}>{ children }</StyledButton>
    )
}