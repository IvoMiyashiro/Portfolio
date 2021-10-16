import { SocialMediaAnchor } from '../SocialMediaColumn/styles';
import { FooterContainer, SocialMediaContainer, Text,EmailIcon, GithubIcon, LinkedInIcon } from './styles';

export const Footer = () => {
   return (
      <FooterContainer>
         <Text> Diseñado y Creado por Ivan Miyashiro </Text>
         <SocialMediaContainer>
            <SocialMediaAnchor href="https://github.com/IvoMiyashiro" target="_blank">
               <GithubIcon />
            </SocialMediaAnchor>
            <SocialMediaAnchor href="https://www.linkedin.com/in/ivan-miyashiro-18845b200/" target="_blank">
               <LinkedInIcon />
            </SocialMediaAnchor>
            <SocialMediaAnchor href="https://github.com/IvoMiyashiro" target="_blank">
               <EmailIcon />
            </SocialMediaAnchor>
         </SocialMediaContainer>
      </FooterContainer>
   );
};
