import styled from "styled-components";

export const BtnLoadMore = styled.button`
    display: block;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;

    color: ${(p) => p.theme.colors.black};
    border: none;
    border-radius: 200px;
    margin: 0 auto;
    margin-top: 40px;
    padding: 16px 40px;
    background-color: ${(p) => p.theme.colors.lightgrey};

    transition: background-color ${(p) => p.theme.transition};

    &:hover,
    :focus {
        background-color: ${(p) => p.theme.colors.hoverRed};
        color: #ffffff;
    }
`;