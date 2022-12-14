import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import VistaCategorias from "./routes/VistaCategorias";
import VistaParticipantes  from "./routes/VistaParticipantes";
import Categorias from "./routes/Categorias";
import VistaVideo from "./components/VistaVideo";
import ActoSentido from "./routes/ActoSentido";
import Retribucion from "./routes/Retribucion";
import { DataProvider } from "./context/DataProvider";

// https://github.com/SvillarroelZ/test0.git
// import { useContext } from "react";
// import { UserContext } from "./context/UserProvider";

const App = () => {

  return (
    <>
      <Routes>
        <Route 
          path="/" 
          element={
            <Home />
            }
        ></Route>

        <Route
          path="/vistacategorias"
          element={
              <VistaCategorias />
          }
        ></Route>

        <Route
          path="/vistaparticipantes"
          element={
                
                  < VistaParticipantes /> 
                
                
          }
        ></Route>

        <Route
          path="/categorias"
          element={
              <Categorias />
          }
        ></Route>

        <Route
          path="/vistavideo"
          element={
              <VistaVideo />
          }
        ></Route>

        <Route
          path="/actosentido"
          element={
              <ActoSentido />
          }
        ></Route>

        <Route
          path="/retribucion"
          element={
              <Retribucion />
          }
        ></Route>


      </Routes>
    </>
  );
};

export default App;
