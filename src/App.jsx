import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import Amenities from "./components/Amenities";
import AreaCalculator from "./components/AreaCalculator";
import Eye from "./components/Eye";
import FloorSelector from "./components/FloorSelector";
import Gallery from "./components/Gallery";
import GlobalStyles from "./components/GlobalStyles";
import Loading from "./components/Loading";
import Menu from "./components/Menu";
import Nav from "./components/Nav";
import NotFound from "./components/NotFound";
import Welcome from "./components/Welcome";
import Main from "./pages/Main";
import { useStore } from "./store/store";

export default function App() {
  const location = useLocation();
  const { menu, showGallery } = useStore();

  return (
    <div className="App">
      <GlobalStyles />
      <Loading />
      {menu && <Menu />}
      <AnimatePresence initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Welcome />} />
          <Route path="/floors" element={<FloorSelector />} />
          <Route path="/area" element={<AreaCalculator />} />
          <Route path="/amenities" element={<Amenities />} />
          <Route path="/view" element={<Nav />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
      <Main />
      <Eye />
      {showGallery && <Gallery />}
    </div>
  );
}
