import { MobileMenu, MobileNavLinksList, Navlink } from './styles';

export const HambuerguerMenu = ({ isOpen, setMobileMenuOpen }) => {

   const handleOpenMenu = () => {
      setMobileMenuOpen(prev => !prev);
   };

   return (
      <MobileMenu isOpen={isOpen}>
         <MobileNavLinksList>
            <Navlink
               to="hero"
               smooth={true}
               offset={-80}
               spy={true}
               speed={500}
               exact='true'
               onClick={handleOpenMenu}
            >
               Home
            </Navlink>
            <Navlink
               to="about"
               smooth={true}
               offset={-80}
               spy={true}
               exact='true'
               onClick={handleOpenMenu}
            >
               About
            </Navlink>
            <Navlink
               to="projects"
               smooth={true}
               offset={-20}
               spy={true}
               speed={500}
               exact='true'
               onClick={handleOpenMenu}
            >
               Projects
            </Navlink>
            <Navlink
               to="contact"
               smooth={true}
               offset={0}
               spy={true}
               speed={500}
               exact='true'
               onClick={handleOpenMenu}
            >
               Contact
            </Navlink>
         </MobileNavLinksList>
      </MobileMenu>
   );
};
