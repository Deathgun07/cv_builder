import { PDFDownloadLink } from '@react-pdf/renderer';
import {
  ClassiqueElegant,
  ModerneCreatif,
  TechInnovant,
  ExecutifSophistique,
  FraisDebutant,
  PolyvalentProfessionnel
} from './cv-templates';
import {
  ClassiqueElegantPDF,
  ModerneCreatifPDF,
  TechInnovantPDF,
  ExecutifSophistiquePDF,
  FraisDebutantPDF,
  PolyvalentProfessionnelPDF
} from './CVPDFTemplates';

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

  const renderPDFTemplate = () => {
    switch (selectedTemplate) {
      case 'template1':
        return <ClassiqueElegantPDF cvData={cvData} />;
      case 'template2':
        return <ModerneCreatifPDF cvData={cvData} />;
      case 'template3':
        return <TechInnovantPDF cvData={cvData} />;
      case 'template4':
        return <ExecutifSophistiquePDF cvData={cvData} />;
      case 'template5':
        return <FraisDebutantPDF cvData={cvData} />;
      case 'template6':
        return <PolyvalentProfessionnelPDF cvData={cvData} />;
      default:
        return <ClassiqueElegantPDF cvData={cvData} />;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Aperçu du CV</h2>
        <div className="bg-gray-100 rounded-lg p-4">
          {renderTemplate()}
        </div>
        <div className="mt-4 text-center">
          <PDFDownloadLink
            document={renderPDFTemplate()}
            fileName="mon_cv.pdf"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {({ blob, url, loading, error }) =>
              loading ? 'Chargement du PDF...' : 'Télécharger en PDF'
            }
          </PDFDownloadLink>
        </div>
      </div>
    </div>
  );
};

export default CVPreview;