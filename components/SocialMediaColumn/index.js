import {
   EmailIcon,
   GithubIcon,
   Line,
   LinkedInIcon,
   SocialMediaAnchor,
   SocialMediaList
} from './styles';

export const SocialMediaColumn = () => {
   return (
      <SocialMediaList>
         <SocialMediaAnchor href="https://github.com/IvoMiyashiro" target="_blank">
            <GithubIcon />
         </SocialMediaAnchor>
         <SocialMediaAnchor href="https://www.linkedin.com/in/ivan-miyashiro-18845b200/" target="_blank">
            <LinkedInIcon />
         </SocialMediaAnchor>
         <SocialMediaAnchor href="https://github.com/IvoMiyashiro" target="_blank">
            <EmailIcon />
         </SocialMediaAnchor>
         <Line />
      </SocialMediaList>
   );
};
