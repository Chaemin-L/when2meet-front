import React, { useState } from 'react';
import { CheckBox, Button } from 'components/index';
import { PromiseBox, PromiseList, PromisesBox } from './styles';
import { promiseList } from 'testDB';

function Promise({ promise }) {
    // eslint-disable-next-line
    const [isChecked, setIsChecked] = useState(false);

    return (
        promise&&
        <PromiseBox>
            <CheckBox text={promise.name} checked={isChecked}></CheckBox>
            {promise.isHeader ? <div>날짜</div>
                :<div>
                    <span>from {promise.startDay}</span><br />
                    <span>to {promise.endDay}</span>
                </div>}
            <div>{promise.place}</div>
            <div>{promise.text}</div>
        </PromiseBox>
    )
}

export default function Promises() {
    // eslint-disable-next-line
    const [promises, setPromises] = useState(promiseList);

    const header = { name: '약속이름', isHeader: true, place: '장소', text: '메모' };

    return <PromisesBox>
        <Promise promise={header} />
        <PromiseList>
            {promises.map((promise) => <Promise key={promise.id} promise={promise}/>)}
        </PromiseList>
        <div>
            <Button option='xsmall' >약속완료</Button>
        </div>
        </PromisesBox>
    
}