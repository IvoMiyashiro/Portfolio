import {
   Cube1,
   Cube2,
   GradientCircle,
   LoaderContainer,
   LoaderWrapper,
} from './styles';

export const Loader = () => {
   return (
      <LoaderContainer>
         <LoaderWrapper>
            <Cube1></Cube1>
            <Cube2></Cube2>
         </LoaderWrapper>
         <GradientCircle></GradientCircle>
      </LoaderContainer>
   );
};
