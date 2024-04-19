import { HeaderContainer, Logo, NavContainer, NavLink } from "./Header.styled"

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <Logo to="/">#UkrCampers</Logo>
        <NavContainer>
          <NavLink to="/catalog">Catalog</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
        </NavContainer>
      </HeaderContainer>
    </>
  )
}