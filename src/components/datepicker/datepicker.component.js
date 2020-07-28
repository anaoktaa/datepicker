import React, { useState } from 'react';
import { addMonths, format, subMonths } from 'date-fns';
import { CSSTransition } from "react-transition-group";

import { DatepickerContainer, MonthContainer } from './datepicker.styles';
import HeaderMonth from '../header-month/header-month.component';
import WeekdaysName from '../weekdays-name/weekdays-name.component';
import DateOfMonth from '../date-of-month/date-of-month.component';

import './datepicker.styles.css';

const Datepicker = ({ initialDate, locale, daysLocale }) => {
    const [ currentDate, setCurrentDate ] = useState(initialDate);

    const [ appearLeft, setAppearLeft ] = useState(false);
    const [ appearRight, setAppearRight ] = useState(false);

    const handlePreviousMonth = () => {
        setCurrentDate(subMonths(currentDate, 1));
        setAppearLeft(true);
    }

    const handleNextMonth = () => {
        setCurrentDate(addMonths(currentDate, 1));
        setAppearRight(true);
    }

    const handleEntered = () => {
        setAppearLeft(false);
        setAppearRight(false);
    }

    return (
        <DatepickerContainer>
            <MonthContainer>
                <HeaderMonth
                    monthYear={format(currentDate, 'MMMM yyyy', {locale: locale})}
                    leftArrow={true}
                    handlePreviousMonth={handlePreviousMonth}
                    appearLeft={appearLeft}
                    appearRight={appearRight}
                    handleEntered={handleEntered}
                />           
                <WeekdaysName
                        daysLocale={daysLocale}
                />

                <CSSTransition
                    in={appearLeft || appearRight}
                    timeout={100}
                    classNames={appearLeft? 'list-transition-left': 'list-transition-right'}
                    onEntered={handleEntered}
                >
                    <DateOfMonth
                        locale={locale}
                        initialDate={currentDate}
                    />
                </CSSTransition>
            </MonthContainer>
            <MonthContainer>
                <HeaderMonth
                    monthYear={format(addMonths(currentDate, 1), 'MMMM yyyy', {locale: locale})}
                    rightArrow={true}
                    handleNextMonth={handleNextMonth}
                    appearLeft={appearLeft}
                    appearRight={appearRight}
                    handleEntered={handleEntered}
                />
                <WeekdaysName
                    daysLocale={daysLocale}
                />
                <CSSTransition
                    in={appearLeft || appearRight}
                    timeout={100}
                    classNames={appearLeft? 'list-transition-left': 'list-transition-right'}
                    onEntered={handleEntered}
                >
                    <DateOfMonth
                        locale={locale}
                        initialDate={addMonths(currentDate, 1)}
                    />
                </CSSTransition>
            </MonthContainer>
        </DatepickerContainer>
    )
};

export default Datepicker;