import styled from 'styled-components';
import { bps } from '../../styles/breakpoints';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { IoMailOpenSharp } from 'react-icons/io5';

const commun = `{
   font-size: 1.25rem;
   transition: .2s ease-in-out;

   &:hover {
      transition: .2s ease-in-out;
      transform: translateY(-6px);
   }
}`;

export const FooterContainer = styled.footer`
   display: flex;
   flex-direction: column;
   margin-top: 8em;
   padding: 1em 0;
`;

export const Text = styled.p`
   font-size: 0.8rem;
   font-family: 'Fira Mono', sans-serif;
   text-align: center;
   font-weight: 500;

   ${bps.desktop} {
      font-size: 0.9rem
   }
`;

export const SocialMediaContainer = styled.div`
   display: flex;
   justify-content: center;
   gap: 1em;

   ${bps.desktop} {
      display: none;
   }
`;

export const GithubIcon = styled(BsGithub)`
   ${commun}
   &:hover {
      color: ${props => props.theme.highlight};
   }
`;

export const LinkedInIcon = styled(BsLinkedin)`
   ${commun}
   &:hover {
      color: ${props => props.theme.highlight};
   }
`;

export const EmailIcon = styled(IoMailOpenSharp)`
   ${commun}
   &:hover {
      color: ${props => props.theme.highlight};
   }
`;