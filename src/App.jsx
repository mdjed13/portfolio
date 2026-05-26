import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import GreenMarket from "./pages/GreenMarket"
import Iqraa from "./pages/Iqraa"
import Dihya from "./pages/Dihya"
import Films from "./pages/Films"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/greenmarket" element={<GreenMarket />} />
        <Route path="/iqraa" element={<Iqraa />} />
        <Route path="/dihya" element={<Dihya />} />
        <Route path="/films" element={<Films />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App