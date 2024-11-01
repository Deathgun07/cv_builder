import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import {
  ModerneProfessionnel,
  CreatifColore,
  MinimalisteElegant,
  TechInnovant,
  ClassiqueRaffine,
  ModerneEpure,
  CreatifAudacieux,
  NaturelOrganique,
  UrbanChic,
  ArtistiqueCreatif
} from './cv-templates';
import {
  ModerneProfessionnelPDF,
  CreatifColorePDF,
  MinimalisteElegantPDF,
  TechInnovantPDF,
  ClassiqueRaffinePDF,
  ModerneEpurePDF,
  CreatifAudacieuxPDF,
  NaturelOrganiquePDF,
  UrbanChicPDF,
  ArtistiqueCreatifPDF
} from './CVPDFTemplates';

const CVPreview = ({ cvData, selectedTemplate }) => {
  // Fonction pour rendre le modèle de CV approprié
  const renderTemplate = () => {
    switch (selectedTemplate) {
      case 'ModerneProfessionnel':
        return <ModerneProfessionnel cvData={cvData} />;
      case 'CreatifColore':
        return <CreatifColore cvData={cvData} />;
      case 'MinimalisteElegant':
        return <MinimalisteElegant cvData={cvData} />;
      case 'TechInnovant':
        return <TechInnovant cvData={cvData} />;
      case 'ClassiqueRaffine':
        return <ClassiqueRaffine cvData={cvData} />;
      case 'ModerneEpure':
        return <ModerneEpure cvData={cvData} />;
      case 'CreatifAudacieux':
        return <CreatifAudacieux cvData={cvData} />;
      case 'NaturelOrganique':
        return <NaturelOrganique cvData={cvData} />;
      case 'UrbanChic':
        return <UrbanChic cvData={cvData} />;
      case 'ArtistiqueCreatif':
        return <ArtistiqueCreatif cvData={cvData} />;
      default:
        return <ModerneProfessionnel cvData={cvData} />;
    }
  };

  // Fonction pour obtenir le composant PDF approprié
  const getPDFComponent = () => {
    switch (selectedTemplate) {
      case 'ModerneProfessionnel':
        return ModerneProfessionnelPDF;
      case 'CreatifColore':
        return CreatifColorePDF;
      case 'MinimalisteElegant':
        return MinimalisteElegantPDF;
      case 'TechInnovant':
        return TechInnovantPDF;
      case 'ClassiqueRaffine':
        return ClassiqueRaffinePDF;
      case 'ModerneEpure':
        return ModerneEpurePDF;
      case 'CreatifAudacieux':
        return CreatifAudacieuxPDF;
      case 'NaturelOrganique':
        return NaturelOrganiquePDF;
      case 'UrbanChic':
        return UrbanChicPDF;
      case 'ArtistiqueCreatif':
        return ArtistiqueCreatifPDF;
      default:
        return ModerneProfessionnelPDF;
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
            document={React.createElement(getPDFComponent(), { cvData })}
            fileName="mon_cv.pdf"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {({ blob, url, loading, error }) =>
              loading ? 'Chargement du document...' : 'Télécharger le CV en PDF'
            }
          </PDFDownloadLink>
        </div>
      </div>
    </div>
  );
};

export default CVPreview;