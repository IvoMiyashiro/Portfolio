import styled from 'styled-components';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { IoMailOpenSharp } from 'react-icons/io5';

const commun = `{
   font-size: 1.65rem;
   transition: .2s ease-in-out;

   &:hover {
      transition: .2s ease-in-out;
      transform: translateY(-6px);
   }
}`;

export const SocialMediaList = styled.ul`
   position: fixed;
   bottom: 0;
   left: 3em;
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 2.5em;
   padding: 0;
   margin: 0;
`;

export const SocialMediaAnchor = styled.a`
   cursor: pointer;
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

export const Line = styled.div`
   height: 150px;
   width: 1px;
   background: ${props => props.theme.primary};
`;