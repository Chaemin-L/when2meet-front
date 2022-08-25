import styled, { css } from "styled-components";
import variable from 'styles/variable';
import palette from 'styles/palette';

const defaultButton = {
    display: 'block',
    margin: '1rem 0',
    borderRadius: '6px',
    textAlign: 'center',
    border: 0,
};

const XsmallButton = {
    ...variable.buttonSize.xsmall,
    borderRadius: '40px',
    backgroundColor: palette.lightGray,
}

const SmallButton = {
    ...variable.buttonSize.small,
    backgroundColor: palette.primaryColor,
}

const MediumButton = {
    ...variable.buttonSize.medium,
    backgroundColor: palette.primaryColor,
}

const LargeButton = {
    ...variable.buttonSize.large,
    backgroundColor: 'black',
    color: 'white',
}

export const Button = styled.button`
    ${defaultButton}
    &:hover{
        cursor: pointer;
    }
    ${(props) => {
    switch (props.option) {
        case 'xsmall':
            return css`${XsmallButton}`; 
        case 'small':
            return css`${SmallButton}`; 
        case 'large':
            return css`${LargeButton}`;            
        default:
            return css`${MediumButton}`;
        };
    }
    };
`