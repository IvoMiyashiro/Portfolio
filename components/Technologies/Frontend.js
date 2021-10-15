import HtmlLogo from '../Logos/Html';
import CssLogo from '../Logos/Css';
import Js from '../Logos/Js';
import Tailwind from '../Logos/Tailwind';
import BootstrapLogo from '../Logos/Bootstrap';
import React from '../Logos/React';
import SassLogo from '../Logos/Sass';
import ReduxLogo from '../Logos/Redux';
import Next from '../Logos/Next';

import { CheckIcon, DetailsSection, SvgSection, TechContainer, TechItem, TechList, TechListContainer, TextInfo } from './styles';
import { Headline } from '../../styles/general';


export const Frontend = () => {
   return (
      <TechContainer>
         <SvgSection>
            <HtmlLogo width={65} height={65}/>
            <CssLogo width={65} height={65}/>
            <Js width={65} height={65}/>
            <Tailwind width={65} height={65}/>
            <BootstrapLogo width={65} height={65}/>
            <SassLogo width={65} height={65}/>
            <React width={65} height={65}/>
            <ReduxLogo width={65} height={65}/>
            <Next width={65} height={65}/>
         </SvgSection>
         <DetailsSection>
            <Headline> Front-end </Headline>
            <br />
            <TextInfo> El desarrollo Frontend es uno de mis fuertes, estos son algunas de las tecnologías que manejo: </TextInfo>
            <TechListContainer>
               <TechList>
                  <TechItem><CheckIcon/> HTML5 </TechItem>
                  <TechItem><CheckIcon/> CSS3 </TechItem>
                  <TechItem><CheckIcon/> JavaScript </TechItem>
                  <TechItem><CheckIcon/> Bootstrap 5 </TechItem>
                  <TechItem><CheckIcon/> Taildwind </TechItem>
                  <TechItem><CheckIcon/> Sass </TechItem>
                  <TechItem><CheckIcon/> ReactJS </TechItem>
                  <TechItem><CheckIcon/> Redux </TechItem>
                  <TechItem><CheckIcon/> NextJS </TechItem>
               </TechList>
            </TechListContainer>
         </DetailsSection>
      </TechContainer>
   );
};
