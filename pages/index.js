import { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import { Contact } from '../components/Contact';
import { Navbar } from '../components/Navbar';
import { SocialMediaColumn } from '../components/SocialMediaColumn';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Technologies } from '../components/Technologies';
import { Projects } from '../components/Projects';
import { Footer } from '../components/Footer';
import {
  GradientHero,
  LoaderContainer,
  PageContainer,
} from '../styles/general';
import { GradientAbout } from '../styles/general';
import { Loader } from '../components/Loader';

export default function Home() {
  const aboutRef = useRef(null);
  const techRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const [loader, setLoader] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showTech, setShowTech] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoader(true);
    }, [2000]);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const handleShowSection = () => {
      const aboutSectionPosition =
        aboutRef.current.getBoundingClientRect().top;
      const techSectionPosition =
        aboutRef.current.getBoundingClientRect().top;
      const projectsSectionPosition =
        projectsRef.current.getBoundingClientRect().top;
      const contactSectionPosition =
        contactRef.current.getBoundingClientRect().top;
      const windowPosition = window.innerHeight;

      if (aboutSectionPosition + 250 < windowPosition) {
        setShowAbout(true);
      }

      if (techSectionPosition + 250 < windowPosition) {
        setShowTech(true);
      }

      if (projectsSectionPosition + 250 < windowPosition) {
        setShowProjects(true);
      }

      if (contactSectionPosition + 250 < windowPosition) {
        setShowContact(true);
      }
    };

    window.addEventListener('scroll', handleShowSection);
  }, []);

  return (
    <>
      <Head>
        <meta name="keywords" content="Ivan,Miyashiro,Ivan Miyashiro,desarrollador,developer,frontend,portfolio,portafolio" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;500&family=Inter:wght@400;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <title> Ivan Miyashiro | Web Developer </title>
        <meta name="description" content="Ivan Miyashiro es un desarrollador de software que se dedica a crear aplicaciones en la web." />
      </Head>

      <LoaderContainer
        className={`animate__animated ${loader && 'animate__bounceOut'}`}
      >
        <Loader />
      </LoaderContainer>

      {loader && (
        <PageContainer>
          <Navbar />
          <GradientHero />
          <GradientAbout />
          <SocialMediaColumn />
          <Hero />
          <div className={`hidden ${showAbout && 'show'}`} ref={aboutRef}>
            <About />
          </div>
          <div className={`hidden ${showTech && 'show'}`} ref={techRef}>
            <Technologies />
          </div>
          <div
            className={`hidden ${showProjects && 'show'}`}
            ref={projectsRef}
          >
            <Projects />
          </div>
          <div
            className={`hidden ${showContact && 'show'}`}
            ref={contactRef}
          >
            <Contact />
          </div>
          <Footer />
        </PageContainer>
      )}
    </>
  );
}
