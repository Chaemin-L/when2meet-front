import React from 'react';
import Header from './Header';
import Promises from './Promises';
import { Wrapper } from './styles';

export default function MyPromises() {
    // 여기에 사용자 정보 받아야함.

    return (
        <Wrapper>
            <Header />
            <Promises />
        </Wrapper>
    )
}