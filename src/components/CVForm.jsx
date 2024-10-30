import React from 'react'

// Component for CV input form
const CVForm = ({ cvData, updateCVData, selectedTemplate, changeTemplate }) => {
  // Function to update a specific field in the CV data
  const updateField = (section, field, value) => {
    const newData = { ...cvData }
    if (section) {
      newData[section][field] = value
    } else {
      newData[field] = value
    }
    updateCVData(newData)
  }

  // Function to add a new experience
  const addExperience = () => {
    const newData = { ...cvData }
    newData.experiences.push({ position: '', company: '', duration: '', description: '' })
    updateCVData(newData)
  }

  // Function to add a new education
  const addEducation = () => {
    const newData = { ...cvData }
    newData.education.push({ degree: '', school: '', year: '' })
    updateCVData(newData)
  }

  // Function to add a new skill
  const addSkill = () => {
    const newData = { ...cvData }
    newData.skills.push({ name: '', level: '50' })
    updateCVData(newData)
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Informations du CV</h2>

      {/* Template selection */}
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
          <option value="classic">Classique</option>
          <option value="modern">Moderne</option>
          <option value="tech">Tech</option>
          <option value="executive">Exécutif</option>
          <option value="beginner">Débutant</option>
          <option value="versatile">Polyvalent</option>
        </select>
      </div>

      {/* Personal information */}
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

      {/* Profile */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">Profil</h3>
        <textarea
          placeholder="Votre profil professionnel"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={cvData.profile}
          onChange={(e) => updateField(null, 'profile', e.target.value)}
        ></textarea>
      </div>

      {/* Desired position */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">Poste recherché</h3>
        <input
          type="text"
          placeholder="Poste recherché"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={cvData.desiredPosition}
          onChange={(e) => updateField(null, 'desiredPosition', e.target.value)}
        />
      </div>

      {/* Experiences */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">Expériences</h3>
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
            ></textarea>
          </div>
        ))}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={addExperience}
        >
          Ajouter une expérience
        </button>
      </div>

      {/* Education */}
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
          </div>
        ))}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={addEducation}
        >
          Ajouter une formation
        </button>
      </div>

      {/* Skills */}
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
          </div>
        ))}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={addSkill}
        >
          Ajouter une compétence
        </button>
      </div>

      {/* Languages */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">Langues</h3>
        {cvData.languages.map((language, index) => (
          <div key={index} className="mb-2">
            <input
              type="text"
              placeholder="Langue"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              value={language.name}
              onChange={(e) => updateField('languages', index, { ...language, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Niveau"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              value={language.level}
              onChange={(e) => updateField('languages', index, { ...language, level: e.target.value })}
            />
          </div>
        ))}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => updateField('languages', cvData.languages.length, { name: '', level: '' })}
        >
          Ajouter une langue
        </button>
      </div>

      {/* Hobbies */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">Loisirs</h3>
        <textarea
          placeholder="Vos loisirs"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={cvData.hobbies}
          onChange={(e) => updateField(null, 'hobbies', e.target.value)}
        ></textarea>
      </div>
    </div>
  )
}

export default CVForm