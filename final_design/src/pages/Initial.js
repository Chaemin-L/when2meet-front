import React from 'react';
import { Outlet } from 'react-router-dom';
import { BackGroundWrapper, Wrapper } from './StyledWrapper';

export default function Initial() {
    return <BackGroundWrapper>
        <span>우리 언제 만나?</span>
        <Wrapper>
                <h2>우리들의 약속을 위해</h2>
            <Outlet />
        </Wrapper>
    </BackGroundWrapper>
}