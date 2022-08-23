import React from 'react';
import Header from './Header';
import Promises from './Promises';
import {promises} from 'testDB'

export default function MyPromises() {
    
    return (
        <div>
            <Header />
            <Promises promises={promises} />
        </div>
    )
}