import React, { useEffect, useState } from 'react'
import {
  BrowserRouter, Route, Routes,
} from "react-router-dom";

import Home from './Views/HomePage';
import NavbarPage from './components/Navbar';
import { Footer } from './components/Footer';
import ContactPage from './Views/ContactPage';
import { randomColor } from './utils/BoxColor';
import { ListOfBreeds } from './utils/ListOfBreeds';
import MoreBreeds from './Views/MoreBreeds';



function App() {
  const [fact, setFact] = useState([])
  const [boxColor, setBoxColor] = useState([])

  const [catsList, setCatsList] = useState([])

  const [data, setData] = useState([])
  const [moreCatsList, setMoreCatsList] = useState([])
  const [totalPage, setTotalPage] = useState([])


  useEffect(() => {
    (async () => {
      try {
        const getData = ListOfBreeds({ setCatsList, setData, setTotalPage, setMoreCatsList })
        const getColor = randomColor({ setBoxColor })
      } catch (error) {
        console.log(error)
      }
    })();
  }, [])



  return (
    <BrowserRouter >
      <NavbarPage />
      <Routes>
        <Route path="/" exact element={
          <Home
            catsList={catsList}
            setCatsList={setCatsList}
            fact={fact}
            setFact={setFact}
            boxColor={boxColor}
          />} />

        <Route path="/more-breeds" exact element={
          <MoreBreeds
            fact={fact}
            setFact={setFact}
            data={data}
            moreCatsList={moreCatsList}
            setMoreCatsList={setMoreCatsList}
            totalPage={totalPage}
            boxColor={boxColor}
          />
        } />
        <Route path="/contact" exact element={<ContactPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
