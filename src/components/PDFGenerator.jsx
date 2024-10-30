import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer'
import {
  ClassiqueElegant,
  ModerneCreatif,
  TechInnovant,
  ExecutifSophistique,
  FraisDebutant,
  PolyvalentProfessionnel
} from './cv-templates';

const PDFDocument = ({ cvData, selectedTemplate }) => {
  const TemplateComponent = {
    classic: ClassiqueElegant,
    modern: ModerneCreatif,
    tech: TechInnovant,
    executive: ExecutifSophistique,
    beginner: FraisDebutant,
    versatile: PolyvalentProfessionnel
  }[selectedTemplate]

  return (
    <Document>
      <Page size="A4">
        <TemplateComponent cvData={cvData} />
      </Page>
    </Document>
  )
}

const PDFGenerator = ({ cvData, selectedTemplate }) => {
  return (
    <div className="mt-4">
      <PDFDownloadLink
        document={<PDFDocument cvData={cvData} selectedTemplate={selectedTemplate} />}
        fileName="mon_cv.pdf"
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
      >
        {({ blob, url, loading, error }) =>
          loading ? 'Génération du PDF...' : 'Télécharger le PDF'
        }
      </PDFDownloadLink>
    </div>
  )
}

export default PDFGenerator