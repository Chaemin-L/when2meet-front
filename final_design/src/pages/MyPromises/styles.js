import styled from 'styled-components';
import palette from 'styles/palette';

export const Wrapper = styled.div`
    flex: 9;
    padding: 5rem 5rem;
    display: flex;
    flex-direction: column;
`

export const StyledHeader = styled.div`
    display: flex;
    flex: 1.5 1 0;
    justify-content: space-between;
    border-top: 1px solid ${palette.gray};
    & h2 {
        display: flex;
        align-items: center;
        padding: auto 0;
    }
`

export const ButtonSet = styled.div`
    display: flex;
    align-items: center;
    & img {
        width: 1.5rem;
        margin: 0 1rem;
        &:hover{
            cursor: pointer;
        }
        &:active{
            cursor: auto;
        }
    }
    & > div {
        margin: 1rem;
    }
`

export const PromiseBox = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    display: flex;
    ${{/*checkbox*/}}
    & > div{
        flex: 1;
        padding-left: 1rem;
    }
    ${{/*date*/}}
    & > div + div{
        flex: 1;
    }
    ${{/*place*/}}
    & > div + div + div{
        flex: 2;
    }
    ${{/*memo*/}}
    & > div + div + div + div{
        flex: 3;
        padding-right: 1rem;
    }
    &:nth-child(even){
        background-color: ${palette.lightGray};
    }
`

export const PromiseList = styled.div`
    height: 80%;
    flex: 10 1 0;
    overflow-y: scroll;
    margin: 1rem 0 1rem;
    & + div{
        display: flex;
        justify-content: flex-end;
    }
    display: flex;
    flex-direction: column;
`

export const PromisesBox = styled.div`
    flex: 5 1 0;
    display: flex;
    flex-direction: column;
`