import styled, { css } from "styled-components";
import variable from 'styles/variable';

const defaultInput = {
    display: 'block',
    margin: '1rem 0',
    padding: '0 1rem',
    borderRadius: '6px',
    border: '1px solid palette.borderColor',
    boxSizing: 'border-box',
};

const TitleInput = {
    ...variable.inputSize.title,
    borderRadius: '20px',
    textAlign: 'center',
}

const SmallInput = {
    ...variable.inputSize.small,
    margin: '0.5rem 0',
}

const WideInput = {
    ...variable.inputSize.wide,
}

export const Label = styled.label`
    display: block;
    ${variable.fontSize.medium};
    ${(props) => props.option === 'wide' && css`${variable.fontSize.large}` };

`

export const StyledInput = styled.input`
    ${defaultInput}
    ${(props) => {
    switch (props.option) {
        case 'title':
            return css`${TitleInput}`; 
        case 'wide':
            return css`${WideInput}`;         
        default:
            return css`${SmallInput}`;
        };
    }
    };
`

export const StyledLabel = styled.label`
    position: relative;
    & > img {
        position: absolute;
        width: 1.6rem;
        bottom: 0.8rem;
        right: 1.2rem;
        &:hover {
            cursor: pointer;
        }
        &:active {
            cursor: auto;
        }
    }
`