import React from 'react';
import { CSSTransition } from "react-transition-group";

import { HeaderMonthContainer, ButtonDirection, MonthTextBold } from './header-month.styles';

const HeaderMonth = ({ monthYear, leftArrow, rightArrow, handlePreviousMonth,
                       handleNextMonth, appearLeft, appearRight,  handleEntered }) => {
    return (
        <HeaderMonthContainer>
            {
                leftArrow?
                    <ButtonDirection onClick={handlePreviousMonth}>
                        <i class="fas fa-chevron-left" style={{fontSize: '13px', color: '#9c9c9c'}}></i>
                    </ButtonDirection>
                    :
                    <div/>
            }
            <CSSTransition
                in={appearLeft || appearRight}
                timeout={100}
                classNames={appearLeft? 'list-transition-left': 'list-transition-right'}
                onEntered={handleEntered}
            >
                <MonthTextBold>
                    {monthYear}
                </MonthTextBold>
            </CSSTransition>
            {
                rightArrow?
                    <ButtonDirection onClick={handleNextMonth}>
                        <i class="fas fa-chevron-right" style={{fontSize: '13px', color: '#9c9c9c'}}></i>
                    </ButtonDirection>
                    :
                    <div/>
            }
         
        </HeaderMonthContainer>
    );
};

export default HeaderMonth;