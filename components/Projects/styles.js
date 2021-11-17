import styled from 'styled-components';
import { bps } from '../../styles/breakpoints';

export const ProjectsSection = styled.div`
   width: 85%;
   margin: 0 auto;
   padding-top: 5em;

   ${bps.desktop} {
      width: 80%;
      max-width: 1000px;
      padding-top: 7em;
   }
`;

export const ProjectsCardsContainer = styled.section`
   display: flex;
   flex-wrap: wrap;
   gap: 3em;
   margin-top: 3em;

   ${bps.desktop} {
     gap: 6em;
   }
`;
