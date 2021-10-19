import { useRef, useState } from 'react';
import { HambuerguerMenu } from './HambuerguerMenu';
import { NavLinksDesktop } from './NavLinksDesktop';
import Image from 'next/image';

import {
   Bars,
   BarsButton,
   BarsSection,
   LogoSection,
   Nav,
   NavContainer,
   NavlinksSection,
} from './styles';

export const Navbar = () => {
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
   const navbarRef = useRef(null);

   const handleMobileMenuOpen = () => {
      setMobileMenuOpen((prev) => !prev);
   };

   return (
      <NavContainer ref={navbarRef}>
         <Nav>
            <LogoSection to="hero" smooth={true}>
               <Image src="/assets/logo.png" layout="fill" />
            </LogoSection>
            <BarsSection>
               <BarsButton
                  isOpen={mobileMenuOpen.toString()}
                  onClick={handleMobileMenuOpen}
               >
                  <Bars isOpen={mobileMenuOpen.toString()}></Bars>
               </BarsButton>
               <HambuerguerMenu
                  isOpen={mobileMenuOpen.toString()}
                  setMobileMenuOpen={setMobileMenuOpen}
               />
            </BarsSection>
            <NavlinksSection>
               <NavLinksDesktop />
            </NavlinksSection>
         </Nav>
      </NavContainer>
   );
};
