import { Link } from 'react-scroll';
import { SocialMediaAnchor } from '../SocialMediaColumn/styles';
import { FooterContainer, SocialMediaContainer, Text, EmailIcon, GithubIcon, LinkedInIcon } from './styles';

export const Footer = () => {
   return (
      <FooterContainer>
         <Text> Diseñado y Creado por Ivan Miyashiro </Text>
         <SocialMediaContainer>
            <SocialMediaAnchor href="https://github.com/IvoMiyashiro" target="_blank">
               <GithubIcon />
            </SocialMediaAnchor>
            <SocialMediaAnchor href="https://www.linkedin.com/in/ivanmiyashiro/" target="_blank">
               <LinkedInIcon />
            </SocialMediaAnchor>
            <Link
               to="contact"
               smooth={true}
               offset={90}
               spy={true}
               exact="true"
            >
               <EmailIcon />
            </Link>
         </SocialMediaContainer>
      </FooterContainer>
   );
};
