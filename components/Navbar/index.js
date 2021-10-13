import {
   BarsSection,
   LogoSection,
   Nav,
   NavContainer,
   Navlink,
   NavlinksList,
   NavlinksSection
} from './styles';

export const Navbar = () => {
   return (
      <NavContainer>
         <Nav>
            <LogoSection>
               Logo
            </LogoSection>
            <BarsSection>

            </BarsSection>
            <NavlinksSection>
               <NavlinksList>
                  <Navlink activeClass="active" to="hero" smooth={true} offset={-80}> Home </Navlink>
                  <Navlink activeClass="active" to="about" smooth={true} offset={-80}> About </Navlink>
                  <Navlink activeClass="active" to="projects" smooth={true} offset={-80}> Projects </Navlink>
                  <Navlink activeClass="active" to="contact" smooth={true} offset={-80}> Contact </Navlink>
               </NavlinksList>
            </NavlinksSection>
         </Nav>
      </NavContainer>
   );
};
