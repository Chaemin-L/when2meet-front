import React, {useState} from 'react';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Button } from 'components/index';
import { StyledHeader, ButtonSet } from './style';
import { DatePicker } from 'components/index';
import { utils } from 'react-modern-calendar-datepicker';


export default function Header({ id }) {
    const defaultValue = utils().getToday();

    const [selectedDay, setSelectedDay] = useState(defaultValue);

    return (
        <StyledHeader>
            <h2>{id}님의 약속들</h2>
            <ButtonSet>
                <DatePicker
                    value={selectedDay}
                    onChange={setSelectedDay}
                    shouldHighlightWeekends
                />
                <Button option='small'>약속잡기</Button>
            </ButtonSet>
        </StyledHeader>
    )
}