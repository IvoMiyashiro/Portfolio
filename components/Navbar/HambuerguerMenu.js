import { useState, useEffect } from 'react';

import {
  Dot,
  LinkContainer,
  MobileMenu,
  MobileNavLinksList,
  NavlinkMobile
} from './styles';

export const HambuerguerMenu = ({ isOpen, setMobileMenuOpen }) => {

  const [link1, setLink1] = useState(false);
  const [link2, setLink2] = useState(false);
  const [link3, setLink3] = useState(false);
  const [link4, setLink4] = useState(false);
  const [link5, setLink5] = useState(false);

  useEffect(() => {
    if (isOpen !== 'false') {
      const animation1 = setInterval(() => {
        setLink1(true);
      }, [200]);
      const animation2 = setInterval(() => {
        setLink2(true);
      }, [300]);
      const animation3 = setInterval(() => {
        setLink3(true);
      }, [400]);
      const animation4 = setInterval(() => {
        setLink4(true);
      }, [500]);
      const animation5 = setInterval(() => {
        setLink5(true);
      }, [600]);
      return () => {
        clearInterval(animation1);
        clearInterval(animation2);
        clearInterval(animation3);
        clearInterval(animation4);
        clearInterval(animation5);
      };
    }

    setLink1(false);
    setLink2(false);
    setLink3(false);
    setLink4(false);
    setLink5(false);
  }, [isOpen]);

  const handleOpenMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  return (
    <MobileMenu isOpen={isOpen}>
      {
        isOpen
        &&
        <MobileNavLinksList>
          <LinkContainer>
            {
              link1
              &&
              <NavlinkMobile
                to="hero"
                smooth={true}
                offset={-80}
                spy={true}
                speed={500}
                exact='true'
                className={link1 ? 'animate__animated animate__rollIn' : ''}
                onClick={handleOpenMenu}
              >
                Home<Dot>.</Dot>
              </NavlinkMobile>
            }
          </LinkContainer>
          <LinkContainer>
            {
              link2
              &&
              <NavlinkMobile
                to="about"
                smooth={true}
                offset={-70}
                spy={true}
                exact='true'
                className={link2 ? 'animate__animated animate__rollIn' : ''}
                onClick={handleOpenMenu}
              >
                About<Dot>.</Dot>
              </NavlinkMobile>
            }
          </LinkContainer>
          <LinkContainer>
            {
              link3
              &&
              <NavlinkMobile
                to="tech"
                smooth={true}
                offset={-40}
                spy={true}
                exact='true'
                className={link3 ? 'animate__animated animate__rollIn' : ''}
                onClick={handleOpenMenu}
              >
                Techs<Dot>.</Dot>
              </NavlinkMobile>
            }
          </LinkContainer>
          <LinkContainer>
            {
              link4
              &&
              <NavlinkMobile
                to="projects"
                smooth={true}
                offset={-40}
                spy={true}
                speed={500}
                exact='true'
                className={link4 ? 'animate__animated animate__rollIn' : ''}
                onClick={handleOpenMenu}
              >
                Projects<Dot>.</Dot>
              </NavlinkMobile>
            }
          </LinkContainer>
          <LinkContainer>
            {
              link5
              &&
              <NavlinkMobile
                to="contact"
                smooth={true}
                offset={-30}
                spy={true}
                speed={500}
                exact='true'
                className={link5 ? 'animate__animated animate__rollIn' : ''}
                onClick={handleOpenMenu}
              >
                Contact<Dot>.</Dot>
              </NavlinkMobile>
            }
          </LinkContainer>
        </MobileNavLinksList>
      }
    </MobileMenu>
  );
};
