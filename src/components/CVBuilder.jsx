import { useState } from 'react';
import CVForm from './CVForm';
import CVPreview from './CVPreview';
import { useParams } from 'react-router-dom';

const CVBuilder = () => {
  const [cvData, setCVData] = useState({
    personalInfo: {
      name: '',
      email: '',
      phone: '',
      address: '',
    },
    profile: '',
    experiences: [],
    education: [],
    skills: [],
    languages: [],
    hobbies: '',
  });
  let temp = useParams();
  
  const [selectedTemplate, setSelectedTemplate] = useState(temp.templateId);

  const updateCVData = (newData) => {
    setCVData(newData);
  };

  const changeTemplate = (newTemplate) => {
    setSelectedTemplate(newTemplate);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Créez votre CV</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <CVForm
          cvData={cvData}
          updateCVData={updateCVData}
          selectedTemplate={selectedTemplate}
          changeTemplate={changeTemplate}
        />
        <CVPreview
          cvData={cvData}
          selectedTemplate={selectedTemplate}
        />
      </div>
    </div>
  );
};

export default CVBuilder;