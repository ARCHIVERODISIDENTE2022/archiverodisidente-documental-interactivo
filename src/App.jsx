import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import { VistaCategorias } from "./routes/VistaCategorias";
import { VistaParticipantes } from "./routes/VistaParticipantes";
import Categorias from "./routes/Categorias";
import Familia from "./routes/Familia";
import Miedo from "./routes/Miedo";
import Amor from "./routes/Amor";
import ActoSentido from "./routes/ActoSentido";
import Cuerpo from "./routes/Cuerpo";
import Libertad from "./routes/Libertad";
import Retribucion from "./routes/Retribucion";
import Creditos from "./routes/Creditos";
import Familia from "./routes/Familia";

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

        <Route path="/familia" element={<Familia />}></Route>

        <Route path="/miedo" element={<Miedo />}></Route> 

        <Route path="/amor" element={<Amor />}></Route>

        <Route path="/actosentido" element={<ActoSentido />}></Route>

<<<<<<< HEAD
        <Route path="/cuerpo" element={<Cuerpo />}></Route>

        <Route path="/libertad" element={<Libertad />}></Route>
=======
        <Route path="/familia" element={<Familia />}></Route>
>>>>>>> fa5464616efb591a5a9c753728cfe829ee77e431

        <Route path="/retribucion" element={<Retribucion />}></Route>

        <Route path="/creditos" element={<Creditos />}></Route>
      </Routes>
    </>
  );
};

export default App;
