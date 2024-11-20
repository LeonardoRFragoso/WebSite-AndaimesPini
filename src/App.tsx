import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound"; // Exemplo para página 404

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          {/* Página inicial */}
          <Route path="/" element={<Home />} />

          {/* Página não encontrada */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
