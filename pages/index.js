import { useState } from 'react';
import Head from 'next/head';
import { Contact } from '../components/Contact';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Navbar } from '../components/Navbar';
import { Projects } from '../components/Projects';

export default function Home() {

   const ACTIVE_NAVLINKS = {
      hero: 'true',
      about: 'false',
      projects: 'false',
      contact: 'false',
   };

   const [activeNavlinks, setActiveNavlinks] = useState(ACTIVE_NAVLINKS);

   return (
      <>
         <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Oswald&family=Spartan:wght@700&display=swap" rel="stylesheet" />
         </Head>

         <Navbar activeNavlinks={activeNavlinks} setActiveNavlinks={setActiveNavlinks} />
         <Hero activeNavlinks={activeNavlinks} setActiveNavlinks={setActiveNavlinks} />
         <About activeNavlinks={activeNavlinks} setActiveNavlinks={setActiveNavlinks} />
         <Projects activeNavlinks={activeNavlinks} setActiveNavlinks={setActiveNavlinks} />
         <Contact activeNavlinks={activeNavlinks} setActiveNavlinks={setActiveNavlinks} />
      </>
   );
}
