import styled from 'styled-components';
import { bps } from '../../styles/breakpoints';

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

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1em;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  font-size: 1rem;
  cursor: pointer;
`;

export const TechContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5em;
  margin-top: 4em;
`;