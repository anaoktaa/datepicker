import React from 'react';
import { getDate, isSunday, isBefore, subDays } from 'date-fns';

import { DaysNameContainer, DaysName } from './date-of-month.styles';
import { MonthDateArray } from './date-of-month.utils';
const DateOfMonth = ({ locale, initialDate, handlePickDate, selectedDate }) => {
    const monthDateList = MonthDateArray(initialDate, locale, selectedDate);

    const onPickDate = (date) => {
        if (isBefore(new Date(date), subDays(new Date(), 1))) return; 
        handlePickDate(date)
    }
    return (
        <div>
           {
               monthDateList.map((week, index) => {
                    return (
                        <DaysNameContainer key={index}>
                            {
                                week.map((day) => {
                                    return (
                                        <DaysName onClick={() => onPickDate(day.date)}  key={day.date} isHoliday={isSunday(new Date(day.date))} dateStyle={day.style}>{getDate(new Date(day.date))}</DaysName>
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