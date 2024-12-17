import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { FontSizeProvider } from "./context/FontSizeContext";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import DayView from "./pages/DayView";
import GozosView from "./pages/Gozos";
import DaysView from "./pages/Days";

const App = () => {
  return (
    <ThemeProvider>
      <FontSizeProvider>
        <Router>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/day/:dayNumber" element={<DayView />} />
              <Route path="/days" element={<DaysView />} />
              <Route path="/gozos" element={<GozosView />} />
            </Route>
          </Routes>
        </Router>
      </FontSizeProvider>
    </ThemeProvider>
  );
};

export default App;