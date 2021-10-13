import { Link } from 'react-scroll';
import styled from 'styled-components';

export const NavContainer = styled.nav`
   position: sticky;
   background-color: white;
   top: 0;
   height: 80px;
`;

export const Nav = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 0em 2em;
   max-width: 1440px;
   margin: 0 auto;
   height: 100%;
`;

export const LogoSection = styled.section`

`;

export const BarsSection = styled.section``;

export const NavlinksSection = styled.section`

`;

export const NavlinksList = styled.ul`
   display: flex;
   gap: 2em;
`;

export const Navlink = styled(Link)`
   cursor: pointer;
   font-size: 1.05rem;
   font-family: 'Spartan', sans-serif;
`;