import { ContactForm } from '../ContactForm';
import { HighlightText } from '../../styles/general';
import { ContactContainer, ContactSection, Content, TitleContainer, Title } from './styles';

export const Contact = () => {


   return (
      <ContactSection id="contact" >
         <ContactContainer>
            <TitleContainer>
               <Title> Contáctame <HighlightText>.</HighlightText> </Title>
               <Content>
                  Si te interesa lo que hago y te gustaría trabajar conmigo no dudes en contactarme a través
                  del siguiente formulario o cualquiera de mis redes sociales!
               </Content>
            </TitleContainer>
            <ContactForm />
         </ContactContainer>
      </ContactSection>
   );
};