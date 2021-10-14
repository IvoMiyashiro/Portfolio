import { HighlightText, SectionTitle } from '../../styles/general';
import {
   DetailsSection,
   SvgSection,
   TechContainer,
   TechnologiesContainer
} from './styles';

export const Technologies = () => {
   return (
      <TechnologiesContainer>
         <SectionTitle> Tecnologías <HighlightText>.</HighlightText> </SectionTitle>
         <TechContainer>
            <SvgSection>

            </SvgSection>
            <DetailsSection>

            </DetailsSection>
         </TechContainer>
         <TechContainer>
            <SvgSection>

            </SvgSection>
            <DetailsSection>

            </DetailsSection>
         </TechContainer>
         <TechContainer>
            <SvgSection>

            </SvgSection>
            <DetailsSection>
            </DetailsSection>
         </TechContainer>
      </TechnologiesContainer>
   );
};