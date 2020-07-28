import React from 'react';
import { getDate, isSunday } from 'date-fns';

import { DaysNameContainer, DaysName } from './date-of-month.styles';
import { MonthDateArray } from './date-of-month.utils';
const DateOfMonth = ({ locale, initialDate }) => {
    const monthDateList = MonthDateArray(initialDate, locale);

    return (
        <div>
           {
               monthDateList.map((week, index) => {
                    return (
                        <DaysNameContainer key={index}>
                            {
                                week.map((day) => {
                                    return (
                                        <DaysName key={day.date} isHoliday={isSunday(new Date(day.date))} dateStyle={day.style}>{getDate(new Date(day.date))}</DaysName>
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