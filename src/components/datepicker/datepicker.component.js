import React, { useState } from 'react';
import { addMonths, format, startOfMonth, endOfMonth, startOfWeek,
         endOfWeek } from 'date-fns';

import { DatepickerContainer, MonthContainer } from './datepicker.styles';
import HeaderMonth from '../header-month/header-month.component';
import WeekdaysName from '../weekdays-name/weekdays-name.component';
import DateOfMonth from '../date-of-month/date-of-month.component';

const Datepicker = ({ initialDate, locale, daysLocale }) => {

    return (
        <DatepickerContainer>
            <MonthContainer>
                <HeaderMonth
                    monthYear={format(initialDate, 'MMMM yyyy', {locale: locale})}
                    leftArrow={true}
                />
                <WeekdaysName
                    daysLocale={daysLocale}
                />
                <DateOfMonth
                    locale={locale}
                />
      
          
            </MonthContainer>
            <MonthContainer>
                <HeaderMonth
                    monthYear={format(addMonths(initialDate, 1), 'MMMM yyyy', {locale: locale})}
                    rightArrow={true}
                />
                <WeekdaysName
                    daysLocale={daysLocale}
                />

            </MonthContainer>
        </DatepickerContainer>
    )
};

export default Datepicker;