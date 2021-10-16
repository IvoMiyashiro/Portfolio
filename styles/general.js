import styled from 'styled-components';
import { bps } from './breakpoints';

export const Headline = styled.h3`
   color: ${(props) => props.theme.highlight};
   font-size: 1rem;
   margin: 0;
   font-family: 'Fira Mono', sans-serif;
`;

export const HighlightText = styled.span`
   color: ${(props) => props.theme.highlight};
`;

export const SectionTitle = styled.h2`
   font-size: 1.75rem;
   font-family: 'Inter', sans-serif;
   text-align: center;
   margin: 0;

   ${bps.desktop} {
      text-align: left;
      font-size: 2.25rem;
   }
`;

export const LoaderContainer = styled.div``;

export const PageContainer = styled.div`
   display: block;
`;

export const GradientHero = styled.div`
   border-radius: 25rem;
   background: radial-gradient(
         110.88% 79.69% at 47.77% 151.82%,
         #ffec45 0%,
         rgba(255, 236, 69, 0.3) 54.92%,
         rgba(255, 236, 69, 0) 96.11%
      ),
      radial-gradient(
         50% 68.23% at 98.21% 96.61%,
         #41d1b7 0%,
         rgba(65, 209, 183, 0.35) 49.27%,
         rgba(65, 209, 183, 0) 100%
      ),
      radial-gradient(
         83.71% 75.52% at -10.04% 2.86%,
         #8263db 0%,
         rgba(129, 114, 218, 0.26) 56.87%,
         rgba(129, 114, 218, 0) 100%
      ),
      linear-gradient(180deg, #58ccdc 0%, rgba(88, 204, 220, 0) 100%),
      linear-gradient(81.23deg, #ff557e 21.4%, rgba(255, 85, 85, 0) 84.87%),
      #f2f5fa;
   background-blend-mode: normal, normal, darken, normal, normal, normal;
   filter: blur(80px);
   position: absolute;
   z-index: -1;
   bottom: -250px;
   right: -250px;
   display: none;

   ${bps.desktop} {
      display: block;
      width: 440px;
      height: 440px;
   }
`;

export const GradientAbout = styled.div`
   border-radius: 15rem;
   background: radial-gradient(
         77.95% 77.95% at 74.66% 58.07%,
         rgba(255, 254, 220, 0.8) 0%,
         rgba(255, 255, 255, 0.152) 62.28%,
         rgba(255, 255, 255, 0) 100%
      ),
      radial-gradient(
         89.67% 70.39% at 93.75% 92.16%,
         #29c2d7 0%,
         rgba(144, 160, 215, 0.49) 52.46%,
         rgba(255, 156, 156, 0) 100%
      ),
      radial-gradient(
         68.86% 68.86% at 94.55% 1.7%,
         #fadc90 0%,
         rgba(250, 220, 144, 0) 100%
      ),
      linear-gradient(
         130.87deg,
         rgba(245, 115, 122, 0.78) 3.47%,
         rgba(245, 115, 122, 0) 77.25%
      );
   background-blend-mode: overlay, normal, normal, normal, normal, normal;
   filter: blur(50px);
   position: absolute;
   z-index: -1;
   left: -200px;
   bottom: -1350px;
   display: none;

   ${bps.desktop} {
      display: block;
      width: 440px;
      height: 440px;
   }
`;
