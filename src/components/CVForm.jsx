const CVForm = ({ cvData, updateCVData, selectedTemplate, changeTemplate }) => {
  const updateField = (section, field, value) => {
    const newData = { ...cvData };
    if (section) {
      newData[section][field] = value;
    } else {
      newData[field] = value;
    }
    updateCVData(newData);
  };

  const addItem = (section, item) => {
    const newData = { ...cvData };
    newData[section].push(item);
    updateCVData(newData);
  };

  const removeItem = (section, index) => {
    const newData = { ...cvData };
    newData[section].splice(index, 1);
    updateCVData(newData);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Informations du CV</h2>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="template">
          Modèle de CV
        </label>
        <select
          id="template"
          className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={selectedTemplate}
          onChange={(e) => changeTemplate(e.target.value)}
        >
          <option value="template1">Classique Élégant</option>
          <option value="template2">Moderne Créatif</option>
          <option value="template3">Tech Innovant</option>
          <option value="template4">Exécutif Sophistiqué</option>
          <option value="template5">Frais Débutant</option>
          <option value="template6">Polyvalent Professionnel</option>
        </select>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">Informations personnelles</h3>
        <input
          type="text"
          placeholder="Nom"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
          value={cvData.personalInfo.name}
          onChange={(e) => updateField('personalInfo', 'name', e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
          value={cvData.personalInfo.email}
          onChange={(e) => updateField('personalInfo', 'email', e.target.value)}
        />
        <input
          type="tel"
          placeholder="Téléphone"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
          value={cvData.personalInfo.phone}
          onChange={(e) => updateField('personalInfo', 'phone', e.target.value)}
        />
        <input
          type="text"
          placeholder="Adresse"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
          value={cvData.personalInfo.address}
          onChange={(e) => updateField('personalInfo', 'address', e.target.value)}
        />
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">Profil</h3>
        <textarea
          placeholder="Votre profil professionnel"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={cvData.profile}
          onChange={(e) => updateField(null, 'profile', e.target.value)}
        />
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">Expériences professionnelles</h3>
        {cvData.experiences.map((exp, index) => (
          <div key={index} className="mb-2">
            <input
              type="text"
              placeholder="Poste"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              value={exp.position}
              onChange={(e) => updateField('experiences', index, { ...exp, position: e.target.value })}
            />
            <input
              type="text"
              placeholder="Entreprise"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              value={exp.company}
              onChange={(e) => updateField('experiences', index, { ...exp, company: e.target.value })}
            />
            <input
              type="text"
              placeholder="Durée"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              value={exp.duration}
              onChange={(e) => updateField('experiences', index, { ...exp, duration: e.target.value })}
            />
            <textarea
              placeholder="Description"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              value={exp.description}
              onChange={(e) => updateField('experiences', index, { ...exp, description: e.target.value })}
            />
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
              onClick={() => removeItem('experiences', index)}
            >
              Supprimer
            </button>
          </div>
        ))}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => addItem('experiences', { position: '', company: '', duration: '', description: '' })}
        >
          Ajouter une expérience
        </button>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">Formation</h3>
        {cvData.education.map((edu, index) => (
          <div key={index} className="mb-2">
            <input
              type="text"
              placeholder="Diplôme"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              value={edu.degree}
              onChange={(e) => updateField('education', index, { ...edu, degree: e.target.value })}
            />
            <input
              type="text"
              placeholder="École"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              value={edu.school}
              onChange={(e) => updateField('education', index, { ...edu, school: e.target.value })}
            />
            <input
              type="text"
              placeholder="Année"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              value={edu.year}
              onChange={(e) => updateField('education', index, { ...edu, year: e.target.value })}
            />
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
              onClick={() => removeItem('education', index)}
            >
              Supprimer
            </button>
          </div>
        ))}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => addItem('education', { degree: '', school: '', year: '' })}
        >
          Ajouter une formation
        </button>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">Compétences</h3>
        {cvData.skills.map((skill, index) => (
          <div key={index} className="mb-2">
            <input
              type="text"
              placeholder="Compétence"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              value={skill.name}
              onChange={(e) => updateField('skills', index, { ...skill, name: e.target.value })}
            />
            <input
              type="range"
              min="0"
              max="100"
              className="w-full"
              value={skill.level}
              onChange={(e) => updateField('skills', index, { ...skill, level: e.target.value })}
            />
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
              onClick={() => removeItem('skills', index)}
            >
              Supprimer
            </button>
          </div>
        ))}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => addItem('skills', { name: '', level: 50 })}
        >
          Ajouter une compétence
        </button>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">Langues</h3>
        {cvData.languages.map((lang, index) => (
          <div key={index} className="mb-2">
            <input
              type="text"
              placeholder="Langue"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              value={lang.name}
              onChange={(e) => updateField('languages', index, { ...lang, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Niveau"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              value={lang.level}
              onChange={(e) => updateField('languages', index, { ...lang, level: e.target.value })}
            />
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
              onClick={() => removeItem('languages', index)}
            >
              Supprimer
            </button>
          </div>
        ))}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => addItem('languages', { name: '', level: '' })}
        >
          Ajouter une langue
        </button>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">Loisirs</h3>
        <textarea
          placeholder="Vos loisirs"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={cvData.hobbies}
          onChange={(e) => updateField(null, 'hobbies', e.target.value)}
        />
      </div>
    </div>
  );
};

export default CVForm;