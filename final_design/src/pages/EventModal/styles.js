import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Header = styled.div`
    flex: 1;    
`

export const Content = styled.div`
    flex: 10;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    & > div > span {
        line-height: 3rem;
    }
`