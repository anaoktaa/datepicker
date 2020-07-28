import React, { useState } from 'react';
import { addMonths, format, subMonths } from 'date-fns';

import { DatepickerContainer, MonthContainer } from './datepicker.styles';
import HeaderMonth from '../header-month/header-month.component';
import WeekdaysName from '../weekdays-name/weekdays-name.component';
import DateOfMonth from '../date-of-month/date-of-month.component';

const Datepicker = ({ initialDate, locale, daysLocale }) => {
    const [ currentDate, setCurrentDate ] = useState(initialDate);

    const handlePreviousMonth = () => {
        setCurrentDate(subMonths(currentDate, 1));
    }
    const handleNextMonth = () => {
        setCurrentDate(addMonths(currentDate, 1));
    }
    return (
        <DatepickerContainer>
            <MonthContainer>
                <HeaderMonth
                    monthYear={format(currentDate, 'MMMM yyyy', {locale: locale})}
                    leftArrow={true}
                    handlePreviousMonth={handlePreviousMonth}
                />
                <WeekdaysName
                    daysLocale={daysLocale}
                />
                <DateOfMonth
                    locale={locale}
                    initialDate={currentDate}
                />
      
          
            </MonthContainer>
            <MonthContainer>
                <HeaderMonth
                    monthYear={format(addMonths(currentDate, 1), 'MMMM yyyy', {locale: locale})}
                    rightArrow={true}
                    handleNextMonth={handleNextMonth}
                />
                <WeekdaysName
                    daysLocale={daysLocale}
                />
                <DateOfMonth
                    locale={locale}
                    initialDate={addMonths(currentDate, 1)}
                />

            </MonthContainer>
        </DatepickerContainer>
    )
};

export default Datepicker;