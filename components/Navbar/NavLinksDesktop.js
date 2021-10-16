import { Navlink, NavlinksList } from './styles';

export const NavLinksDesktop = () => {
   return (
      <NavlinksList>
         <Navlink
            to="hero"
            smooth={true}
            spy={true}
            exact='true'
         >
            Home
         </Navlink>
         <Navlink
            to="about"
            smooth={true}
            offset={-70}
            spy={true}
            exact='true'
         >
            About
         </Navlink>
         <Navlink
            to="projects"
            smooth={true}
            offset={70}
            spy={true}
            exact='true'
         >
            Projects
         </Navlink>
         <Navlink
            to="contact"
            smooth={true}
            offset={70}
            spy={true}
            exact='true'
         >
            Contact
         </Navlink>
      </NavlinksList>
   );
};
