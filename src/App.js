import './assets/App.css';
import './index.css';
import { ThemeProvider } from '@material-tailwind/react';
import theme from './assets/theme.jsx';
import UnifiedForm from './components/UseMultistepForm/UnifiedForm';
import ContactForm from './components/ContactForm/ContactForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavbarDefault from './components/NavbarDefault/NavbarDefault.jsx';
import FormContainer from './components/UseMultistepForm/FormContainer';
import { useState } from 'react';
import HomePage from './components/HomePage/HomePage';
import HomeView from './components/HomeView/HomeView';
function App() {
  return (
    <div
      className="bg-gradient-to-r from-cyan-300 from-10% via-equis-600 via-40% to-light-blue-600 to-90% ..."
      style={{ position: 'static', height: '100vh' }}
    >
      <BrowserRouter>
        <NavbarDefault />
        <ThemeProvider value={theme}>
          <Routes>
            <Route path="/" element={<FormContainer />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/contacto" element={<ContactForm />} />
            <Route path="/inicio" element={<HomeView />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

{
  /* <BrowserRouter>
        <NavbarDefault />
        <ThemeProvider value={theme}>
          <Routes>
            <Route path="/" element={<FormContainer />} />
            <Route path="/home" element={<div> Home </div>} />
            <Route path="/contacto" element={<ContactForm />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter> */
}
