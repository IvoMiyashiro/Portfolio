import { useEffect, useState } from 'react';

import { Button, CoolUnderline, HeroSection, MainTitle, Quote, UnderlineWord, HeroContainer, Anchor } from './styles';
import { Headline } from '../../styles/general';

export const Hero = () => {
  const [textAnimation, setTextAnimation] = useState(false);
  const [underlineAnimation, setUnderlineAnimation] = useState(false);

  useEffect(() => {
    const animation1 = setInterval(() => {
      setTextAnimation(true);
    }, [1000]);

    const animation2 = setInterval(() => {
      setUnderlineAnimation(true);
    }, [1700]);
    return () => {
      clearInterval(animation1);
      clearInterval(animation2);
    };
  }, []);

  return (
    <HeroSection id="hero">
      {textAnimation && (
        <HeroContainer className="animate__animated animate__fadeIn">
          <Headline> Hola! Mi nombre es </Headline>
          <div>
            <MainTitle> Ivan Miyashiro </MainTitle>
            <MainTitle>
              <UnderlineWord>
                Web Developer.
                {underlineAnimation && <CoolUnderline className="animate__animated animate__zoomIn"></CoolUnderline>}
              </UnderlineWord>
            </MainTitle>
          </div>
          <Quote>Hace un tiempo comencé mi aventura dentro del mundo del desarrollo web y hoy me especializo en tecnologías como React.js y Next.js</Quote>

          <Anchor href="https://drive.google.com/file/d/1l750Nybn02r6vWrsgNotT_40M1otiwaT/view?usp=sharing" target="_blank" rel="noreferrer">
            <Button>Descargar CV</Button>
          </Anchor>
        </HeroContainer>
      )}
    </HeroSection>
  );
};
