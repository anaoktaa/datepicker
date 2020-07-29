import styled from 'styled-components';

export const FullScreenDatepickerContainer = styled.div`
    margin: 0;
    background-color: white;
`;

export const Header = styled.div`
    height: 70px;
    background-color: #7cc33b;
    width: 100%;
    box-sizing: border-box;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const HeaderTitleText = styled.div`
    font-size: 17px;
    font-weight: 500;
    color: white;
`;

export const MonthContainer = styled.div`
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 20px;
    box-sizing: border-box;
`;

export const DateContainer = styled.div`
    padding: 20px 0;
    box-sizing: border-box;
`;