import { useState } from 'react'
import CVForm from './CVForm'
import CVPreview from './CVPreview'
import PDFGenerator from './PDFGenerator'

const CVBuilder = () => {
  const [cvData, setCVData] = useState({
    personalInfo: {
      name: '',
      email: '',
      phone: '',
      address: '',
    },
    profile: '',
    desiredPosition: '',
    experiences: [],
    education: [],
    skills: [],
    languages: [],
    hobbies: '',
  })

  const [selectedTemplate, setSelectedTemplate] = useState('classic')

  const updateCVData = (newData) => {
    setCVData(newData)
  }

  const changeTemplate = (newTemplate) => {
    setSelectedTemplate(newTemplate)
  }

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
        <div>
          <CVPreview cvData={cvData} selectedTemplate={selectedTemplate} />
          <PDFGenerator cvData={cvData} selectedTemplate={selectedTemplate} />
        </div>
      </div>
    </div>
  )
}

export default CVBuilder