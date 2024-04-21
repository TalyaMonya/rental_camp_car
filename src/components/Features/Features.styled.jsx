import styled from "styled-components";

export const ListFeatures = styled.ul`
  display: flex;
  flex-wrap: wrap;
  max-width: 430px;
  row-gap: 8px;
  column-gap: 8px;
  margin-bottom: 44px;
`;

export const ItemFeatures = styled.li`
  display: flex;
  border-radius: 100px;
  padding: 12px 18px;
  background-color: ${(p) => p.theme.colors.lightgrey};

  & > p {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.25;
  }
`;

export const WrapperIcon = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;

export const TitleVehicleDetails = styled.h2`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;

  color: ${(p) => p.theme.colors.black};

  &::after {
    content: "";
    display: block;
    height: 2px;
    width: 100%;
    margin-bottom: 24px;
    margin-top: 24px;

    background-color: rgba(16, 24, 40, 0.1);
  }
`;

export const ListVehicleDetails = styled.ul`
  display: block;
  width: 430px;
`;

export const ItemVehicleDetails = styled.li`
  display: flex;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 14px;
  }
`;

export const ContentVehicleDetails = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
  text-transform: capitalize;
  color: ${(p) => p.theme.colors.black};
`;