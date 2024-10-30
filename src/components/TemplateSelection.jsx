import { Link } from 'react-router-dom';

const templates = [
  { 
    id: 'template1', 
    name: 'Classique Élégant', 
    emoji: '📄',
    description: 'Un design professionnel et épuré pour tous les secteurs.'
  },
  { 
    id: 'template2', 
    name: 'Moderne Créatif', 
    emoji: '🎨',
    description: 'Parfait pour les industries créatives et le design.'
  },
  { 
    id: 'template3', 
    name: 'Tech Innovant', 
    emoji: '💻',
    description: "Idéal pour les professionnels de l'IT et de la tech."
  },
  { 
    id: 'template4', 
    name: 'Exécutif Sophistiqué', 
    emoji: '🏆',
    description: 'Conçu pour les cadres et les dirigeants.'
  },
  { 
    id: 'template5', 
    name: 'Frais Débutant', 
    emoji: '🎓',
    description: 'Adapté aux étudiants et aux jeunes diplômés.'
  },
  { 
    id: 'template6', 
    name: 'Polyvalent Professionnel', 
    emoji: '👥',
    description: 'Un modèle versatile pour tous types de carrières.'
  },
];

function TemplateSelection() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Choisissez votre modèle de CV</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {templates.map((template) => (
          <div key={template.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="p-6 flex flex-col items-center">
              <span className="text-6xl mb-4" role="img" aria-label={template.name}>{template.emoji}</span>
              <h2 className="text-2xl font-semibold mb-2 text-gray-800">{template.name}</h2>
              <p className="text-gray-600 mb-4 text-center">{template.description}</p>
              <Link
                to={`/build-cv/${template.id}`}
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center font-bold py-3 px-4 rounded transition duration-300 ease-in-out"
              >
                Sélectionner ce modèle
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TemplateSelection;