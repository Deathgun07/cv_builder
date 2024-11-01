export const ModerneProfessionnel = ({ cvData }) => (
  <div className="bg-gray-100 min-h-screen p-8 font-sans">
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-blue-600 text-white p-6">
        <h1 className="text-3xl font-bold">{cvData.personalInfo.name}</h1>
        <p className="text-xl">{cvData.personalInfo.title}</p>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <h2 className="text-2xl font-semibold mb-4">Expérience</h2>
            {cvData.experiences.map((exp, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-semibold">{exp.position}</h3>
                <p className="text-gray-600">{exp.company} | {exp.duration}</p>
                <p className="text-sm">{exp.description}</p>
              </div>
            ))}
            <h2 className="text-2xl font-semibold mb-4 mt-6">Formation</h2>
            {cvData.education.map((edu, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-semibold">{edu.degree}</h3>
                <p className="text-gray-600">{edu.school} | {edu.year}</p>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Compétences</h2>
            {cvData.skills.map((skill, index) => (
              <p key={index} className="mb-2">{skill.name}</p>
            ))}
            <h2 className="text-2xl font-semibold mb-4 mt-6">Langues</h2>
            {cvData.languages.map((lang, index) => (
              <p key={index} className="mb-2">{lang.name} - {lang.level}</p>
            ))}
            <h2 className="text-2xl font-semibold mb-4 mt-6">Loisirs</h2>
            <p>{cvData.hobbies}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const CreatifColore = ({ cvData }) => (
  <div className="bg-gradient-to-br from-purple-400 to-pink-500 min-h-screen p-8 font-sans">
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-6 text-center">
        <h1 className="text-4xl font-bold text-purple-600 mb-2">{cvData.personalInfo.name}</h1>
        <p className="text-xl text-pink-500">{cvData.personalInfo.title}</p>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-purple-600">Expérience</h2>
            {cvData.experiences.map((exp, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-semibold">{exp.position}</h3>
                <p className="text-gray-600">{exp.company} | {exp.duration}</p>
                <p className="text-sm">{exp.description}</p>
              </div>
            ))}
            <h2 className="text-2xl font-semibold mb-4 mt-6 text-purple-600">Formation</h2>
            {cvData.education.map((edu, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-semibold">{edu.degree}</h3>
                <p className="text-gray-600">{edu.school} | {edu.year}</p>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-pink-500">Compétences</h2>
            {cvData.skills.map((skill, index) => (
              <p key={index} className="mb-2">{skill.name}</p>
            ))}
            <h2 className="text-2xl font-semibold mb-4 mt-6 text-pink-500">Langues</h2>
            {cvData.languages.map((lang, index) => (
              <p key={index} className="mb-2">{lang.name} - {lang.level}</p>
            ))}
            <h2 className="text-2xl font-semibold mb-4 mt-6 text-pink-500">Loisirs</h2>
            <p>{cvData.hobbies}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const MinimalisteElegant = ({ cvData }) => (
  <div className="bg-gray-50 min-h-screen p-8 font-sans">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-light mb-2">{cvData.personalInfo.name}</h1>
      <p className="text-xl text-gray-600 mb-6">{cvData.personalInfo.title}</p>
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <h2 className="text-2xl font-light mb-4">Expérience</h2>
          {cvData.experiences.map((exp, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-semibold">{exp.position}</h3>
              <p className="text-gray-600">{exp.company} | {exp.duration}</p>
              <p className="text-sm">{exp.description}</p>
            </div>
          ))}
          <h2 className="text-2xl font-light mb-4 mt-6">Formation</h2>
          {cvData.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-semibold">{edu.degree}</h3>
              <p className="text-gray-600">{edu.school} | {edu.year}</p>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-2xl font-light mb-4">Compétences</h2>
          {cvData.skills.map((skill, index) => (
            <p key={index} className="mb-2">{skill.name}</p>
          ))}
          <h2 className="text-2xl font-light mb-4 mt-6">Langues</h2>
          {cvData.languages.map((lang, index) => (
            <p key={index} className="mb-2">{lang.name} - {lang.level}</p>
          ))}
          <h2 className="text-2xl font-light mb-4 mt-6">Loisirs</h2>
          <p>{cvData.hobbies}</p>
        </div>
      </div>
    </div>
  </div>
);

export const TechInnovant = ({ cvData }) => (
  <div className="bg-black text-green-400 min-h-screen p-8 font-mono">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">{cvData.personalInfo.name}</h1>
      <p className="text-xl mb-6">{cvData.personalInfo.title}</p>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl font-bold mb-4">// Expérience</h2>
          {cvData.experiences.map((exp, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-bold">{exp.position}</h3>
              <p>{exp.company} | {exp.duration}</p>
              <p className="text-sm">{exp.description}</p>
            </div>
          ))}
          <h2 className="text-2xl font-bold mb-4 mt-6">// Formation</h2>
          {cvData.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-bold">{edu.degree}</h3>
              <p>{edu.school} | {edu.year}</p>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">// Compétences</h2>
          {cvData.skills.map((skill, index) => (
            <p key={index} className="mb-2">{skill.name}</p>
          ))}
          <h2 className="text-2xl font-bold mb-4 mt-6">// Langues</h2>
          {cvData.languages.map((lang, index) => (
            <p key={index} className="mb-2">{lang.name} - {lang.level}</p>
          ))}
          <h2 className="text-2xl font-bold mb-4 mt-6">// Loisirs</h2>
          <p>{cvData.hobbies}</p>
        </div>
      </div>
    </div>
  </div>
);
export const ClassiqueRaffine = ({ cvData }) => (
  <div className="bg-cream min-h-screen p-8 font-serif">
    <div className="max-w-4xl mx-auto bg-white shadow-md p-8">
      <h1 className="text-4xl font-bold text-center mb-2">{cvData.personalInfo.name}</h1>
      <p className="text-xl text-center text-gray-600 mb-6">{cvData.personalInfo.title}</p>
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-300">Expérience</h2>
          {cvData.experiences.map((exp, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-semibold">{exp.position}</h3>
              <p className="text-gray-600 italic">{exp.company} | {exp.duration}</p>
              <p className="text-sm">{exp.description}</p>
            </div>
          ))}
          <h2 className="text-2xl font-semibold mb-4 mt-6 border-b border-gray-300">Formation</h2>
          {cvData.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-semibold">{edu.degree}</h3>
              <p className="text-gray-600 italic">{edu.school} | {edu.year}</p>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-300">Compétences</h2>
          {cvData.skills.map((skill, index) => (
            <p key={index} className="mb-2">{skill.name}</p>
          ))}
          <h2 className="text-2xl font-semibold mb-4 mt-6 border-b border-gray-300">Langues</h2>
          {cvData.languages.map((lang, index) => (
            <p key={index} className="mb-2">{lang.name} - {lang.level}</p>
          ))}
          <h2 className="text-2xl font-semibold mb-4 mt-6 border-b border-gray-300">Loisirs</h2>
          <p>{cvData.hobbies}</p>
        </div>
      </div>
    </div>
  </div>
);

export const ModerneEpure = ({ cvData }) => (
  <div className="bg-gray-100 min-h-screen p-8 font-sans">
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-indigo-600 text-white p-6">
        <h1 className="text-3xl font-bold">{cvData.personalInfo.name}</h1>
        <p className="text-xl">{cvData.personalInfo.title}</p>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Expérience</h2>
            {cvData.experiences.map((exp, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-semibold">{exp.position}</h3>
                <p className="text-gray-600">{exp.company} | {exp.duration}</p>
                <p className="text-sm">{exp.description}</p>
              </div>
            ))}
            <h2 className="text-2xl font-semibold mb-4 mt-6 text-indigo-600">Formation</h2>
            {cvData.education.map((edu, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-semibold">{edu.degree}</h3>
                <p className="text-gray-600">{edu.school} | {edu.year}</p>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Compétences</h2>
            {cvData.skills.map((skill, index) => (
              <p key={index} className="mb-2">{skill.name}</p>
            ))}
            <h2 className="text-2xl font-semibold  mb-4 mt-6 text-indigo-600">Langues</h2>
            {cvData.languages.map((lang, index) => (
              <p key={index} className="mb-2">{lang.name} - {lang.level}</p>
            ))}
            <h2 className="text-2xl font-semibold mb-4 mt-6 text-indigo-600">Loisirs</h2>
            <p>{cvData.hobbies}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const CreatifAudacieux = ({ cvData }) => (
  <div className="bg-yellow-400 min-h-screen p-8 font-sans">
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-black text-yellow-400 p-6">
        <h1 className="text-4xl font-bold">{cvData.personalInfo.name}</h1>
        <p className="text-xl">{cvData.personalInfo.title}</p>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-black">Expérience</h2>
            {cvData.experiences.map((exp, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-semibold">{exp.position}</h3>
                <p className="text-gray-600">{exp.company} | {exp.duration}</p>
                <p className="text-sm">{exp.description}</p>
              </div>
            ))}
            <h2 className="text-2xl font-semibold mb-4 mt-6 text-black">Formation</h2>
            {cvData.education.map((edu, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-semibold">{edu.degree}</h3>
                <p className="text-gray-600">{edu.school} | {edu.year}</p>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-black">Compétences</h2>
            {cvData.skills.map((skill, index) => (
              <p key={index} className="mb-2">{skill.name}</p>
            ))}
            <h2 className="text-2xl font-semibold mb-4 mt-6 text-black">Langues</h2>
            {cvData.languages.map((lang, index) => (
              <p key={index} className="mb-2">{lang.name} - {lang.level}</p>
            ))}
            <h2 className="text-2xl font-semibold mb-4 mt-6 text-black">Loisirs</h2>
            <p>{cvData.hobbies}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const NaturelOrganique = ({ cvData }) => (
  <div className="bg-green-100 min-h-screen p-8 font-sans">
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden border-4 border-green-600">
      <div className="bg-green-600 text-white p-6">
        <h1 className="text-3xl font-bold">{cvData.personalInfo.name}</h1>
        <p className="text-xl">{cvData.personalInfo.title}</p>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-green-600">Expérience</h2>
            {cvData.experiences.map((exp, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-semibold">{exp.position}</h3>
                <p className="text-gray-600">{exp.company} | {exp.duration}</p>
                <p className="text-sm">{exp.description}</p>
              </div>
            ))}
            <h2 className="text-2xl font-semibold mb-4 mt-6 text-green-600">Formation</h2>
            {cvData.education.map((edu, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-semibold">{edu.degree}</h3>
                <p className="text-gray-600">{edu.school} | {edu.year}</p>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-green-600">Compétences</h2>
            {cvData.skills.map((skill, index) => (
              <p key={index} className="mb-2">{skill.name}</p>
            ))}
            <h2 className="text-2xl font-semibold mb-4 mt-6 text-green-600">Langues</h2>
            {cvData.languages.map((lang, index) => (
              <p key={index} className="mb-2">{lang.name} - {lang.level}</p>
            ))}
            <h2 className="text-2xl font-semibold mb-4 mt-6 text-green-600">Loisirs</h2>
            <p>{cvData.hobbies}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const UrbanChic = ({ cvData }) => (
  <div className="bg-gray-900 text-white min-h-screen p-8 font-sans">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-2">{cvData.personalInfo.name}</h1>
      <p className="text-2xl text-gray-400 mb-6">{cvData.personalInfo.title}</p>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-gray-300">Expérience</h2>
          {cvData.experiences.map((exp, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-xl font-semibold">{exp.position}</h3>
              <p className="text-gray-400">{exp.company} | {exp.duration}</p>
              <p className="text-sm text-gray-500">{exp.description}</p>
            </div>
          ))}
          <h2 className="text-3xl font-semibold mb-4 mt-6 text-gray-300">Formation</h2>
          {cvData.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-gray-400">{edu.school} | {edu.year}</p>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-gray-300">Compétences</h2>
          {cvData.skills.map((skill, index) => (
            <p key={index} className="mb-2 text-gray-400">{skill.name}</p>
          ))}
          <h2 className="text-3xl font-semibold mb-4 mt-6 text-gray-300">Langues</h2>
          {cvData.languages.map((lang, index) => (
            <p key={index} className="mb-2 text-gray-400">{lang.name} - {lang.level}</p>
          ))}
          <h2 className="text-3xl font-semibold mb-4 mt-6 text-gray-300">Loisirs</h2>
          <p className="text-gray-400">{cvData.hobbies}</p>
        </div>
      </div>
    </div>
  </div>
);

export const ArtistiqueCreatif = ({ cvData }) => (
  <div className="bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 min-h-screen p-8 font-sans">
    <div className="max-w-4xl mx-auto bg-white bg-opacity-80 shadow-lg rounded-lg overflow-hidden">
      <div className="p-6 text-center">
        <h1 className="text-4xl font-bold text-purple-600 mb-2">{cvData.personalInfo.name}</h1>
        <p className="text-xl text-indigo-500">{cvData.personalInfo.title}</p>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-pink-500">Expérience</h2>
            {cvData.experiences.map((exp, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-semibold">{exp.position}</h3>
                <p className="text-gray-600">{exp.company} | {exp.duration}</p>
                <p className="text-sm">{exp.description}</p>
              </div>
            ))}
            <h2 className="text-2xl font-semibold mb-4 mt-6 text-pink-500">Formation</h2>
            {cvData.education.map((edu, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-semibold">{edu.degree}</h3>
                <p className="text-gray-600">{edu.school} | {edu.year}</p>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-indigo-500">Compétences</h2>
            {cvData.skills.map((skill, index) => (
              <p key={index} className="mb-2">{skill.name}</p>
            ))}
            <h2 className="text-2xl font-semibold mb-4 mt-6 text-indigo-500">Langues</h2>
            {cvData.languages.map((lang, index) => (
              <p key={index} className="mb-2">{lang.name} - {lang.level}</p>
            ))}
            <h2 className="text-2xl font-semibold mb-4 mt-6 text-indigo-500">Loisirs</h2>
            <p>{cvData.hobbies}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);