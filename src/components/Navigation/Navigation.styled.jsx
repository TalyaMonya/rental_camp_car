import { NavLink as NavigationLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 36px 26px;
`

export const Logo = styled(NavigationLink)`
  font-size: 24px;
  font-size: 500;
  text-decoration: none;
  color: ${(p) => p.theme.colors.red};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const NavLink = styled(NavigationLink)`
  display: block;
  width: 100%;
  max-width: 170px;
  align-content: center;
  padding: 10px 30px;
  color: ${(p) => p.theme.colors.black};
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
  border-radius: 20px;

  background-color: ${(p) => p.theme.colors.red};
  transition: background-color ${(p) => p.theme.colors.red};

  &.active {
      background-color: ${(p) => p.theme.colors.yellow};
      color: ${(p) => p.theme.colors.black};
  }
`
