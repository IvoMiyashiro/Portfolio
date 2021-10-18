
import { Frontend } from './Frontend';
import { Backend } from './Backend';
import { Others } from './Others';

import { HighlightText, SectionTitle } from '../../styles/general';
import { TechCategoriesContainer, TechnologiesContainer } from './styles';


export const Technologies = () => {
   return (
      <TechnologiesContainer id="technologies">
         <SectionTitle> Tecnologías <HighlightText>.</HighlightText> </SectionTitle>
         <TechCategoriesContainer>
            <Frontend />
            <Backend />
            <Others />
         </TechCategoriesContainer>
      </TechnologiesContainer>
   );
};