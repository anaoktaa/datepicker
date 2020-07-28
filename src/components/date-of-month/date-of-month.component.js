import React from 'react';
import { addDays, format, startOfMonth, endOfMonth, startOfWeek,
         endOfWeek, getDate } from 'date-fns';

import { DaysNameContainer, DaysName, RedDaysName } from './date-of-month.styles';
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
            //if before adding stylee
        }
        monthDateList.push(weekDateList);
    }
    return (
        <div>
           {
               monthDateList.map((week) => {
                    return (
                        <DaysNameContainer>
                            {
                                week.map((day) => {
                                    return (
                                        <DaysName>{getDate(new Date(day))}</DaysName>
                                    )
                                })
                            }
                        </DaysNameContainer>
                    )
               })
           }
        </div>
    )
};

export default DateOfMonth;