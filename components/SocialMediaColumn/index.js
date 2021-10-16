import { useEffect, useState } from 'react';
import {
   ContactScroll,
   EmailIcon,
   GithubIcon,
   Line,
   LinkedInIcon,
   SocialMediaAnchor,
   SocialMediaList,
} from './styles';

export const SocialMediaColumn = () => {
   const [link1, setLink1] = useState(false);
   const [link2, setLink2] = useState(false);
   const [link3, setLink3] = useState(false);

   useEffect(() => {
      const animation1 = setInterval(() => {
         setLink1(true);
      }, [500]);
      const animation2 = setInterval(() => {
         setLink2(true);
      }, [600]);
      const animation3 = setInterval(() => {
         setLink3(true);
      }, [700]);
      return () => {
         clearInterval(animation1);
         clearInterval(animation2);
         clearInterval(animation3);
      };
   }, []);
   return (
      <SocialMediaList>
         {link3 && (
            <SocialMediaAnchor
               href="https://github.com/IvoMiyashiro"
               target="_blank"
               className="animate__animated animate__zoomIn"
            >
               <GithubIcon />
            </SocialMediaAnchor>
         )}
         {link2 && (
            <SocialMediaAnchor
               href="https://www.linkedin.com/in/ivan-miyashiro-18845b200/"
               target="_blank"
               className="animate__animated animate__zoomIn"
            >
               <LinkedInIcon />
            </SocialMediaAnchor>
         )}
         {link1 && (
            <ContactScroll
               to="contact"
               smooth={true}
               offset={80}
               className="animate__animated animate__zoomIn"
            >
               <EmailIcon />
            </ContactScroll>
         )}
         <Line />
      </SocialMediaList>
   );
};
