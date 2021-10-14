import { Link } from 'react-scroll';
import styled from 'styled-components';
import { bps } from '../../styles/breakpoints';

export const NavContainer = styled.nav`
   position: sticky;
   -webkit-backdrop-filter: blur(5px);
   backdrop-filter: blur(5px);
   top: 0;
   height: 80px;
   margin-top: -80px;
   z-index: 10;
`;

export const Nav = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 0em 2em;
   max-width: 1640px;
   margin: 0 auto;
   height: 100%;
`;

export const LogoSection = styled.section`

`;

export const BarsSection = styled.section`

`;

export const NavlinksSection = styled.section`
   display: none;

   ${bps.desktop} {
      display: block;
   }
`;

export const NavlinksList = styled.ul`
   display: flex;
   gap: 1.65em;
`;

export const Navlink = styled(Link)`
   cursor: pointer;
   font-size: 1rem;
   font-family: 'Fira Mono', sans-serif;
   font-weight: 500;
   padding: .5em .65em;
   border-radius: 4px;
   color: ${props => props.theme.primaryText};

   &:hover {
      background: ${props => props.theme.background};
   }

   &.active {
      background: ${props => props.theme.third};
   }
`;

export const BarsButton = styled.div`
   position: relative;
   width: 45px;
   height: 45px;
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;
   transition: all 0.5s ease-in-out;

   ${bps.desktop} {
      display: none;
}
`;


const barsAnimation = `
   transform: translateX(-100px);
   background: transparent;
   box-shadow: none;

   &::before {
      transform: rotate(45deg) translate(65px, -65px);
   }

   &::after {
      transform: rotate(-45deg) translate(65px, 65px);
   }
`;

const mobileMenu = `
   height: 100vh;
   transition: height .3s ease-in-out;
`;

export const Bars = styled.div`
   width: 20px;
   height: 4px;
   background: #000;
   border-radius: 5px;
   transition: all 0.3s ease-in-out;
   z-index: 10;

   &::after,
   &::before {
      content: "";
      position: absolute;
      width: 30px;
      height: 4px;
      background: #000;
      border-radius: 5px;
      transition: all 0.3s ease-in-out;
   }

   &::before {
      transform: translateY(-12px);
   }

   &::after {
      transform: translateY(12px);
   }

   ${props => props.open === 'true'
      && barsAnimation}
`;

export const MobileMenu = styled.menu`
   background: ${props => props.theme.mobileMenuBackground};
   position: absolute;
   width: 100vw;
   height: 0px;
   overflow: hidden;
   top: -18px;
   right: -32px;
   z-index: 1;
   margin: 0;
   display: flex;
   align-items: center;
   justify-content: center;
   transition: height .3s ease-in-out;

   ${props => props.open === 'true'
      && mobileMenu}
`;

export const MobileNavLinksList = styled.ul`
   display: flex;
   gap: 2em;
   flex-direction: column;
   align-items: center;
   margin-right: 3.5em;
`;