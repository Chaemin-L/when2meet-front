import React, {useState} from 'react';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Button } from 'components/index';
import { StyledHeader, ButtonSet } from './styles';
import { DatePicker } from 'components/index';
import right_arrow from 'assets/img/right_arrow.png';
import left_arrow from 'assets/img/left_arrow.png';


export default function Header({ id }) {
    let today = new Date();
    const defaultValue = { year: today.getFullYear(), month: today.getMonth() + 1, day: today.getDate() };

    const [selectedDay, setSelectedDay] = useState(defaultValue);

    const onChangeDay = (i) => {
        let newDate = new Date(selectedDay.year, selectedDay.month-1, selectedDay.day);
        newDate.setDate(newDate.getDate() + i);
        newDate = { year: newDate.getFullYear(), month: newDate.getMonth() + 1, day: newDate.getDate() };
        setSelectedDay(newDate);
    }

    return (
        <StyledHeader>
            <h2>{id}님의 약속들</h2>
            <ButtonSet>
                <img src={left_arrow} alt='오른쪽 화살표' onClick={(()=>onChangeDay(-1))}/>
                <DatePicker
                    value={selectedDay}
                    onChange={setSelectedDay}
                    shouldHighlightWeekends
                />
                <img src={right_arrow} alt='오른쪽 화살표' onClick={(()=>onChangeDay(1))}/>
                <Button option='small'>약속잡기</Button>
            </ButtonSet>
        </StyledHeader>
    )
}