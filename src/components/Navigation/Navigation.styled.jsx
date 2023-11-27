import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const NavigationBar = styled.nav`
display:flex;
`

export const HomeLink = styled(Link)`
margin-left:20px;
text-decoration:none;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size:20px;
`