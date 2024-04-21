import { Logo, Nav, NavContainer, NavLink } from "./Navigation.styled";
import sprite from "../../assets/sprite.svg"

export const Navigation = () => {
  return (
    <>
      <Nav>
          <Logo to="/">
            <svg width="40" height="40" fill="#E44848">
            <use xlinkHref={sprite + "#icon-van"}></use>
          </svg>
          UkrCampers</Logo>
        <NavContainer>
          <NavLink to="/catalog">Catalog</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
        </NavContainer>
      </Nav>
    </>
  )
}