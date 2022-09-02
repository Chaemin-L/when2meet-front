import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar as OringinalCalendar, utils } from "@amir04lm26/react-modern-calendar-date-picker";

export default function Calendar({ value, onChange }) {
    return <OringinalCalendar
    value={value}
    onChange={onChange}
    minimumDate={utils().getToday()}
    shouldHighlightWeekends
    />
}
