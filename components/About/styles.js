import styled from 'styled-components';
import { bps } from '../../styles/breakpoints';

export const AboutSection = styled.div`
   background: transparent;
   position: relative;
   z-index: 0;
   transition: 0.3s ease-in-out;
`;

export const AboutContainer = styled.div`
   width: 85%;
   margin: 0 auto;

   ${bps.desktop} {
      width: 80%;
      max-width: 1000px;
   }
`;

export const MainInfoSection = styled.section`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 3em;
   margin-top: 1.5em;

   ${bps.desktop} {
      flex-direction: row;
      justify-content: space-between;
   }
`;

export const ImageContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   position: relative;
   border-radius: 50%;
   overflow: hidden;
   width: 250px;
   height: 250px;

   ${bps.desktop} {
      width: 300px;
      height: 300px;
      order: 1;
   }
`;

export const GradientCircle = styled.div`
   position: absolute;
   width: 265px;
   height: 265px;
   border-radius: 21rem;
   background: radial-gradient(110.88% 79.69% at 47.77% 151.82%, #ffec45 0%, rgba(255, 236, 69, 0.3) 54.92%, rgba(255, 236, 69, 0) 96.11%), radial-gradient(50% 68.23% at 98.21% 96.61%, #41d1b7 0%, rgba(65, 209, 183, 0.35) 49.27%, rgba(65, 209, 183, 0) 100%), radial-gradient(83.71% 75.52% at -10.04% 2.86%, #8263db 0%, rgba(129, 114, 218, 0.26) 56.87%, rgba(129, 114, 218, 0) 100%), linear-gradient(180deg, #58ccdc 0%, rgba(88, 204, 220, 0) 100%), linear-gradient(81.23deg, #ff557e 21.4%, rgba(255, 85, 85, 0) 84.87%), #f2f5fa;
   background-blend-mode: normal, normal, darken, normal, normal, normal;
   filter: blur(43px);
`;

export const TextInfo = styled.section`
   font-size: 0.9rem;
   line-height: 1.5em;
   text-align: justify;
   text-justify: inter-cluster;
   max-width: 600px;
   margin: 0;

   ${bps.desktop} {
      order: 0;
      font-size: 1rem;
   }
`;

export const FirstP = styled.p`
   margin: 0;
`;

export const SecondP = styled.p`
   margin: 1em 0;
`;
