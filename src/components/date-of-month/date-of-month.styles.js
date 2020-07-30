import styled, { css } from 'styled-components';

export const DaysNameContainer = styled.ul`
    display: flex;
    justify-content: space-around;
    margin: 5px 0 0;
    padding: 0;
`;

const DaysTextStyle = css`
    display: inline-block;
    font-size: 12px;
    width: 50px;
    height: 45px;
    text-align: center;
    line-height: 45px;
    margin: 0 5px;

`;

const Style1 = css`
    opacity: 0;
    ${DaysTextStyle};
    color: transparent;
    pointer-events: none;
`;

const Style2 = css`
    ${DaysTextStyle};
    color: #e6e6e6;
`;

const Style3 = css`
    ${DaysTextStyle};
    color: white;
    background-color:  ${(({selectedColor}) => selectedColor)};
    box-sizing: border-box;
    border-radius: 5px;
    font-weight: bold;
    box-shadow: ${(({selectedColor}) => selectedColor)} 5px 3px 16px -3px;
    cursor: pointer;
`;

const Style4 = css`
    ${DaysTextStyle};
    color: ${(({isHoliday}) => isHoliday? `#f51e1e` : `#5d5d5d`)};
    cursor: pointer;

    &:hover {
        background-color: #e4e4e4;
        box-sizing: border-box;
        border-radius: 5px;
        font-weight: bold;
        cursor: pointer;
    }
`;

const StyleForDaysContainer = props => {
    if (props.dateStyle === 'style__1') {
        return Style1;
    }
    else if (props.dateStyle === 'style__2') {
        return Style2;
    }
    else if (props.dateStyle === 'style__3') {
        return Style3;
    }
    else if (props.dateStyle === 'style__4') {
        return Style4;
    }
}

export const DaysName = styled.li`
    ${StyleForDaysContainer};

`;

// export const RedDaysName = styled.li`
//     ${DaysTextStyle};
//     color: #f51e1e;
// `;
    