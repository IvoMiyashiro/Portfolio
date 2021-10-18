import NodeLogo from '../Logos/Node';
import MongoLogo from '../Logos/Mongo';
import ExpressLogo from '../Logos/Express';
import MySqlLogo from '../Logos/MySql';

import { Headline } from '../../styles/general';
import { TextInfo } from '../About/styles';
import {
   CheckIcon,
   DetailsSection,
   SvgSection,
   TechContainer,
   TechItem,
   TechList,
   TechListContainer
} from './styles';

export const Backend = () => {
   return (
      <TechContainer>
         <DetailsSection>
            <Headline> Back-end </Headline>
            <br />
            <TextInfo> El desarrollo Backend es un área que cada vez más me interesa, esta son algunas de las tecnologías que manejo : </TextInfo>
            <TechListContainer>
               <TechList>
                  <TechItem><CheckIcon /> NodeJS </TechItem>
                  <TechItem><CheckIcon /> MongoDB </TechItem>
                  <TechItem><CheckIcon /> Express </TechItem>
                  <TechItem><CheckIcon /> PHP </TechItem>
                  <TechItem><CheckIcon /> MySQL </TechItem>
               </TechList>
            </TechListContainer>
         </DetailsSection>
         <SvgSection>
            <NodeLogo width={85} height={25} />
            <MongoLogo width={75} height={65} />
            <ExpressLogo width={75} height={35} />
            <MySqlLogo width={75} height={65} />
         </SvgSection>
      </TechContainer>
   );
};
