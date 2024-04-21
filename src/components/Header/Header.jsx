import { HeaderContainer, Logo, NavContainer, NavLink } from "./Header.styled";
import sprite from "../../assets/sprite.svg"

export const Header = () => {
  return (
    <>
      <HeaderContainer>
          <Logo to="/">
            <svg width="40" height="40" fill="#E44848">
            <use xlinkHref={sprite + "#icon-van"}></use>
          </svg>
          UkrCampers</Logo>
        <NavContainer>
          <NavLink to="/catalog">Catalog</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
        </NavContainer>
      </HeaderContainer>
    </>
  )
}