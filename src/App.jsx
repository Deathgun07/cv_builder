import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import TemplateSelection from './components/TemplateSelection';
import CVBuilder from './components/CVBuilder';

// Composant principal de l'application
function App() {
  return (
    // Utilisation du Router pour la navigation
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Barre de navigation */}
        <Navbar />
        {/* Contenu principal */}
        <div className="container mx-auto px-4 py-8">
          {/* Définition des routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/select-template" element={<TemplateSelection />} />
            <Route path="/build-cv/:templateId" element={<CVBuilder />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;