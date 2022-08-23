import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Wrapper, Input, Button } from '../components/index';
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar, utils } from "@amir04lm26/react-modern-calendar-date-picker";

export default function Create() {
    const [input, setInput] = useState();
    const [selectedDayRange, setSelectedDayRange] = useState({
        from: null,
        to: null
      });

    const navigate = useNavigate();
    const onChange = (e) => {
            setInput(e.target.value);
    };
    
    const onClick = () => {
        if (!input) {
            alert('올바른 일정 이름을 입력해주세요.');
            return;
        }
        // API to create new DB 
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
            
            <Calendar
            value={selectedDayRange}
            onChange={setSelectedDayRange}
            minimumDate={utils().getToday()}
            shouldHighlightWeekends
            />
                <Button onClick={onClick}>일정 생성하기</Button>
            </Wrapper>
        
    );
};