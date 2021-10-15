import VsCodeLogo from '../Logos/VsCode';
import PostmanLogo from '../Logos/Postman';
import GitLogo from '../Logos/Git';
import GithubLogo from '../Logos/Github';

import { Headline } from '../../styles/general';
import { TextInfo } from '../About/styles';
import { CheckIcon, DetailsSection, SvgSection, TechContainer, TechItem, TechList, TechListContainer } from './styles';
import FirebaseLogo from '../Logos/Firebase';

export const Others = () => {
   return (
      <TechContainer>
         <SvgSection>
            <VsCodeLogo width={65} height={65}/>
            <PostmanLogo width={65} height={65}/>
            <GitLogo width={85} height={35}/>
            <GithubLogo width={55} height={55}/>
            <FirebaseLogo width={65} height={65}/>
         </SvgSection>
         <DetailsSection>
            <Headline> Otras </Headline>
            <br />
            <TextInfo> El desarrollo Frontend es uno de mis fuertes, estos son algunas de las tecnologías que manejo: </TextInfo>
            <TechList>
               <TechItem><CheckIcon/> VS Code </TechItem>
               <TechItem><CheckIcon/> Postman </TechItem>
               <TechItem><CheckIcon/> Git </TechItem>
               <TechItem><CheckIcon/> Github </TechItem>
               <TechItem><CheckIcon/> Firebase </TechItem>
            </TechList>
         </DetailsSection>
      </TechContainer>
   );
};
