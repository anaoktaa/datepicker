import styled from 'styled-components';

export const HeaderMonthContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content:  space-between;
`;

export const ButtonDirection = styled.div`
    box-shadow: 1px 1px 3px #bdbdbd, -1px 2px 3px #dedede;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    text-align: center;
    line-height: 30px;
    cursor: pointer;
`;

export const MonthTextBold = styled.p`
    color: #5a5a5a;
    font-size: 14px;
    margin: 0;
    padding: 0;
    font-weight: bold;
`;

export const LeftContainer = styled.div`
    display: block;
`;

export const RightContainer = styled.div`
    display: block;
`;