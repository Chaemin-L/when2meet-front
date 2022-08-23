import React, {useState} from 'react';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from '@amir04lm26/react-modern-calendar-date-picker';
import { Button } from 'components/index';


export default function Header({ id }) {
    const today = new Date();
    console.log(today);
    const defaultValue = { year: today.getFullYear(), month: today.getMonth()+1, day: today.getDate() };

    const [selectedDay, setSelectedDay] = useState(defaultValue);

    return (
        <div>
            <h2>{id}님의 약속들</h2>
            <DatePicker
                value={selectedDay}
                onChange={setSelectedDay}
                shouldHighlightWeekends
            />
            <Button>약속잡기</Button>
        </div>
    )
}