import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">CV Builder</Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-blue-200">Accueil</Link>
          </li>
          <li>
            <Link to="/select-template" className="text-white hover:text-blue-200">Créer un CV</Link>
          </li>
          <li>
            <Link to="/select-template" className="text-white hover:text-blue-200">Modèles</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar