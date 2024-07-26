import "./App.css";
import UI_UX_Design from "./pages/UI_UX_Design";
import Communication from "./pages/Communication";
import {Route,Routes} from 'react-router-dom';
import NosServices from "./components/NosServices";
import Site_Web_Eco from "./pages/Site_Web_Eco";
import App_Mobile from "./pages/App_Mobile";
import E_Portfolio from "./pages/E_Portfolio";
import Traduction from "./pages/Traduction";
import NFC from "./pages/NFC";
function App() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<NosServices />} />
        <Route path="/ui-ux-design" element={<UI_UX_Design />} />
        <Route path="/communication" element={<Communication />} />
        <Route path="/site-web-eco" element={<Site_Web_Eco />} />
        <Route path="/mobile-app" element={<App_Mobile />} />
        <Route path="/e-portfolio" element={<E_Portfolio />} />
        <Route path="/traduction" element={<Traduction />} />
        <Route path="/nfc" element={<NFC />} /> 
        
         
          
      </Routes>
    </>
  );
}

export default App;
