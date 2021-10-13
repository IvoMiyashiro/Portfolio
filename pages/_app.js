/* eslint-disable react/prop-types */
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lighTheme } from '../styles/theme';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {

   const [theme, setTheme] = useState('light');

   return (
      <ThemeProvider theme={theme === 'light' ? lighTheme : darkTheme}>
         <Component {...pageProps} />
      </ThemeProvider>
   );
}

export default MyApp;
