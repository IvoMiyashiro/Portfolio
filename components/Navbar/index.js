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

export const Navbar = ({ activeNavlinks, setActiveNavlinks }) => {

   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

   const handleActiveNavlinks = (props) => {
      if (window.innerWidth < 880) {
         setMobileMenuOpen(prev => !prev);
      }
      if (props === 'hero') {
         setActiveNavlinks(prev => ({
            ...prev,
            hero: 'true',
            about: 'false',
            projects: 'false',
            contact: 'false',
         }));
      } else if (props === 'about') {
         setActiveNavlinks(prev => ({
            ...prev,
            hero: 'false',
            about: 'true',
            projects: 'false',
            contact: 'false',
         }));
      } else if (props === 'projects') {
         setActiveNavlinks(prev => ({
            ...prev,
            hero: 'false',
            about: 'false',
            projects: 'true',
            contact: 'false',
         }));
      } else if (props === 'contact') {
         setActiveNavlinks(prev => ({
            ...prev,
            hero: 'false',
            about: 'false',
            projects: 'false',
            contact: 'true',
         }));
      }
   };

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
                           active={activeNavlinks.hero}
                           to="hero"
                           smooth={true}
                           offset={-80}
                           onClick={() => handleActiveNavlinks('hero')}
                           spy={true}
                           exact='true'
                        >
                           Home
                        </Navlink>
                        <Navlink
                           active={activeNavlinks.about}
                           to="about"
                           smooth={true}
                           offset={-80}
                           onClick={() => handleActiveNavlinks('about')}
                           spy={true}
                           exact='true'
                        >
                           About
                        </Navlink>
                        <Navlink
                           active={activeNavlinks.projects}
                           to="projects"
                           smooth={true}
                           offset={-80}
                           onClick={() => handleActiveNavlinks('projects')}
                           spy={true}
                           exact='true'
                        >
                           Projects
                        </Navlink>
                        <Navlink
                           active={activeNavlinks.contact}
                           to="contact"
                           smooth={true}
                           offset={-80}
                           onClick={() => handleActiveNavlinks('contact')}
                           spy={true}
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
                     active={activeNavlinks.hero}
                     to="hero"
                     smooth={true}
                     offset={-80}
                     onClick={() => handleActiveNavlinks('hero')}
                  >
                     Home
                  </Navlink>
                  <Navlink
                     active={activeNavlinks.about}
                     to="about"
                     smooth={true}
                     offset={-80}
                     onClick={() => handleActiveNavlinks('about')}
                  >
                     About
                  </Navlink>
                  <Navlink
                     active={activeNavlinks.projects}
                     to="projects"
                     smooth={true}
                     offset={-80}
                     onClick={() => handleActiveNavlinks('projects')}
                  >
                     Projects
                  </Navlink>
                  <Navlink
                     active={activeNavlinks.contact}
                     to="contact"
                     smooth={true}
                     offset={-80}
                     onClick={() => handleActiveNavlinks('contact')}
                  >
                     Contact
                  </Navlink>
               </NavlinksList>
            </NavlinksSection>
         </Nav>
      </NavContainer>
   );
};
