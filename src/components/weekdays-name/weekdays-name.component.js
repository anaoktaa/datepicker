import React from 'react';

import { DaysName, DaysNameContainer, RedDaysName } from './weekdays-name.styles';

const WeekdaysName = ({ daysLocale }) => {
    const weekdays = [...Array(7).keys()].map(i => daysLocale.localize.day(i, { width: 'abbreviated' }));
    return (
        <DaysNameContainer>
            {
                weekdays.map((day, index) => {
                    if (index=== 0) {
                        return (
                            <RedDaysName key={day}>{day}</RedDaysName>
                        )
                    }
                    else {
                        return (
                            <DaysName key={day}>{day}</DaysName>
                        )
                    }
                })
            }
        </DaysNameContainer>
    )
};

export default WeekdaysName;