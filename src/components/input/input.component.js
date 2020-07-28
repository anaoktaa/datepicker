import React from 'react';

import { InputContainer, DateText } from './input.styles';

const Input = ({ handleClick, value }) => {
    return (
        <InputContainer onClick={handleClick}>
            <DateText>
                {value}
            </DateText>
            <i class="far fa-calendar-alt" style={{color: '#5a5a5a', fontSize: '17px'}}></i>
        </InputContainer>
    )
};

export default Input;