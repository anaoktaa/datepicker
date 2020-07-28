import React from 'react';
import { getDate, isSunday } from 'date-fns';

import { DaysNameContainer, DaysName } from './date-of-month.styles';
import { MonthDateArray } from './date-of-month.utils';
const DateOfMonth = ({ locale, initialDate }) => {

    const monthDateList = MonthDateArray(initialDate, locale);

    console.log("MONTHDATELIST", monthDateList);
    return (
        <div>
           {
               monthDateList.map((week) => {
                    return (
                        <DaysNameContainer>
                            {
                                week.map((day) => {
                         
                                    console.log(isSunday(new Date(day.date)))
                                    return (
                                        <DaysName key={day} isHoliday={isSunday(new Date(day.date))} dateStyle={day.style}>{getDate(new Date(day.date))}</DaysName>
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