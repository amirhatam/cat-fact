import { } from 'mdb-react-ui-kit';
import React from 'react';
import Main from './Views/HomePage';
import NavbarPage from './components/Navbar';
import { Footer } from './components/Footer';



function App() {
  return (
    <section >
      <NavbarPage />
      <Main />
      <Footer />
    </section>
  );
}

export default App;
