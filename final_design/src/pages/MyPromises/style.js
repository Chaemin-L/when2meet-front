import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    padding: 5rem 5rem;
    display: flex;
    flex-direction: column;
`

export const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    border-top: 1px solid gray;
    padding: 1rem 0;
`

export const ButtonSet = styled.div`
    display: flex;
    align-items: center;
    & > div {
        margin: 2rem;
    }
`
