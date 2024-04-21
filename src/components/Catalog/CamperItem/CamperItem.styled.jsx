import styled from "styled-components";


export const WrapperHeart = styled.div`
    width: 24px;
    height: 24px;
    fill: #ffffff;
    stroke: ${(p) => p.theme.colors.black};
    cursor: pointer;

    transition: stroke, fill ${(p) => p.theme.transition};

    &:hover,
    :focus {
        fill: ${(p) => p.theme.colors.red};
        stroke: ${(p) => p.theme.colors.red};
    }
`;

export const StarSvg = styled.svg`
    width: 20px;
    height: 20px;
    fill: ${(p) => p.theme.colors.yellow};
`;

export const LocationSvg = styled.svg`
    width: 20px;
    height: 20px;
`;

export const ListItem = styled.li`
    display: flex;
    width: 888px;
    height: 358px;
    padding: 24px;
    gap: 24px;

    border: 1px solid ${(p) => p.theme.colors.lightgrey};

    &:not(:last-child) {
        margin-bottom: 32px;
    }
`;

export const Image = styled.img`
  border-radius: 10px;
  width: 290px;
  height: 310px;
`;

export const WrapperTitle = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
`;

export const Title = styled.h2`
    font-size: 24px;
    font-weight: 600;
    line-height: 1.25;
    max-width: 360px;
    color: ${(p) => p.theme.colors.black};

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`;

export const WrapperPrice = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const Price = styled.p`
    font-size: 24px;
    font-weight: 600;
    line-height: 1.25;
    color: ${(p) => p.theme.colors.black};
`;

export const Reviews = styled.p`
    font-size: 16px;
    line-height: 1.5;
    color: ${(p) => p.theme.colors.black};
    border-bottom: 2px solid ${(p) => p.theme.colors.black};
`;

export const InfoCard = styled.div`
    display: flex;
    gap: 16px;
    margin-bottom: 24px;
`;

export const WrapperRating = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
`;

export const WrapperLocation = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
`;

export const Location = styled.p`
    font-size: 16px;
    line-height: 1.5;
    color: ${(p) => p.theme.colors.black};
`;

export const Description = styled.p`
    width: 525px;
    font-size: 16px;
    line-height: 1.5;
    color: ${(p) => p.theme.colors.grey};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 24px;
`;

export const InfoList = styled.ul`
    display: flex;
    row-gap: 8px;
    column-gap: 8px;
    flex-wrap: wrap;
    margin-bottom: 24px;
`;

export const InfoListItem = styled.li`
    display: flex;
    justify-content: center;
    gap: 8px;
    padding: 12px 18px;
    border-radius: 100px;

    color: ${(p) => p.theme.colors.black};
    background-color: ${(p) => p.theme.colors.lightgrey};
`;

export const InfoListText = styled.p`
    font-size: 16px;
    font-weight: 500;
    line-height: 1.25;
`;

export const ButtonShowMore = styled.button`
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    padding: 16px 40px;
    display: block;
    border: none;
    border-radius: 200px;
    color: #ffffff;
    background-color: ${(p) => p.theme.colors.red};
    
    
    transition: background-color ${(p) => p.theme.transition};

    &:hover,
    :focus {
        background-color: ${(p) => p.theme.colors.hoverRed};
    }
`;

