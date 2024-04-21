import styled from "styled-components";

export const ListReviews = styled.ul`
    max-width: 430px;
`;

export const ListItem = styled.li`
    &:not(:last-child) {
        margin-bottom: 24px;
    }
`;

export const Head = styled.div`
    display: inline-flex;
    gap: 16px;
    margin-bottom: 16px;
    align-items: center;
`;

export const Avatar = styled.span`
    display: inline-flex;
    align-items: center;
    width: 60px;
    height: 60px;
    border-radius: 60px;

    background-color: ${(p) => p.theme.colors.lightgrey};

    & > p {
        font-size: 24px;
        font-weight: 600;
        line-height: 1.25;
        color: ${(p) => p.theme.colors.red};
    }
`;

export const WrapperStrats = styled.div`
    display: inline-flex;
    gap: 4px;
`;

export const Name = styled.h3`
    font-size: 18px;
    font-weight: 600;
    line-height: 1.33;
    margin-bottom: 4px;

    color: ${(p) => p.theme.colors.black};
`;

export const Comment = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;

     color: ${(p) => p.theme.colors.grey};
`;