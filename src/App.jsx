import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import { VistaCategorias } from "./routes/VistaCategorias";
import { VistaParticipantes } from "./routes/VistaParticipantes";
import Categorias from "./routes/Categorias";
import ActoSentido from "./routes/ActoSentido";
import Retribucion from "./routes/Retribucion";
import Creditos from "./routes/Creditos";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/vistacategorias" element={<VistaCategorias />}></Route>

        <Route
          path="/vistaparticipantes"
          element={<VistaParticipantes />}
        ></Route>

        <Route path="/categorias" element={<Categorias />}></Route>

        {/* <Route path="/vistaPersona" element={<VistaPersona />}></Route> */}

        <Route path="/actosentido" element={<ActoSentido />}></Route>

        <Route path="/retribucion" element={<Retribucion />}></Route>

        <Route path="/creditos" element={<Creditos />}></Route>
      </Routes>
    </>
  );
};

export default App;
