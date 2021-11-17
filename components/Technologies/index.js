import { HighlightText, SectionTitle } from '../../styles/general';
import { TechCard } from '../TechCard';
import { techArr } from '../../data';

import {
  Button,
  ButtonsContainer,
  TechContainer,
  TechnologiesContainer,
  TitleContainer
} from './styles';


export const Technologies = () => {

  return (
    <TechnologiesContainer id="technologies">
      <TitleContainer>
        <SectionTitle> Tecnologías <HighlightText>.</HighlightText> </SectionTitle>
        <ButtonsContainer>
          <Button>
            Todos
          </Button>
          <Button>
            Front-end
          </Button>
          <Button>
            Back-end
          </Button>
          <Button>
            Otros
          </Button>
        </ButtonsContainer>
      </TitleContainer>
      <TechContainer>
        {
          techArr.map((tech, i) => {
            return <TechCard key={i} title={tech.tech} logo={tech.logo} />;
          })
        }
      </TechContainer>
    </TechnologiesContainer>
  );
};