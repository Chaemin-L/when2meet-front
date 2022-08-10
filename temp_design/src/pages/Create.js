import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Wrapper, Input, Button } from '../components/index';

export default function Create() {
    const [input, setInput] = useState();

    const navigate = useNavigate();
    const onChange = (e) => {
        setInput(e.target.value);
    };
    
    const onClick = () => {
        if (!input) {
            alert('올바른 일정 이름을 입력해주세요.');
            return;
        }
        navigate('/schedule', {
            state: {
                eventName: input,
            }
        });
    };
    
    return (
        <Wrapper>
            <h1>Main</h1>
            <Input placeholder="새로운 일정 이름" onChange={onChange} />
            <p>
                날짜 선택 창이 들어갈 자리입니다.
            </p>
            <Button onClick={onClick}>일정 생성하기</Button>
        </Wrapper>
    );
};