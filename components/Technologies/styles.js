import styled from 'styled-components';
import { bps } from '../../styles/breakpoints';

export const TechnologiesContainer = styled.section`
   width: 85%;
   margin: 0 auto;
   padding-top: 5em;
   min-height: 1000px;

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
  flex-direction: column;
  align-items: center;
  gap: 2em;

  ${bps.desktop} {
    align-items: center;
    justify-content: space-between;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1.2em;

  ${bps.desktop} {
    gap: 2em;
  }
`;

export const Button = styled.button`
  position: relative;
  border: none;
  background-color: transparent;
  font-size: 1rem;
  cursor: pointer;
  font-family: 'Fira Mono', monospace;
  padding: 0;
  height: 25px;
`;

export const CoolUnderline = styled.div`
   position: absolute;
   bottom: -1px;
   height: 5px;
   width: 100%;
   background: linear-gradient(90deg, #ff9897 0%, #f650a0 100%);
   transform: rotate(-0.5deg);
   opacity: .8;
   z-index: 0;

   ${bps.desktop} {
      bottom: 3px;
   }
`;

export const TechContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2em;
  margin-top: 4em;

  ${bps.desktop} {
    gap: 2.5em;
  }
`;

