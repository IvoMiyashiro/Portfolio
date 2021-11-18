import { Link } from 'react-scroll';
import styled from 'styled-components';
import { bps } from '../../styles/breakpoints';

export const NavContainer = styled.header`
   position: sticky;
   -webkit-backdrop-filter: blur(14px) saturate(180%);
   backdrop-filter: blur(14px) saturate(180%);
   background-color: rgba(255, 255, 255, 0.75);
   border-radius: 12px;
   box-shadow:
    0px 0px 2.2px rgba(0, 0, 0, 0.008),
    0px 0px 5.3px rgba(0, 0, 0, 0.012),
    0px 0px 10px rgba(0, 0, 0, 0.015),
    0px 0px 17.9px rgba(0, 0, 0, 0.018),
    0px 0px 33.4px rgba(0, 0, 0, 0.022),
    0px 0px 80px rgba(0, 0, 0, 0.03);
   top: 8px;
   width: 95%;
   max-width: 1640px;
   margin: 0 auto;
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
   z-index: 10;

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
   gap: 2.25em;
`;

export const Dot = styled.span`
  opacity: 0;
  color: ${props => props.theme.highlight};
  font-size: 3rem;

  ${bps.desktop} {
    font-size: 2.25rem;
  }
`;

export const Navlink = styled(Link)`
   cursor: pointer;
   font-size: 1.1rem;
   font-family: 'Fira Mono', sans-serif;
   font-weight: 500;
   border-radius: 4px;
   color: ${(props) => props.theme.primaryText};
   display: flex;
   align-items: center;
   flex-direction: column;
   line-height: .5em;
  position: relative; 

   &.active {
      ${Dot} {
      position: absolute;
      top: 8px;
      opacity: 1;
      }
    }

    &:last-child {
      background: black;
      padding: .65em 1em;
      margin-top: -12px;
      color: white;
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
   height: 98vh;
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
   border-radius: 12px;
   box-shadow:
    0px 0px 2.2px rgba(0, 0, 0, 0.008),
    0px 0px 5.3px rgba(0, 0, 0, 0.012),
    0px 0px 10px rgba(0, 0, 0, 0.015),
    0px 0px 17.9px rgba(0, 0, 0, 0.018),
    0px 0px 33.4px rgba(0, 0, 0, 0.022),
    0px 0px 80px rgba(0, 0, 0, 0.03); 
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
   gap: .5em;
   flex-direction: column;
   margin-right: 3.5em;
   text-align: left;
   width: 100%;
`;


export const NavlinkMobile = styled(Link)`
   cursor: pointer;
   font-size: 1.5rem;
   font-family: 'Fira Mono', sans-serif;
   font-weight: 500;
   border-radius: 4px;
   color: ${(props) => props.theme.primaryText};
   font-weight: 600;

   &.active {

     ${Dot} {
      opacity: 1;
     }
   }
`;

export const LinkContainer = styled.div`
  height: 80px;
  width: 100%;
`;
