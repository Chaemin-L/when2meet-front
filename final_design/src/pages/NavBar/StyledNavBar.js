import styled from 'styled-components';
import palette from 'styles/palette';

export const StyledNavBar = styled.div`
    flex: 1;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: ${palette.primaryColor};

    & > img{
        margin: 1rem auto 3rem;
        margin-left: 1rem;
    }
`