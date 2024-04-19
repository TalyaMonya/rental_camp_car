import { NavLink as NavigationLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
height: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 35px 25px;
`;

export const Logo = styled(NavigationLink)`
  font-size: 24px;
  font-size: 500;
  text-decoration: none;
  color: ${(p) => p.theme.colors.red};
`;
