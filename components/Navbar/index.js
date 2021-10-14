import { useEffect, useRef, useState } from 'react';
import { HambuerguerMenu } from './HambuerguerMenu';
import { NavLinksDesktop } from './NavLinksDesktop';

import {
   Bars,
   BarsButton,
   BarsSection,
   LogoSection,
   Nav,
   NavContainer,
   NavlinksSection
} from './styles';

export const Navbar = () => {

   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
   const navbarRef = useRef(null);

   const handleMobileMenuOpen = () => {
      setMobileMenuOpen(prev => !prev);
   };

   useEffect(() => {

      let prevPosition = window.pageYOffset;
      const handleHideNavbar = () => {
         let currentPosition = window.pageYOffset;

         if (prevPosition > currentPosition) {
            navbarRef.current.style.top = 0;
         } else {
            navbarRef.current.style.top = '-80px';
         }
         prevPosition = currentPosition;
      };

      window.addEventListener('scroll', handleHideNavbar);
      return () => {
         window.removeEventListener('scroll', handleHideNavbar);
      };
   }, []);

   return (
      <NavContainer ref={navbarRef}>
         <Nav>
            <LogoSection>
               Logo
            </LogoSection>
            <BarsSection>
               <BarsButton open={mobileMenuOpen.toString()} onClick={handleMobileMenuOpen}>
                  <Bars open={mobileMenuOpen.toString()}></Bars>
                  <HambuerguerMenu open={mobileMenuOpen.toString()} />
               </BarsButton>
            </BarsSection>
            <NavlinksSection>
               <NavLinksDesktop />
            </NavlinksSection>
         </Nav>
      </NavContainer >
   );
};
