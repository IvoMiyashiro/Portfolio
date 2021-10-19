import { Link } from 'react-scroll';
import styled from 'styled-components';
import { bps } from '../../styles/breakpoints';

export const NavContainer = styled.header`
   position: sticky;
   -webkit-backdrop-filter: blur(5px);
   backdrop-filter: blur(5px);
   top: 0;
   height: 80px;
   margin-top: -80px;
   z-index: 10;
   transition: top 0.2s ease-in-out;
`;

export const Nav = styled.nav`
   display: flex;
   align-items: center;
   justify-content: space-between;
   width: 90%;
   max-width: 1640px;
   margin: 0 auto;
   height: 100%;
`;

export const LogoSection = styled(Link)`
   position: relative;
   width: 80px;
   height: 80px;
   cursor: pointer;
   transition: transform 0.3s ease-in-out;

   &:hover {
      transform: scale(1.05);
      transition: transform 0.3s ease-in-out;
   }
`;

export const BarsSection = styled.section``;

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
   padding: 0.5em 0.65em;
   border-radius: 4px;
   color: ${(props) => props.theme.primaryText};

   &:hover {
      background: ${(props) => props.theme.background};
   }

   &.active {
      background: ${(props) => props.theme.third};
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
   transition: all 0.2s ease-in-out;

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
   transition: height .2s ease-in-out;
`;

export const Bars = styled.div`
   width: 20px;
   height: 4px;
   background: #000;
   border-radius: 5px;
   transition: all 0.2s ease-in-out;
   z-index: 10;

   &::after,
   &::before {
      content: '';
      position: absolute;
      width: 30px;
      height: 4px;
      background: #000;
      border-radius: 5px;
      transition: all 0.2s ease-in-out;
   }

   &::before {
      transform: translateY(-12px);
   }

   &::after {
      transform: translateY(12px);
   }

   ${(props) => props.isOpen === 'true' && barsAnimation}
`;

export const MobileMenu = styled.menu`
   background: ${(props) => props.theme.mobileMenuBackground};
   position: fixed;
   width: 100%;
   height: 0px;
   overflow: hidden;
   top: 0;
   left: 0;
   z-index: 1;
   margin: 0;
   padding-right: 1.15em;
   display: flex;
   align-items: center;
   justify-content: center;
   transition: height 0.2s ease-in-out;

   ${(props) => props.isOpen === 'true' && mobileMenu}
`;

export const MobileNavLinksList = styled.ul`
   display: flex;
   gap: 2em;
   flex-direction: column;
   align-items: center;
   margin-right: 3.5em;
`;
