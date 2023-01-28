import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Slide1 from "./routes/slide-1";
import Slide2 from "./routes/slide-2";
import Slide3 from "./routes/slide-3";
import Slide4 from "./routes/slide-4";
import Slide5 from "./routes/slide-5";
import SlideInstructions from "./routes/slide-instructions";
import Choice from "./routes/choice";
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
        <Route path="/slide-1" element={<Slide1 />}></Route>
        <Route path="/slide-2" element={<Slide2 />}></Route>
        <Route path="/slide-3" element={<Slide3 />}></Route>
        <Route path="/slide-4" element={<Slide4 />}></Route>
        <Route path="/slide-5" element={<Slide5 />}></Route>
        <Route path="/slide-instructions" element={<SlideInstructions />}></Route>
        <Route path="choice" element={<Choice />}></Route>
        <Route path="/vistacategorias" element={<VistaCategorias />}></Route>
        <Route path="/vistaparticipantes" element={<VistaParticipantes />}></Route>
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
