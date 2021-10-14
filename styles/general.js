import styled from 'styled-components';
import { bps } from './breakpoints';

export const Headline = styled.h3`
   color: ${props => props.theme.highlight};
   font-size: 1rem;
   margin: 0;
   font-family: 'Fira Mono', sans-serif;
`;

export const HighlightText = styled.span`
   color: ${props => props.theme.highlight};
`;

export const SectionTitle = styled.h2`
   font-size: 1.75rem;
   font-family: 'Inter', sans-serif;
   margin: 0;

   ${bps.desktop} {
      font-size: 2.25rem
   }
`;