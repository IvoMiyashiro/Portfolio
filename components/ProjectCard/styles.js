import { BsGithub } from 'react-icons/bs';
import styled from 'styled-components';
import { bps } from '../../styles/breakpoints';

export const ProjectCardContainer = styled.div`
   display: flex;
   justify-content: space-between;
   flex-direction: column;
   box-shadow:
      0px 0px 2.2px rgba(0, 0, 0, 0.014),
      0px 0px 5.3px rgba(0, 0, 0, 0.02),
      0px 0px 10px rgba(0, 0, 0, 0.025),
      0px 0px 17.9px rgba(0, 0, 0, 0.03),
      0px 0px 33.4px rgba(0, 0, 0, 0.036),
      0px 0px 80px rgba(0, 0, 0, 0.05);
   border-radius: 8px;
   width: 100%;
   transition: .3s ease-in-out;
   overflow: hidden;

   &:hover {
      box-shadow:
      0px 0px 2.2px rgba(0, 0, 0, 0.022),
      0px 0px 5.3px rgba(0, 0, 0, 0.032),
      0px 0px 10px rgba(0, 0, 0, 0.04),
      0px 0px 17.9px rgba(0, 0, 0, 0.048),
      0px 0px 33.4px rgba(0, 0, 0, 0.058),
      0px 0px 80px rgba(0, 0, 0, 0.08);
      transition: .3s ease-in-out;
   }

   ${bps.desktop} {
      flex-direction: row;
   }
`;

export const CardSection = styled.section`
   position: relative;
   
   &:first-child {
      padding: 1em;
      order: 1;

      ${bps.desktop}{
         max-width: 60%;
         padding: 2em;
      }
   }

   &:last-child {
      border-radius: 4px;
      height: 175px;
      width: 100%;
      margin-top: .35em;
      order: 0;

      ${bps.desktop} {
         height: 300px;
         order: 1;
      }
   }
`;

export const Legend = styled.legend`
   font-family: 'Fira Mono', sans-serif;
   color: ${props => props.theme.highlight};
`;

export const Title = styled.h2`
   margin: 0;
   margin-top: .25em;
`;

export const Description = styled.div`
   margin: 1em 0;
   line-height: 1.5em;
   text-align: justify;
   font-size: .9rem;

   ${bps.desktop} {
      font-size: 1rem;
   }
`;

export const ButtonsSection = styled.section`
   display: flex;
   gap: 1em;
   margin-top: 2em;
`;

export const Button = styled.button`
   border: none;
   background: #000;
   color: #fff;
   height: 40px;
   width: 150px;
   font-family: 'Fira Mono', sans-serif;
   cursor: pointer;
   border-radius: 4px;
`;

export const GithubButton = styled.button`
   border: 2px solid #000;
   background: transparent;
   color: #fff;
   height: 40px;
   width: 40px;
   font-family: 'Fira Mono', sans-serif;
   cursor: pointer;
   border-radius: 4px;
`;

export const GithubIcon = styled(BsGithub)`
   font-size: 1.25rem;
   color: #000;
`;

export const Anchor = styled.a`

`;

export const RepoAnchor = styled.a`
   &:hover {
      text-decoration: underline;
      text-underline-offset: 2px;
   }
`;