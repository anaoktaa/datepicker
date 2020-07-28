import React from 'react';

import { InputContainer, DateText } from './input.styles';

const Input = ({ handleClick }) => {
    return (
        <InputContainer onClick={handleClick}>
            <DateText>
                25 Agustus 2020
            </DateText>
            <i class="far fa-calendar-alt" style={{color: '#5a5a5a', fontSize: '17px'}}></i>
        </InputContainer>
    )
};

export default Input;