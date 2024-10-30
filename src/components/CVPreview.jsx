import {
  ClassiqueElegant,
  ModerneCreatif,
  TechInnovant,
  ExecutifSophistique,
  FraisDebutant,
  PolyvalentProfessionnel
} from './cv-templates';

const CVPreview = ({ cvData, selectedTemplate }) => {
  const renderTemplate = () => {
    switch (selectedTemplate) {
      case 'template1':
        return <ClassiqueElegant cvData={cvData} />;
      case 'template2':
        return <ModerneCreatif cvData={cvData} />;
      case 'template3':
        return <TechInnovant cvData={cvData} />;
      case 'template4':
        return <ExecutifSophistique cvData={cvData} />;
      case 'template5':
        return <FraisDebutant cvData={cvData} />;
      case 'template6':
        return <PolyvalentProfessionnel cvData={cvData} />;
      default:
        return <ClassiqueElegant cvData={cvData} />;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Aperçu du CV</h2>
        <div className="bg-gray-100 rounded-lg p-4">
          {renderTemplate()}
        </div>
      </div>
    </div>
  );
};

export default CVPreview;