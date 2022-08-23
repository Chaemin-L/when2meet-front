import React from 'react';
import { CheckBox, Button } from 'components/index';

function Promise({ promise }) {
    console.log(promise);
    return (
        promise&&
        <div>
            <CheckBox>{promise.name}</CheckBox>
            {promise.isHeader ? <div>날짜</div>
                :<div>
                    <span>from {promise.startDay}</span><br />
                    <span>to {promise.endDay}</span>
                </div>}
            <div>{promise.place}</div>
            <div>{promise.text}</div>
        </div>
    )
}

export default function Promises({ promises }) {
    
    return <div>
        <Promise name='약속이름' isHeader={true} place='장소' text='메모'/>
        {promises.map((promise) => <Promise key={promise.id} promise={promise} />)}
        <Button option='xsmall'>약속완료</Button>
        
    </div>
}