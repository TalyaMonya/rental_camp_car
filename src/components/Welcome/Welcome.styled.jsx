import styled from "styled-components";
import BckgImg from "../../assets/background.jpeg";
import { NavLink as Navigate } from "react-router-dom";


export const WrapperPage = styled.div`
    position: absolute;
    top: 50px;
    height: 100vh;
    width: 100%;
    background-image: url(${BckgImg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    margin: 0;
    padding: 0 20px;
`;

export const Title = styled.h1`
    font-size: 35px;
    max-width: 660px;
    text-align: center;
    color: #000000;
    margin-bottom: 120px;
`;

export const QuoteWrap = styled.div`
display: flex;
    width: 350px;
    padding: 5px 15px;
    background-color: ${(p) => p.theme.colors.lightgrey};
    border-radius: 33px;
    margin-bottom: 70px;
`;

export const Quote = styled.p`
    font-size: 22px;
    text-align: center;
    color: ${(p) => p.theme.colors.black};
    
`

export const NavLink = styled(Navigate)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    font-weight: 400;
    font-size: 28px;
    line-height: 1.5;
    border-radius: 150px;
    padding: 18px 20px;
    text-align: center;

    margin-left: auto;
    margin-right: auto;

    text-decoration: none;
    color: #fff7ed;
    background-color: ${(p) => p.theme.colors.red};

    &:hover,
    :focus {
        background-color: ${(p) => p.theme.colors.hoverRed};
    }
`