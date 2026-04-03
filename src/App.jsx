import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProfileCard from './components/ProfileCard';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import './App.css';

// Shared layout: ProfileCard sidebar + main content + Contact footer
const PageLayout = ({ children }) => (
  <div className="layout">
    <aside className="sidebar">
      <ProfileCard />
    </aside>
    <main className="main-content">
      {children}
      <Contact />
    </main>
  </div>
);

// HOME — shows everything (original experience)
const HomePage = () => (
  <div className="layout">
    <aside className="sidebar">
      <ProfileCard />
    </aside>
    <main className="main-content">
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Certifications />
      <Contact />
    </main>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/projects"
            element={
              <PageLayout>
                <Projects />
              </PageLayout>
            }
          />
          <Route
            path="/experience"
            element={
              <PageLayout>
                <Experience />
              </PageLayout>
            }
          />
          <Route
            path="/skills"
            element={
              <PageLayout>
                <Skills />
                <Certifications />
              </PageLayout>
            }
          />
          <Route
            path="/contact"
            element={
              <div className="layout">
                <aside className="sidebar">
                  <ProfileCard />
                </aside>
                <main className="main-content">
                  <Contact />
                </main>
              </div>
            }
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
