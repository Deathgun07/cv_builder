
export const ClassiqueElegant = ({ cvData }) => (
  <div className="bg-white p-6">
    <h1 className="text-3xl font-serif font-bold text-gray-800 mb-4">{cvData.personalInfo.name}</h1>
    <p className="text-gray-600 mb-2">{cvData.personalInfo.email} | {cvData.personalInfo.phone}</p>
    <p className="text-gray-600 mb-4">{cvData.personalInfo.address}</p>
    
    <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-3">Profil</h2>
    <p className="text-gray-600 mb-4">{cvData.profile}</p>
    
    <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-3">Expérience Professionnelle</h2>
    {cvData.experiences.map((exp, index) => (
      <div key={index} className="mb-4">
        <h3 className="text-xl font-semibold">{exp.position}</h3>
        <p className="text-gray-600 italic">{exp.company}, {exp.duration}</p>
        <p className="text-gray-700">{exp.description}</p>
      </div>
    ))}
    
    <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-3">Formation</h2>
    {cvData.education.map((edu, index) => (
      <div key={index} className="mb-3">
        <h3 className="text-xl font-semibold">{edu.degree}</h3>
        <p className="text-gray-600">{edu.school}, {edu.year}</p>
      </div>
    ))}
    
    <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-3">Compétences</h2>
    <ul className="list-disc list-inside text-gray-700">
      {cvData.skills.map((skill, index) => (
        <li key={index}>{skill.name} - {skill.level}</li>
      ))}
    </ul>
  </div>
);

export const ModerneCreatif = ({ cvData }) => (
  <div className="bg-gradient-to-r from-purple-400 to-pink-500 p-6 text-white">
    <h1 className="text-4xl font-sans font-bold mb-4">{cvData.personalInfo.name}</h1>
    <p className="mb-2">{cvData.personalInfo.email} | {cvData.personalInfo.phone}</p>
    <p className="mb-4">{cvData.personalInfo.address}</p>
    
    <div className="bg-white bg-opacity-20 p-4 rounded-lg mb-6">
      <h2 className="text-2xl font-semibold mb-2">Profil</h2>
      <p>{cvData.profile}</p>
    </div>
    
    <h2 className="text-2xl font-semibold mb-4">Expérience</h2>
    {cvData.experiences.map((exp, index) => (
      <div key={index} className="mb-4 bg-white bg-opacity-10 p-3 rounded">
        <h3 className="font-bold">{exp.position}</h3>
        <p className="italic">{exp.company}, {exp.duration}</p>
        <p>{exp.description}</p>
      </div>
    ))}
    
    <h2 className="text-2xl font-semibold mb-4 mt-6">Formation</h2>
    {cvData.education.map((edu, index) => (
      <div key={index} className="mb-3 bg-white bg-opacity-10 p-2 rounded">
        <h3 className="font-bold">{edu.degree}</h3>
        <p>{edu.school}, {edu.year}</p>
      </div>
    ))}
    
    <h2 className="text-2xl font-semibold mb-4 mt-6">Compétences</h2>
    <div className="grid grid-cols-2 gap-4">
      {cvData.skills.map((skill, index) => (
        <div key={index} className="mb-2">
          <p>{skill.name}</p>
          <div className="w-full bg-white bg-opacity-30 rounded-full h-2.5">
            <div className="bg-white h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const TechInnovant = ({ cvData }) => (
  <div className="bg-gray-900 text-green-400 p-6 font-mono">
    <h1 className="text-3xl font-bold mb-4">{'<'}{cvData.personalInfo.name}{'>'}</h1>
    <p className="mb-2">{'{'}{cvData.personalInfo.email}{'}'}</p>
    <p className="mb-4">{'{'}{cvData.personalInfo.phone}{'}'}</p>
    
    <div className="mb-6">
      <h2 className="text-2xl font-semibold mb-2">// Profil</h2>
      <p className="bg-gray-800 p-3 rounded">{cvData.profile}</p>
    </div>
    
    <h2 className="text-2xl font-semibold mb-2">// Expérience</h2>
    {cvData.experiences.map((exp, index) => (
      <div key={index} className="mb-4 bg-gray-800 p-3 rounded">
        <h3 className="font-bold">{exp.position}</h3>
        <p className="italic">{exp.company} | {exp.duration}</p>
        <p>{exp.description}</p>
      </div>
    ))}
    
    <h2 className="text-2xl font-semibold mb-2 mt-6">// Formation</h2>
    {cvData.education.map((edu, index) => (
      <div key={index} className="mb-2 bg-gray-800 p-2 rounded">
        <p className="font-bold">{edu.degree}</p>
        <p>{edu.school}, {edu.year}</p>
      </div>
    ))}
    
    <h2 className="text-2xl font-semibold mb-2 mt-6">// Compétences</h2>
    <ul className="list-none mb-4">
      {cvData.skills.map((skill, index) => (
        <li key={index} className="mb-2">
          <span className="inline-block w-24">{skill.name}:</span>
          <span className="inline-block w-24 h-4 bg-gray-800 rounded-full overflow-hidden">
            <span className="h-full bg-green-500 block" style={{ width: `${skill.level}%` }}></span>
          </span>
        </li>
      ))}
    </ul>
  </div>
);

export const ExecutifSophistique = ({ cvData }) => (
  <div className="bg-gray-100 p-6 rounded-lg shadow-lg border-t-8 border-gray-800">
    <div className="flex justify-between items-start mb-6">
      <div>
        <h1 className="text-4xl font-serif font-bold text-gray-800 mb-2">{cvData.personalInfo.name}</h1>
        <p className="text-xl text-gray-600">{cvData.personalInfo.email}</p>
      </div>
      <div className="text-right">
        <p>{cvData.personalInfo.phone}</p>
        <p>{cvData.personalInfo.address}</p>
      </div>
    </div>
    
    <div className="mb-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2 border-b-2 border-gray-300">Résumé professionnel</h2>
      <p className="text-gray-700">{cvData.profile}</p>
    </div>
    
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-2">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-300">Expérience professionnelle</h2>
        {cvData.experiences.map((exp, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-bold text-lg">{exp.position}</h3>
            <p className="italic text-gray-600">{exp.company} | {exp.duration}</p>
            <p className="text-gray-700">{exp.description}</p>
          </div>
        ))}
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-300">Compétences clés</h2>
        <ul className="list-disc list-inside mb-6">
          {cvData.skills.map((skill, index) => (
            <li key={index} className="text-gray-700">{skill.name}</li>
          ))}
        </ul>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-300">Formation</h2>
        {cvData.education.map((edu, index) => (
          <div key={index} className="mb-2">
            <p className="font-bold">{edu.degree}</p>
            <p className="text-gray-600">{edu.school}, {edu.year}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const FraisDebutant = ({ cvData }) => (
  <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
    <h1 className="text-3xl font-sans font-bold text-blue-600 mb-2">{cvData.personalInfo.name}</h1>
    <p className="text-lg text-blue-500 mb-4">{cvData.personalInfo.email} | {cvData.personalInfo.phone}</p>
    
    <div className="bg-white p-4 rounded-lg shadow mb-6">
      <h2 className="text-xl font-semibold text-blue-600 mb-2">À propos de moi</h2>
      <p className="text-gray-700">{cvData.profile}</p>
    </div>
    
    <div className="grid grid-cols-2 gap-4">
      <div>
        <h2 className="text-xl font-semibold text-blue-600 mb-2">Formation</h2>
        {cvData.education.map((edu, index) => (
          <div key={index} className="mb-4 bg-white p-3 rounded-lg shadow">
            <p className="font-bold">{edu.degree}</p>
            <p className="text-gray-600">{edu.school}, {edu.year}</p>
          </div>
        ))}
        
        <h2 className="text-xl font-semibold text-blue-600 mb-2 mt-4">Expérience</h2>
        {cvData.experiences.map((exp, index) => (
          <div key={index} className="mb-4 bg-white p-3 rounded-lg shadow">
            <h3 className="font-bold">{exp.position}</h3>
            <p className="italic text-gray-600">{exp.company} | {exp.duration}</p>
            <p className="text-gray-700">{exp.description}</p>
          </div>
        ))}
      </div>
      <div>
        <h2 className="text-xl font-semibold text-blue-600 mb-2">Compétences</h2>
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          {cvData.skills.map((skill, index) => (
            <div key={index} className="mb-2">
              <p className="font-semibold">{skill.name}</p>
              <div className="w-full bg-blue-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
        
        <h2 className="text-xl font-semibold text-blue-600 mb-2">Coordonnées</h2>
        <div className="bg-white p-4 rounded-lg shadow">
          <p>{cvData.personalInfo.email}</p>
          <p>{cvData.personalInfo.phone}</p>
          <p>{cvData.personalInfo.address}</p>
        </div>
      </div>
    </div>
  </div>
);

export const  PolyvalentProfessionnel = ({ cvData }) => (
  <div className="bg-gradient-to-br from-teal-400 to-blue-500 p-6 rounded-lg shadow-lg text-white">
    <div className="bg-white bg-opacity-20 p-4 rounded-lg mb-6">
      <h1 className="text-4xl font-bold mb-2">{cvData.personalInfo.name}</h1>
      <p className="text-xl">{cvData.personalInfo.email} | {cvData.personalInfo.phone}</p>
    </div>
    
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-2">
        <div className="bg-white bg-opacity-20 p-4 rounded-lg mb-4">
          <h2 className="text-2xl font-semibold mb-2">Profil</h2>
          <p>{cvData.profile}</p>
        </div>
        
        <div className="bg-white bg-opacity-20 p-4 rounded-lg mb-4">
          <h2 className="text-2xl font-semibold mb-2">Expérience</h2>
          {cvData.experiences.map((exp, index) => (
            <div key={index} className="mb-3">
              <h3 className="font-bold">{exp.position}</h3>
              <p className="italic">{exp.company} | {exp.duration}</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="bg-white bg-opacity-20 p-4 rounded-lg mb-4">
          <h2 className="text-2xl font-semibold mb-2">Compétences</h2>
          {cvData.skills.map((skill, index) => (
            <div key={index} className="mb-2">
              <p>{skill.name}</p>
              <div className="w-full bg-white bg-opacity-30 rounded-full h-2.5">
                <div className="bg-white h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-white bg-opacity-20 p-4 rounded-lg mb-4">
          <h2 className="text-2xl font-semibold mb-2">Formation</h2>
          {cvData.education.map((edu, index) => (
            <div key={index} className="mb-2">
              <p className="font-bold">{edu.degree}</p>
              <p>{edu.school}, {edu.year}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-white bg-opacity-20 p-4 rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">Contact</h2>
          <p>{cvData.personalInfo.email}</p>
          <p>{cvData.personalInfo.phone}</p>
          <p>{cvData.personalInfo.address}</p>
        </div>
      </div>
    </div>
  </div>
);