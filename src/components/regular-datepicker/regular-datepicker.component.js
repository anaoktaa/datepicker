import React, { useState } from 'react';
import { addMonths, format } from 'date-fns';
import { CSSTransition } from "react-transition-group";

import { DatepickerContainer, MonthContainer } from './regular-datepicker.styles';
import HeaderMonth from '../header-month/header-month.component';
import WeekdaysName from '../weekdays-name/weekdays-name.component';
import DateOfMonth from '../date-of-month/date-of-month.component';

import './regular-datepicker.styles.css';

const RegularDatepicker = ({ initialDate, locale, daysLocale, onPickDate, 
                selectedDate, handleNext, handlePrevious, selectedColor }) => {

    const [ appearLeft, setAppearLeft ] = useState(false);
    const [ appearRight, setAppearRight ] = useState(false);

    const handlePreviousMonth = () => {
        handlePrevious();
        setAppearLeft(true);
    }

    const handleNextMonth = () => {
        handleNext();
        setAppearRight(true);
    }

    const handleEntered = () => {
        setAppearLeft(false);
        setAppearRight(false);
    }

    const handlePickDate = (date) => {
        onPickDate(date);
    }

    return (
        <DatepickerContainer>
            <MonthContainer>
                <HeaderMonth
                    monthYear={format(initialDate, 'MMMM yyyy', {locale: locale})}
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
                        selectedColor={selectedColor}
                        locale={locale}
                        initialDate={initialDate}
                        handlePickDate={handlePickDate}
                        selectedDate={selectedDate}
                    />
                </CSSTransition>
            </MonthContainer>
            <MonthContainer>
                <HeaderMonth
                    monthYear={format(addMonths(initialDate, 1), 'MMMM yyyy', {locale: locale})}
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
                        selectedColor={selectedColor}
                        locale={locale}
                        initialDate={addMonths(initialDate, 1)}
                        handlePickDate={handlePickDate}
                        selectedDate={selectedDate}
                    />
                </CSSTransition>
            </MonthContainer>
        </DatepickerContainer>
    )
};

export default RegularDatepicker;