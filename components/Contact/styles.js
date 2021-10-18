import { BsCheckCircle } from 'react-icons/bs';
import styled from 'styled-components';
import { bps } from '../../styles/breakpoints';

export const ContactSection = styled.div`
   width: 85%;
   margin: 0 auto;
   padding-top: 5em;

   ${bps.desktop} {
      width: 80%;
      max-width: 1000px;
      padding-top: 7em;
   }
`;

export const TitleContainer = styled.section`
   position: relative;
   z-index: 1;
`;

export const Title = styled.h1`
   font-size: 1.75rem;
   font-family: 'Inter', sans-serif;
   text-align: center;
   margin: 0;

   ${bps.desktop} {
      font-size: 2.25rem;
   }
`;

export const ContactContainer = styled.div`
   margin-top: 2em;
   display: grid;
   grid-template-rows: 125px 1fr;
   justify-content: center;
   align-items: center;
   gap: 2em;

   ${bps.desktop} {
      grid-template-rows: 450px;
      grid-template-columns: minmax(300px, 450px) 1fr;
      gap: 4em;
   }
`;

export const Content = styled.p`
   margin: 1em 0;
   line-height: 1.5em;
   text-align: center;
   font-size: .9rem;
   margin-top: 1.25em;
   max-width: 450px;

   ${bps.desktop} {
      font-size: 1rem;
   }
`;

export const GradientContainer = styled.div`
   width: 240px;
   height: 240px; 
   border-radius: 15rem; 
   background: 
      radial-gradient(105.68% 45.69% at 92.95% 50%,
      rgba(105, 244, 253, 0.5) 0%,
      rgba(160, 255, 244, 0.095) 53.91%,
      rgba(254, 216, 255, 0) 100%),
      radial-gradient(103.18% 103.18% at 90.11% 102.39%, #C9FFF2 0%,
      rgba(230, 255, 250, 0) 100%),
      radial-gradient(90.45% 90.45% at 87.84% 9.55%, #FFD2F5 0%,
      rgba(254, 219, 246, 0) 100%),
      linear-gradient(135.66deg, rgba(203, 185, 255, 0.8) 14.89%,
      rgba(216, 202, 254, 0) 74.33%);
   background-blend-mode: normal, normal, normal, normal, normal, normal;
   filter: blur(50px);
   position: absolute;
   top: -60px;
   right: 100px;
   z-index: -1;
`;

export const MessageContainer = styled.div`
   position: fixed;
   padding: 0.5em;
   background-color: #B1E693;
   color: green;
   border: 2px solid #6ECB63;
   bottom: 0;
   top: 50%;
   left: 50%;
`;

export const Message = styled.p`
   font-size: 0.85rem;
   margin: 0;
`;

export const CheckIcon = styled(BsCheckCircle)`
   color: #fff;
   font-size: 1.35rem;
`;