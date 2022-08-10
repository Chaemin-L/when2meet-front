import React from 'react';
import { useLocation } from 'react-router-dom';
import Wrapper from '../components/Wrapper/Wrapper';

export default function Schedule() {

    const location = useLocation();

    const {eventName} = location.state;
    
    return (
        <Wrapper>
            <div>
                <h1> {eventName} </h1>
                <p>여러분의 시간표를 먼저 입력하시면 우측에 그룹원들의 시간표가 동시에 나타나게 됩니다.</p>
            </div>
            <div>왼쪽에 자신이 (안)되는 날짜 drag-select,</div>
            <div>오른쪽에 그룹 조율 날짜</div>
        </Wrapper>
    )
}