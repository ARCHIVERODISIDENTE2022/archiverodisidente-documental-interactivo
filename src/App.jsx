import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import { VistaCategorias } from "./routes/VistaCategorias";
import { VistaParticipantes } from "./routes/VistaParticipantes";
import Familia from "./routes/Familia";
import Miedo from "./routes/Miedo";
import Amor from "./routes/Amor";
import ActoSentido from "./routes/ActoSentido";
import Cuerpo from "./routes/Cuerpo";
import Libertad from "./routes/Libertad";
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

        <Route path="/familia" element={<Familia />}></Route>

        <Route path="/miedo" element={<Miedo />}></Route> 

        <Route path="/amor" element={<Amor />}></Route>

        <Route path="/actosentido" element={<ActoSentido />}></Route>

        <Route path="/familia" element={<Familia />}></Route>

        <Route path="/cuerpo" element={<Cuerpo />}></Route>

        <Route path="/libertad" element={<Libertad />}></Route>

        <Route path="/retribucion" element={<Retribucion />}></Route>

        <Route path="/creditos" element={<Creditos />}></Route>
      </Routes>
    </>
  );
};

export default App;
