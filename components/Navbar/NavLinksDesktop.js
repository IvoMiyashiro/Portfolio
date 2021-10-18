import { useEffect, useState } from 'react';
import { Navlink, NavlinksList } from './styles';

export const NavLinksDesktop = () => {
   const [link1, setLink1] = useState(false);
   const [link2, setLink2] = useState(false);
   const [link3, setLink3] = useState(false);
   const [link4, setLink4] = useState(false);

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
      const animation4 = setInterval(() => {
         setLink4(true);
      }, [800]);
      return () => {
         clearInterval(animation1);
         clearInterval(animation2);
         clearInterval(animation3);
         clearInterval(animation4);
      };
   }, []);

   return (
      <NavlinksList>
         {link4 && (
            <Navlink
               to="hero"
               smooth={true}
               offset={-80}
               spy={true}
               exact="true"
               className="animate__animated animate__zoomIn"
            >
               Home
            </Navlink>
         )}
         {link3 && (
            <Navlink
               to="about"
               smooth={true}
               offset={-80}
               spy={true}
               exact="true"
               className="animate__animated animate__zoomIn"
            >
               About
            </Navlink>
         )}
         {link2 && (
            <Navlink
               to="projects"
               smooth={true}
               offset={20}
               spy={true}
               exact="true"
               className="animate__animated animate__zoomIn"
            >
               Projects
            </Navlink>
         )}

         {link1 && (
            <Navlink
               to="contact"
               smooth={true}
               offset={90}
               spy={true}
               exact="true"
               className="animate__animated animate__zoomIn"
            >
               Contact
            </Navlink>
         )}
      </NavlinksList>
   );
};
