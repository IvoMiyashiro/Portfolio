import { useState } from 'react';
import {
   Bars,
   BarsButton,
   BarsSection,
   LogoSection,
   MobileMenu,
   MobileNavLinksList,
   Nav,
   NavContainer,
   Navlink,
   NavlinksList,
   NavlinksSection
} from './styles';

export const Navbar = () => {

   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

   const handleMobileMenuOpen = () => {
      setMobileMenuOpen(prev => !prev);
   };

   return (
      <NavContainer>
         <Nav>
            <LogoSection>
               Logo
            </LogoSection>
            <BarsSection>
               <BarsButton open={mobileMenuOpen.toString()} onClick={handleMobileMenuOpen}>
                  <Bars open={mobileMenuOpen.toString()}></Bars>
                  <MobileMenu open={mobileMenuOpen.toString()}>
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
                           speed={500}
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
               </BarsButton>
            </BarsSection>
            <NavlinksSection>
               <NavlinksList>
                  <Navlink
                     to="hero"
                     smooth={true}
                     offset={-80}
                     spy={true}
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
                     exact='true'
                  >
                     Projects
                  </Navlink>
                  <Navlink
                     to="contact"
                     smooth={true}
                     offset={-80}
                     spy={true}
                     exact='true'
                  >
                     Contact
                  </Navlink>
               </NavlinksList>
            </NavlinksSection>
         </Nav>
      </NavContainer>
   );
};
