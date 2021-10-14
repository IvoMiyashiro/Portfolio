import { MobileMenu, MobileNavLinksList, Navlink } from './styles';

export const HambuerguerMenu = ({ open }) => {
   return (
      <MobileMenu open={open}>
         <MobileNavLinksList>
            <Navlink
               to="hero"
               smooth={true}
               offset={-80}
               spy={true}
               speed={500}
               exact='true'
            >
               Home
            </Navlink>
            <Navlink
               to="about"
               smooth={true}
               offset={-80}
               spy={true}
               exact='true'
            >
               About
            </Navlink>
            <Navlink
               to="projects"
               smooth={true}
               offset={-80}
               spy={true}
               speed={500}
               exact='true'
            >
               Projects
            </Navlink>
            <Navlink
               to="contact"
               smooth={true}
               offset={-80}
               spy={true}
               speed={500}
               exact='true'
            >
               Contact
            </Navlink>
         </MobileNavLinksList>
      </MobileMenu>
   );
};
