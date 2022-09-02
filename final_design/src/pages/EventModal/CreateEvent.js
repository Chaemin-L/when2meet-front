import React, { useState } from 'react';
import { Input, Button, Calendar } from 'components/index';
import { Wrapper, Header, Content } from './styles';


export default function CreateEvent() {
    const [selectedDayRange, setSelectedDayRange] = useState({
        from: null,
        to: null
    });
    
    return <Wrapper>
        <Header>
            <Input option='title' placeholder='약속의 이름을 입력해주세요!' />
        </Header>
        <Content>
            <div>
                <span>
                    날짜를 선택해주세요 !
                </span>
                <Calendar value={selectedDayRange} onChange={setSelectedDayRange} />
            </div>
            <Button option='xsmall'>약속 만들기</Button>
        </Content>
    </Wrapper>
}