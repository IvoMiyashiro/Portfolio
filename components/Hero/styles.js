import styled from 'styled-components';

export const HeroSection = styled.div`
   min-height: 100vh;
`;

export const MainTitle = styled.h1`
   margin: 0;
   font-size: 3.65rem;
   font-family: 'Inter', sans-serif;
   letter-spacing: -0.5px;
`;

export const UnderlineWord = styled.div`
   display: inline-block;
   position: relative;
`;

export const CoolUnderline = styled.div`
   position: absolute;
   bottom: 3px;
   height: 8px;
   width: 100%;
   background: linear-gradient(90deg, #ff9897 0%, #f650a0  100%);
   transform: rotate(-0.5deg);
`;

export const Quote = styled.legend`
   font-size: 1.1rem;
   max-width: 675px;
   line-height: 1.5em;
   text-align: justify;
   text-justify: inter-cluster;
`;

export const Button = styled.button`
   width: 300px;
   height: 50px;
   background: transparent;
   color: ${props => props.theme.secondary};
   background: ${props => props.theme.primary};
   border-radius: 4px;
   font-size: 1.1rem;
   cursor: pointer;
   margin-top: 2.75rem;
   font-family: 'Fira Mono', sans-serif;
   font-weight: 500;
   letter-spacing: 1px;
   transition: .2s ease-in-out;
   border: none;

   &:hover {
      background: ${props => props.theme.primary};
      color: ${props => props.theme.secondary};
      transition: .2s ease-in-out;
   }
`;