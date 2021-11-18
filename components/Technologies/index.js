import { useState } from 'react';

import { TechDisplay } from './TechDisplay';
import { HighlightText, SectionTitle } from '../../styles/general';

import { techArr } from '../../data';
import { frontendTechArr } from '../../data';
import { backendTechArr } from '../../data';
import { othersTechArr } from '../../data';

import {
  Button,
  ButtonsContainer,
  CoolUnderline,
  TechnologiesContainer,
  TitleContainer
} from './styles';

export const Technologies = () => {

  const ACTIVE_SECTION_INIT_STATE = {
    all: true,
    front: false,
    back: false,
    others: false,
  };

  const [techList, setTechList] = useState(techArr);
  const [activeSection, setActiveSection] = useState(ACTIVE_SECTION_INIT_STATE);

  const handleCurrentSection = (section) => {
    setTechList(section);
    if (section === techArr) {
      setActiveSection(ACTIVE_SECTION_INIT_STATE);
    } else if (section === frontendTechArr) {
      setActiveSection({
        all: false,
        front: true,
        back: false,
        others: false,
      });
    } else if (section === backendTechArr) {
      setActiveSection({
        all: false,
        front: false,
        back: true,
        others: false,
      });
    } else if (section === othersTechArr) {
      setActiveSection({
        all: false,
        front: false,
        back: false,
        others: true,
      });
    }
  };

  return (
    <TechnologiesContainer id="tech">
      <TitleContainer>
        <SectionTitle> Tecnologías <HighlightText>.</HighlightText> </SectionTitle>
        <ButtonsContainer>
          <Button
            onClick={() => handleCurrentSection(techArr)}
          >
            Todos
            {
              activeSection.all && <CoolUnderline className="animate__animated animate__headShake" />
            }
          </Button>
          <Button
            onClick={() => handleCurrentSection(frontendTechArr)}
          >
            Frontend
            {
              activeSection.front && <CoolUnderline className="animate__animated animate__headShake" />
            }
          </Button>
          <Button
            onClick={() => handleCurrentSection(backendTechArr)}
          >
            Backend
            {
              activeSection.back && <CoolUnderline className="animate__animated animate__headShake" />
            }
          </Button>
          <Button
            onClick={() => handleCurrentSection(othersTechArr)}
          >
            Otros
            {
              activeSection.others && <CoolUnderline className="animate__animated animate__headShake" />
            }
          </Button>
        </ButtonsContainer>
      </TitleContainer>
      <TechDisplay techArr={techList} />

    </TechnologiesContainer>
  );
};
