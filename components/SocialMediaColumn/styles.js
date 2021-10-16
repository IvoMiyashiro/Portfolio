import styled from 'styled-components';
import { bps } from '../../styles/breakpoints';
import { Link } from 'react-scroll';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { IoMailOpenSharp } from 'react-icons/io5';

const commun = `{
   font-size: 1.5rem;
   transition: .2s ease-in-out;

   &:hover {
      transition: .2s ease-in-out;
      transform: translateY(-6px);
   }
}`;

export const SocialMediaList = styled.ul`
   display: none;
   position: fixed;
   bottom: 0;
   left: 2em;
   padding: 0;
   margin: 0;
   z-index: 1;

   ${bps.desktop} {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.75em;
   }
`;

export const SocialMediaAnchor = styled.a`
   cursor: pointer;
`;

export const GithubIcon = styled(BsGithub)`
   ${commun}
   &:hover {
      color: ${(props) => props.theme.highlight};
   }
`;

export const LinkedInIcon = styled(BsLinkedin)`
   ${commun}
   &:hover {
      color: ${(props) => props.theme.highlight};
   }
`;

export const EmailIcon = styled(IoMailOpenSharp)`
   ${commun}
   &:hover {
      color: ${(props) => props.theme.highlight};
   }
`;

export const Line = styled.div`
   height: 100px;
   width: 1px;
   background: ${(props) => props.theme.primary};
`;

export const ContactScroll = styled(Link)`
   cursor: pointer;
`;
