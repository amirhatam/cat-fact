import React from 'react';
import { } from 'mdb-react-ui-kit';
import {
  BrowserRouter, Route, Routes,
} from "react-router-dom";

import Home from './Views/HomePage';
import NavbarPage from './components/Navbar';
import { Footer } from './components/Footer';
import ContactPage from './Views/ContactPage';



function App() {
  return (
    <BrowserRouter >
      <NavbarPage />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/contact" exact element={<ContactPage />} />


      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
