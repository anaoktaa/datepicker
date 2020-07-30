import React, { useState } from 'react';
import { format } from 'date-fns';
import { CSSTransition } from "react-transition-group";

import HeaderMonth from '../header-month/header-month.component';
import WeekdaysName from '../weekdays-name/weekdays-name.component';
import DateOfMonth from '../date-of-month/date-of-month.component';

import { FullScreenDatepickerContainer, Header, HeaderTitleText,
         MonthContainer, DateContainer } from './full-screen-datepicker.styles';
import './full-screen-datepicker.styles.css';

const FullScreenDatepicker = ({ initialDate, locale, handleCancel, title,
    onPickDate, selectedDate, handleNext, handlePrevious, selectedColor }) => {
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
        <FullScreenDatepickerContainer>
            <Header selectedColor={selectedColor}>
                <HeaderTitleText>
                    {title}
                </HeaderTitleText>
                <i onClick={handleCancel} class="fas fa-times" style={{color: 'white', fontSize: '18px', cursor: 'pointer'}}></i>
            </Header>
            <MonthContainer>
                <HeaderMonth
                    monthYear={format(initialDate, 'MMMM yyyy', {locale: locale})}
                    leftArrow={true}
                    rightArrow={true}
                    handlePreviousMonth={handlePreviousMonth}
                    handleNextMonth={handleNextMonth}
                    appearLeft={appearLeft}
                    appearRight={appearRight}
                    handleEntered={handleEntered}
                />  
            </MonthContainer>
            <DateContainer>
                <WeekdaysName
                    daysLocale={locale}
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
            </DateContainer>
          
           
        </FullScreenDatepickerContainer>

    )
};

export default FullScreenDatepicker;