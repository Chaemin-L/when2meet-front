import React from 'react';
import styled from 'styled-components';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import {default as ModernDatePicker} from '@amir04lm26/react-modern-calendar-date-picker';
import './DatePickerInput.css';

const StyledDatePicker = styled.div`
    display: flex;
    align-items: center;
`

export default function DatePicker(props) {
    const formatInputText = () => `${props.value.month}월 ${props.value.day}일, ${props.value.year}`;

    return <StyledDatePicker>
        <ModernDatePicker {...props} formatInputText={formatInputText} inputClassName='styled-input' />
        </StyledDatePicker>
}