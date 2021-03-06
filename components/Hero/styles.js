import styled from 'styled-components';
import { bps } from '../../styles/breakpoints';

export const HeroSection = styled.div`
   min-height: 100vh;
   overflow-x: hidden;
   overflow-y: visible;
   position: relative;
`;

export const HeroContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   gap: 1.25em;
   height: 100vh;
   width: 85%;
   margin: 0 auto;
   margin-top: 1em;

   ${bps.desktop} {
      gap: 1.35em;
      height: 100vh;
      width: 80%;
      max-width: 1000px;
   }
`;

export const MainTitle = styled.h1`
   margin: 0;
   font-size: 2.5rem;
   font-family: 'Inter', sans-serif;
   letter-spacing: -0.5px;

   ${bps.desktop} {
      font-size: 3.65rem;
   }
`;

export const UnderlineWord = styled.div`
   display: inline-block;
   position: relative;
   z-index: 1;
   top: 0;
`;

export const CoolUnderline = styled.div`
   position: absolute;
   bottom: -1px;
   height: 8px;
   width: 100%;
   background: linear-gradient(90deg, #ff9897 0%, #f650a0 100%);
   transform: rotate(-0.5deg);
   z-index: -1;

   ${bps.desktop} {
      bottom: 3px;
      height: 10px;
   }
`;

export const Quote = styled.legend`
   max-width: 600px;
   line-height: 1.5em;
   text-align: justify;
   text-justify: inter-cluster;
   font-size: 1rem;
`;

export const Anchor = styled.a`
  max-width: 275px;
  height: 50px;
`;

export const Button = styled.button`
   width: 100%;
   max-width: 275px;
   height: 50px;
   background: transparent;
   color: ${(props) => props.theme.secondary};
   background: ${(props) => props.theme.primary};
   border-radius: 4px;
   font-size: 1.1rem;
   cursor: pointer;
   margin-top: 2rem;
   font-family: 'Fira Mono', sans-serif;
   font-weight: 500;
   letter-spacing: 1px;
   transition: 0.2s ease-in-out;
   border: none;

   &:hover {
      background: ${(props) => props.theme.primary};
      color: ${(props) => props.theme.secondary};
      transition: 0.2s ease-in-out;
   }

   ${bps.desktop} {
      margin-top: 2.75rem;
   }
`;
