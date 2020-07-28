import React from 'react';

import { HeaderMonthContainer, ButtonDirection, MonthTextBold } from './header-month.styles';

const HeaderMonth = ({ monthYear, leftArrow, rightArrow, handlePreviousMonth, handleNextMonth }) => {
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
         
            <MonthTextBold>
                {monthYear}
            </MonthTextBold>

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