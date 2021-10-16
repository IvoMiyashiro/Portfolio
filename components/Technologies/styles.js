import styled from 'styled-components';
import { bps } from '../../styles/breakpoints';
import { BsCheckCircle } from 'react-icons/bs';

export const TechnologiesContainer = styled.section`
   width: 85%;
   margin: 0 auto;
   padding-top: 5em;

   ${bps.desktop} {
      width: 80%;
      max-width: 1000px;
      padding-top: 7em;
   }
`;

export const TechCategoriesContainer = styled.div`
   display: flex;
   flex-direction: column;
   gap: 5em;
`;

export const TechContainer = styled.div`
   display: flex;
   flex-direction: column;
   gap: 3em;

   ${bps.desktop} {
      flex-direction: row;
      gap: 6em;
   }

   &:first-child {
      margin-top: 3em;
   }

   &:nth-of-type(2) {
      justify-content: flex-end;
   }
`;

export const SvgSection = styled.section`
   display: none;
   flex-wrap: wrap;
   width: 290px;
   min-width: 290px;
   max-height: 340px;
   justify-content: center;
   align-items: center;
   gap: 3em 2em;
   order: 1;
   margin: 0 auto;

   ${bps.desktop} {
      display: flex;
      order: 0;
      margin: 0;
   }
`;

export const DetailsSection = styled.div`
   max-width: 450px;
`;

export const TextInfo = styled.p`
   font-size: .9rem;
   line-height: 1.5em;
   text-align: justify;
   text-justify: inter-cluster;
   margin: 0;
   
   ${bps.desktop} {
      order: 0;
      font-size: 1rem;
   }
`;

export const TechListContainer = styled.section`
   display: flex;
   gap: 1.75em;
   flex-wrap: wrap;
`;

export const TechList = styled.ul`
   list-style: none;
   margin: 0;
   padding: 0;
   margin-top: 1.75em;
   display: grid;
   width: 100%;
   grid-template-columns: repeat(auto-fit, 115px);
   gap: 1.5em;
`;

export const TechItem = styled.li`
   display: flex;
   align-items: center;
   gap: .5em;
   font-size: .9rem;

   ${bps.desktop} {
      font-size: 1rem;
   }
`;

export const CheckIcon = styled(BsCheckCircle)`
   color: #3aa346;
`;
