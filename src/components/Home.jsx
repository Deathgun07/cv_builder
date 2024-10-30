import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Bienvenue sur CV Builder</h1>
      <p className="text-xl text-center mb-8">
        Créez facilement votre CV professionnel avec nos modèles personnalisables.
      </p>
      <div className="flex justify-center">
        <Link
          to="/select-template"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Commencer à créer votre CV
        </Link>
      </div>
    </div>
  )
}

export default Home