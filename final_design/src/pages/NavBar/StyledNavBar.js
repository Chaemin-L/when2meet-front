import styled from 'styled-components';
import palette from 'styles/palette';

export const StyledNavBar = styled.div`
    width: 8vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: ${palette.primaryColor};

    & > img{
        margin: 1rem auto 3rem;
    }
`