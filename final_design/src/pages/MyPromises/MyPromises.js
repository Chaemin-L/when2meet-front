import React from 'react';
import Header from './Header';
import Promises from './Promises';
import { promises } from 'testDB'
import { Wrapper } from './style';

export default function MyPromises() {
    
    return (
        <Wrapper>
            <Header />
            <Promises promises={promises} />
        </Wrapper>
    )
}