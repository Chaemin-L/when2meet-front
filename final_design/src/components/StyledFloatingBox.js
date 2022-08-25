import styled from 'styled-components';
import variable from 'styles/variable';

export const Header = styled.div`
    flex: 1 1 auto;
    width: ${variable.inputSize.small.width};
    padding: auto 0;
    display: flex;
    align-items: center;
`

export const InputForm = styled.div`
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const Setting = styled.div`
    width: ${variable.inputSize.small.width};
    display: flex;
    justify-content: space-between;
`

export const ButtonSet = styled.div`
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const Footer = styled.div`
    display: flex;
    justify-content: space-between;
`

export const StyledBox = styled.div`
    width: 100%;
    height: 93%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 auto;
`