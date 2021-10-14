import styled from 'styled-components';
import { bps } from '../../styles/breakpoints';

export const AboutSection = styled.div`

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
   gap: 3em;
   margin-top: 2em;

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

   ${bps.desktop} {
      order: 1;
   }
`;

export const GradientCircle = styled.div`
position: absolute;
   width: 265px;
   height: 265px;
   border-radius: 21rem;
   background: 
      radial-gradient(110.88% 79.69% at 47.77% 151.82%, #FFEC45 0%, rgba(255, 236, 69, 0.3) 54.92%, rgba(255, 236, 69, 0) 96.11%),
      radial-gradient(50% 68.23% at 98.21% 96.61%, #41D1B7 0%, rgba(65, 209, 183, 0.35) 49.27%, rgba(65, 209, 183, 0) 100%),
      radial-gradient(83.71% 75.52% at -10.04% 2.86%, #8263DB 0%, rgba(129, 114, 218, 0.26) 56.87%, rgba(129, 114, 218, 0) 100%),
      linear-gradient(180deg, #58CCDC 0%, rgba(88, 204, 220, 0) 100%),
      linear-gradient(81.23deg, #FF557E 21.4%, rgba(255, 85, 85, 0) 84.87%), #F2F5FA;
   background-blend-mode: normal, normal, darken, normal, normal, normal; filter: blur(43px);
`;

export const ImageEg = styled.div`
   width: 275px;
   height: 275px;
   background-color: black;
   border-radius: 4px;
   z-index: 5;
`;

export const TextInfo = styled.p`
   font-size: .9rem;
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