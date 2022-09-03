import React, { useState } from 'react';
import { Input, Button, Calendar } from 'components/index';
import { Wrapper, Header, Content } from './styles';


export default function EventModal({ targetId, setTargetId }) {
    const [promiseName, setPromiseName] = useState('');
    const [selectedDayRange, setSelectedDayRange] = useState({
        from: null,
        to: null
    });

    // 약속 이름 input 변경 감지 메서드
    const onChange = (e) => {
        setPromiseName(e.target.value);
    }

    // 약속 생성 버튼 클릭 핸들러
    const onCreate = () => {
        if (promiseName === '' || (selectedDayRange.from === null && selectedDayRange.to === null)) {
            alert('약속 이름과 날짜는 필수 양식입니다.');
            return;
        }
        // 날짜 범위와 이름을 사용하여 DB에 새로운 값 추가.
        setTargetId('새로운 약속의 id값');
    };
    
    return <Wrapper>{
        targetId ? <>
            <div>
                시간 선택 모달입니다.
            </div>
        </>
        : <>
            <Header>
                    <Input option='title' inputProps={{ placeholder: '약속의 이름을 입력해주세요!', value: promiseName, onChange: onChange }} />
            </Header>
            <Content>
                <div>
                    <span>
                        날짜를 선택해주세요 !
                    </span>
                    <Calendar value={selectedDayRange} onChange={setSelectedDayRange} />
                </div>
                <Button option='xsmall' onClick={onCreate}>약속 만들기</Button>
                </Content>
        </>}
    </Wrapper>
}