import styled from "styled-components";
import palette from "styles/palette";

export const BackGroundWrapper = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    &>span{
        position: absolute;
        top: 2.6rem;
        left: 2.6rem;
    }
`

export const Wrapper = styled.div`
    width: 32vw;
    height: 80vh;
    padding: 3.2rem 2.35rem;
    border: 2px solid ${palette.borderColor};
    border-radius: 10px;
    box-shadow: 0 4px 64px 0 ${palette.lightGray};
`