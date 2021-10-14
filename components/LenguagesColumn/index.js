import Image from 'next/image';

import { FlagsColumn } from './styles';

export const LenguagesColumn = () => {
   return (
      <FlagsColumn>
         <Image src="/assets/ar.png" width="40" height="40" />
         <Image src="/assets/us.png" width="40" height="40" />
      </FlagsColumn>
   );
};
