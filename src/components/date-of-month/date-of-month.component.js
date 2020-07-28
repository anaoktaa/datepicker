import React from 'react';
import { addDays, format, startOfMonth, endOfMonth, startOfWeek,
    endOfWeek } from 'date-fns';

const DateOfMonth = ({ locale }) => {

    const monthStart = startOfMonth(new Date());
    const monthEnd = endOfMonth(new Date());
    const endDate = endOfWeek(monthEnd);
    let startDate = startOfWeek(monthStart);

    const monthDateList = [];
    while (startDate <= endDate) {
        const weekDateList = [];
        for (let i = 0; i < 7; i++) {
            const formattedDate = format(startDate, 'dd-MMMM-yyyy', { locale : locale });
            weekDateList.push(formattedDate);
            startDate = addDays(startDate, 1);

            //Compare date
        }
        monthDateList.push(weekDateList);
    }

    console.log("MONTH DATE LIST", monthDateList);
    return (
        <div>
           jhskjdhjkhsd 
        </div>
    )
};

export default DateOfMonth;