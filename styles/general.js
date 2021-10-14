import styled from 'styled-components';

export const ContentContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   gap: 1.35em;
   height: 100vh;
   width: 80%;
   max-width: 1000px;
   margin: 0 auto;
`;

export const Headline = styled.h3`
   color: ${props => props.theme.highlight};
   font-size: 1.25rem;
   margin: 0;
   font-family: 'Fira Mono', sans-serif;
`

export const HighlightText = styled.span`
   color: ${props => props.theme.highlight}
`