import React from 'react';
import Header from './Header';
import Promises from './Promises';

const temp = [
    {
        id: 0,
        name: '약속',
        startDay: '2022-08-11',
        endDay: '2022-08-30',
        place: '신촌',
        text: '지민, 찬호 오기로 함'
    },
    {
        id: 1,
        name: '동창회',
        startDay: '2022-08-27',
        endDay: '2022-09-03',
        place: '종로',
        text: '',
    },

]

export default function MyPromises() {
    
    return (
        <div>
            <Header />
            <Promises promises={temp} />
        </div>
    )
}