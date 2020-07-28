import styled, { css } from 'styled-components';

export const DaysNameContainer = styled.ul`
    display: flex;
    justify-content: space-around;
    margin: 20px 0 0;
    padding: 0;
`;

const DaysTextStyle = css`
    display: inline-block;
    font-size: 12px;
    width: 30px;
    letter-spacing: 0.8px;
    height: 30px;
    text-align: center;
`;

export const DaysName = styled.li`
    ${DaysTextStyle};
    color: #5d5d5d;
`;

export const RedDaysName = styled.li`
    ${DaysTextStyle};
    color: #f51e1e;
`;