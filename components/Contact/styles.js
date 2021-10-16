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

export const TitleContainer = styled.section``;

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
   grid-template-columns: minmax(300px, 450px) 1fr;
   align-items: center;
   gap: 4em;
`;

export const Content = styled.p`
   margin: 1em 0;
   line-height: 1.5em;
   text-align: center;
   font-size: .9rem;
   margin-top: 1.25em;

   ${bps.desktop} {
      font-size: 1rem;
   }
`;