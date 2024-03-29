import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import avatarPlaceholder from "../../assets/avatar_placeholder.png";
import logo from "../../assets/logo.svg";

import { Container, Logo, Search, Profile, Content } from "./styles";

export function Header({ children }) {
  const { signOut, user } = useAuth();

  const avatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  return (
    <Container>
      <Logo to="/">
        <img src={logo} alt="website logo" />
      </Logo>

      <Search>{children}</Search>

      <Content>
        <div>
          <Link to="/profile">
            <strong>{user.name}</strong>
          </Link>

          <Link to="/" onClick={signOut}>
            Logout
          </Link>
        </div>

        <Profile to="/profile">
          <img src={avatarURL} alt={user.name} />
        </Profile>
      </Content>
    </Container>
  );
}
