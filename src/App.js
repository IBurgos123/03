import React, { useEffect, useState} from "react";
import { Router, Route, Link, Routes} from "react-router-dom";
import Inicio from "./components/Inicio";
import Perfil from "./components/Perfil";

/*
  Componente Vista: Llamado App
*/
const App =() =>{
  return(
    <Routes>
      <Route path="/" element={<Inicio />}></Route>
      <Route path="/perfil" element={<Perfil />}></Route>
    </Routes>
    
  )
}

 export default App