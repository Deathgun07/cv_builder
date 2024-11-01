import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';

// Enregistrez les polices nécessaires
Font.register({
  family: 'Roboto',
  src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf',
});

Font.register({
  family: 'Roboto-Bold',
  src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf',
});

// Styles communs
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Roboto',
  },
  section: {
    margin: 10,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Roboto-Bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
});

// ModerneProfessionnel PDF
export const ModerneProfessionnelPDF = ({ cvData }) => (
  <Document>
    <Page size="A4" style={[styles.page, { backgroundColor: '#F3F4F6' }]}>
      <View style={{ backgroundColor: '#2563EB', color: 'white', padding: 20, marginBottom: 20 }}>
        <Text style={styles.title}>{cvData.personalInfo.name}</Text>
        <Text style={styles.subtitle}>{cvData.personalInfo.title}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ width: '70%', paddingRight: 20 }}>
          <Text style={styles.subtitle}>Expérience</Text>
          {cvData.experiences.map((exp, index) => (
            <View key={index} style={{ marginBottom: 10 }}>
              <Text style={{ fontSize: 14, fontFamily: 'Roboto-Bold' }}>{exp.position}</Text>
              <Text style={styles.text}>{exp.company} | {exp.duration}</Text>
              <Text style={styles.text}>{exp.description}</Text>
            </View>
          ))}
          <Text style={[styles.subtitle, { marginTop: 20 }]}>Formation</Text>
          {cvData.education.map((edu, index) => (
            <View key={index} style={{ marginBottom: 10 }}>
              <Text style={{ fontSize: 14, fontFamily: 'Roboto-Bold' }}>{edu.degree}</Text>
              <Text style={styles.text}>{edu.school} | {edu.year}</Text>
            </View>
          ))}
        </View>
        <View style={{ width: '30%' }}>
          <Text style={styles.subtitle}>Compétences</Text>
          {cvData.skills.map((skill, index) => (
            <Text key={index} style={styles.text}>{skill.name}</Text>
          ))}
          <Text style={[styles.subtitle, { marginTop: 20 }]}>Langues</Text>
          {cvData.languages.map((lang, index) => (
            <Text key={index} style={styles.text}>{lang.name} - {lang.level}</Text>
          ))}
          <Text style={[styles.subtitle, { marginTop: 20 }]}>Loisirs</Text>
          <Text style={styles.text}>{cvData.hobbies}</Text>
        </View>
      </View>
    </Page>
  </Document>
);

// CreatifColore PDF
export const CreatifColorePDF = ({ cvData }) => (
  <Document>
    <Page size="A4" style={[styles.page, { backgroundColor: '#FAF5FF' }]}>
      <View style={{ alignItems: 'center', marginBottom: 20 }}>
        <Text style={[styles.title, { color: '#7C3AED' }]}>{cvData.personalInfo.name}</Text>
        <Text style={[styles.subtitle, { color: '#EC4899' }]}>{cvData.personalInfo.title}</Text>
      </View>
      <View style={{ flexDirection: 'row'  }}>
        <View style={{ width: '50%', paddingRight: 10 }}>
          <Text style={[styles.subtitle, { color: '#7C3AED' }]}>Expérience</Text>
          {cvData.experiences.map((exp, index) => (
            <View key={index} style={{ marginBottom: 10 }}>
              <Text style={{ fontSize: 14, fontFamily: 'Roboto-Bold' }}>{exp.position}</Text>
              <Text style={styles.text}>{exp.company} | {exp.duration}</Text>
              <Text style={styles.text}>{exp.description}</Text>
            </View>
          ))}
          <Text style={[styles.subtitle, { marginTop: 20, color: '#7C3AED' }]}>Formation</Text>
          {cvData.education.map((edu, index) => (
            <View key={index} style={{ marginBottom: 10 }}>
              <Text style={{ fontSize: 14, fontFamily: 'Roboto-Bold' }}>{edu.degree}</Text>
              <Text style={styles.text}>{edu.school} | {edu.year}</Text>
            </View>
          ))}
        </View>
        <View style={{ width: '50%', paddingLeft: 10 }}>
          <Text style={[styles.subtitle, { color: '#EC4899' }]}>Compétences</Text>
          {cvData.skills.map((skill, index) => (
            <Text key={index} style={styles.text}>{skill.name}</Text>
          ))}
          <Text style={[styles.subtitle, { marginTop: 20, color: '#EC4899' }]}>Langues</Text>
          {cvData.languages.map((lang, index) => (
            <Text key={index} style={styles.text}>{lang.name} - {lang.level}</Text>
          ))}
          <Text style={[styles.subtitle, { marginTop: 20, color: '#EC4899' }]}>Loisirs</Text>
          <Text style={styles.text}>{cvData.hobbies}</Text>
        </View>
      </View>
    </Page>
  </Document>
);

// MinimalisteElegant PDF
export const MinimalisteElegantPDF = ({ cvData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={[styles.title, { fontWeight: 300 }]}>{cvData.personalInfo.name}</Text>
      <Text style={[styles.subtitle, { color: '#4B5563', marginBottom: 20 }]}>{cvData.personalInfo.title}</Text>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ width: '70%', paddingRight: 20 }}>
          <Text style={[styles.subtitle, { fontWeight: 300 }]}>Expérience</Text>
          {cvData.experiences.map((exp, index) => (
            <View key={index} style={{ marginBottom: 10 }}>
              <Text style={{ fontSize: 14, fontFamily: 'Roboto-Bold' }}>{exp.position}</Text>
              <Text style={styles.text}>{exp.company} | {exp.duration}</Text>
              <Text style={styles.text}>{exp.description}</Text>
            </View>
          ))}
          <Text style={[styles.subtitle, { marginTop: 20, fontWeight: 300 }]}>Formation</Text>
          {cvData.education.map((edu, index) => (
            <View key={index} style={{ marginBottom: 10 }}>
              <Text style={{ fontSize: 14, fontFamily: 'Roboto-Bold' }}>{edu.degree}</Text>
              <Text style={styles.text}>{edu.school} | {edu.year}</Text>
            </View>
          ))}
        </View>
        <View style={{ width: '30%' }}>
          <Text style={[styles.subtitle, { fontWeight: 300 }]}>Compétences</Text>
          {cvData.skills.map((skill, index) => (
            <Text key={index} style={styles.text}>{skill.name}</Text>
          ))}
          <Text style={[styles.subtitle, { marginTop: 20, fontWeight: 300 }]}>Langues</Text>
          {cvData.languages.map((lang, index) => (
            <Text key={index} style={styles.text}>{lang.name} - {lang.level}</Text>
          ))}
          <Text style={[styles.subtitle, { marginTop: 20, fontWeight: 300 }]}>Loisirs</Text>
          <Text style={styles.text}>{cvData.hobbies}</Text>
        </View>
      </View>
    </Page>
  </Document>
);

// TechInnovant PDF
export const TechInnovantPDF = ({ cvData }) => (
  <Document>
    <Page size="A4" style={[styles.page, { backgroundColor: '#000000', color: '#22C55E' }]}>
      <Text style={[styles.title, { fontFamily: 'Courier' }]}>{cvData.personalInfo.name}</Text>
      <Text style={[styles.subtitle, { fontFamily: 'Courier', marginBottom: 20 }]}>{cvData.personalInfo.title}</Text>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ width: '50%', paddingRight: 10 }}>
          <Text style={[styles.subtitle, { fontFamily: 'Courier' }]}>// Expérience</Text>
          {cvData.experiences.map((exp, index) => (
            <View key={index} style={{ marginBottom: 10 }}>
              <Text style={{ fontSize: 14, fontFamily: 'Courier-Bold' }}>{exp.position}</Text>
              <Text style={[styles.text, { fontFamily: 'Courier' }]}>{exp.company} | {exp.duration}</Text>
              <Text style={[styles.text, { fontFamily: 'Courier' }]}>{exp.description}</Text>
            </View>
          ))}
          <Text style={[styles.subtitle, { marginTop: 20, fontFamily: 'Courier' }]}>// Formation</Text>
          {cvData.education.map((edu, index) => (
            <View key={index} style={{ marginBottom: 10 }}>
              <Text style={{ fontSize: 14, fontFamily: 'Courier-Bold' }}>{edu.degree}</Text>
              <Text style={[styles.text, { fontFamily: 'Courier' }]}>{edu.school} | {edu.year}</Text>
            </View>
          ))}
        </View>
        <View style={{ width: '50%', paddingLeft: 10 }}>
          <Text style={[styles.subtitle, { fontFamily: 'Courier' }]}>// Compétences</Text>
          {cvData.skills.map((skill, index) => (
            <Text key={index} style={[styles.text, { fontFamily: 'Courier' }]}>{skill.name}</Text>
          ))}
          <Text style={[styles.subtitle, { marginTop: 20, fontFamily: 'Courier' }]}>// Langues</Text>
          {cvData.languages.map((lang, index) => (
            <Text key={index} style={[styles.text, { fontFamily: 'Courier' }]}>{lang.name} - {lang.level}</Text>
          ))}
          <Text style={[styles.subtitle, { marginTop: 20, fontFamily: 'Courier' }]}>// Loisirs</Text>
          <Text style={[styles.text, { fontFamily: 'Courier' }]}>{cvData.hobbies}</Text>
        </View>
      </View>
    </Page>
  </Document>
);

// ClassiqueRaffine PDF
export const ClassiqueRaffinePDF = ({ cvData }) => (
  <Document>
    <Page size="A4" style={[styles.page, { backgroundColor: '#FFFBEB' }]}>
      <View style={{ alignItems: 'center', marginBottom: 20, borderBottom: 1, borderColor: '#92400E', paddingBottom: 10 }}>
        <Text style={[styles.title, { fontFamily: 'Times-Roman' }]}>{cvData.personalInfo.name}</Text>
        <Text style={[styles.subtitle, { fontFamily: 'Times-Roman', color: '#92400E' }]}>{cvData.personalInfo.title}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ width: '70%', paddingRight: 20 }}>
          <Text style={[styles.subtitle, { fontFamily: 'Times-Roman', color: '#92400E' }]}>Expérience</Text>
          {cvData.experiences.map((exp, index) => (
            <View key={index} style={{ marginBottom: 10 }}>
              <Text style={{ fontSize: 14, fontFamily: 'Times-Bold' }}>{exp.position}</Text>
              <Text style={[styles.text, { fontFamily: 'Times-Roman', fontStyle: 'italic' }]}>{exp.company} | {exp.duration}</Text>
              <Text style={[styles.text, { fontFamily: 'Times-Roman' }]}>{exp.description}</Text>
            </View>
          ))}
          <Text style={[styles.subtitle, { marginTop: 20, fontFamily: 'Times-Roman', color: '#92400E' }]}>Formation</Text>
          {cvData.education.map((edu, index) => (
            <View key={index} style={{ marginBottom: 10 }}>
              <Text style={{ fontSize: 14, fontFamily: 'Times-Bold' }}>{edu.degree}</Text>
              <Text style={[styles.text, { fontFamily: 'Times-Roman', fontStyle: 'italic' }]}>{edu.school} | {edu.year}</Text>
            </View>
          ))}
        </View>
        <View style={{ width: '30%', borderLeft: 1, borderColor: '#92400E', paddingLeft: 10 }}>
          <Text style={[styles.subtitle, { fontFamily: 'Times-Roman', color: '#92400E' }]}>Compétences</Text>
          {cvData.skills.map((skill, index) => (
            <Text key={index} style={[styles.text, { fontFamily: 'Times-Roman' }]}>{skill.name}</Text>
          ))}
          <Text style={[styles.subtitle, { marginTop: 20, fontFamily: 'Times-Roman', color: '#92400E' }]}>Langues</Text>
          {cvData.languages.map((lang, index) => (
            <Text key={index} style={[styles.text, { fontFamily: 'Times-Roman' }]}>{lang.name} - {lang.level}</Text>
          ))}
          <Text style={[styles.subtitle, { marginTop: 20, fontFamily: 'Times-Roman', color: '#92400E' }]}>Loisirs</Text>
          <Text style={[styles.text, { fontFamily: 'Times-Roman' }]}>{cvData.hobbies}</Text>
        </View>
      </View>
    </Page>
  </Document>
);

// ModerneEpure PDF
export const ModerneEpurePDF = ({ cvData }) => (
  <Document>
    <Page size="A4" style={[styles.page, { backgroundColor: '#F3F4F6' }]}>
      <View style={{ backgroundColor: '#4F46E5', color: 'white', padding: 20, marginBottom: 20 }}>
        <Text style={[styles.title, { fontFamily: 'Helvetica-Bold' }]}>{cvData.personalInfo.name}</Text>
        <Text style={[styles.subtitle, { fontFamily: 'Helvetica' }]}>{cvData.personalInfo.title}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ width: '60%', paddingRight: 20 }}>
          <Text style={[styles.subtitle, { fontFamily: 'Helvetica-Bold', color: '#4F46E5' }]}>Expérience</Text>
          {cvData.experiences.map((exp, index) => (
            <View key={index} style={{ marginBottom: 10 }}>
              <Text style={{ fontSize: 14, fontFamily: 'Helvetica-Bold' }}>{exp.position}</Text>
              <Text style={[styles.text, { fontFamily: 'Helvetica' }]}>{exp.company} | {exp.duration}</Text>
              <Text style={[styles.text, { fontFamily: 'Helvetica' }]}>{exp.description}</Text>
            </View>
          ))}
          <Text style={[styles.subtitle, { marginTop: 20, fontFamily: 'Helvetica-Bold', color: '#4F46E5' }]}>Formation</Text>
          {cvData.education.map((edu, index) => (
            <View key={index} style={{ marginBottom: 10 }}>
              <Text style={{ fontSize: 14, fontFamily: 'Helvetica-Bold' }}>{edu.degree}</Text>
              <Text style={[styles.text, { fontFamily: 'Helvetica' }]}>{edu.school} | {edu.year}</Text>
            </View>
          ))}
        </View>
        <View style={{ width: '40%', backgroundColor: '#E0E7FF', padding: 10 }}>
          <Text style={[styles.subtitle, { fontFamily: 'Helvetica-Bold', color: '#4F46E5' }]}>Compétences</Text>
          {cvData.skills.map((skill, index) => (
            <Text key={index} style={[styles.text, { fontFamily: 'Helvetica' }]}>{skill.name}</Text>
          ))}
          <Text style={[styles.subtitle, { marginTop: 20, fontFamily: 'Helvetica-Bold', color: '#4F46E5' }]}>Langues</Text>
          {cvData.languages.map((lang, index) => (
            <Text key={index} style={[styles.text, { fontFamily: 'Helvetica' }]}>{lang.name} - {lang.level}</Text>
          ))}
          <Text style={[styles.subtitle, { marginTop: 20, fontFamily: 'Helvetica-Bold', color: '#4F46E5' }]}>Loisirs</Text>
          <Text style={[styles.text, { fontFamily: 'Helvetica' }]}>{cvData.hobbies}</Text>
        </View>
      </View>
    </Page>
  </Document>
);

// CreatifAudacieux PDF
export const CreatifAudacieuxPDF = ({ cvData }) => (
  <Document>
    <Page size="A4" style={[styles.page, { backgroundColor: '#FEF3C7' }]}>
      <View style={{ backgroundColor: '#000000', color: '#FEF3C7', padding: 20, marginBottom: 20 }}>
        <Text style={[styles.title, { fontFamily: 'Helvetica-Bold' }]}>{cvData.personalInfo.name}</Text>
        <Text style={[styles.subtitle, { fontFamily: 'Helvetica' }]}>{cvData.personalInfo.title}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ width: '50%', paddingRight: 10 }}>
          <Text style={[styles.subtitle, { fontFamily: 'Helvetica-Bold', color: '#000000' }]}>Expérience</Text>
          {cvData.experiences.map((exp, index) => (
            <View key={index} style={{ marginBottom: 10 }}>
              <Text style={{ fontSize: 14, fontFamily: 'Helvetica-Bold' }}>{exp.position}</Text>
              <Text style={[styles.text, { fontFamily: 'Helvetica' }]}>{exp.company} | {exp.duration}</Text>
              <Text style={[styles.text, { fontFamily: 'Helvetica' }]}>{exp.description}</Text>
            </View>
          ))}
          <Text style={[styles.subtitle, { marginTop: 20, fontFamily: 'Helvetica-Bold', color: '#000000' }]}>Formation</Text>
          {cvData.education.map((edu, index) => (
            <View key={index} style={{ marginBottom: 10 }}>
              <Text style={{ fontSize: 14, fontFamily: 'Helvetica-Bold' }}>{edu.degree}</Text>
              <Text style={[styles.text, { fontFamily: 'Helvetica' }]}>{edu.school} | {edu.year}</Text>
            </View>
          ))}
        </View>
        <View style={{ width: '50%', paddingLeft: 10, backgroundColor: '#000000', color: '#FEF3C7' }}>
          <Text style={[styles.subtitle, { fontFamily: 'Helvetica-Bold', color: '#FEF3C7' }]}>Compétences</Text>
          {cvData.skills.map((skill, index) => (
            <Text key={index} style={[styles.text, { fontFamily: 'Helvetica', color: '#FEF3C7' }]}>{skill.name}</Text>
          ))}
          <Text style={[styles.subtitle, { marginTop: 20, fontFamily: 'Helvetica-Bold', color: '#FEF3C7' }]}>Langues</Text>
          {cvData.languages.map((lang, index) => (
            <Text key={index} style={[styles.text, { fontFamily: 'Helvetica', color: '#FEF3C7' }]}>{lang.name} - {lang.level}</Text>
          ))}
          <Text style={[styles.subtitle, { marginTop: 20, fontFamily: 'Helvetica-Bold', color: '#FEF3C7' }]}>Loisirs</Text>
          <Text style={[styles.text, { fontFamily: 'Helvetica', color: '#FEF3C7' }]}>{cvData.hobbies}</Text>
        </View>
      </View>
    </Page>
  </Document>
);

// NaturelOrganique PDF
export const NaturelOrganiquePDF = ({ cvData }) => (
  <Document>
    <Page size="A4" style={[styles.page, { backgroundColor: '#ECFDF5', border: 4, borderColor: '#059669' }]}>
      <View style={{ backgroundColor: '#059669', color: 'white', padding: 20, marginBottom: 20 }}>
        <Text style={[styles.title, { fontFamily: 'Helvetica-Bold' }]}>{cvData.personalInfo.name}</Text>
        <Text style={[styles.subtitle, { fontFamily: 'Helvetica' }]}>{cvData.personalInfo.title}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ width: '60%', paddingRight: 20 }}>
          <Text style={[styles.subtitle, { fontFamily: 'Helvetica-Bold', color: '#059669' }]}>Expérience</Text>
          {cvData.experiences.map((exp, index) => (
            <View key={index} style={{ marginBottom: 10 }}>
              <Text style={{ fontSize: 14, fontFamily: 'Helvetica-Bold' }}>{exp.position}</Text>
              <Text style={[styles.text, { fontFamily: 'Helvetica' }]}>{exp.company} | {exp.duration}</Text>
              <Text style={[styles.text, { fontFamily: 'Helvetica' }]}>{exp.description}</Text>
            </View>
          ))}
          <Text style={[styles.subtitle, { marginTop: 20, fontFamily: 'Helvetica-Bold', color: '#059669' }]}>Formation</Text>
          {cvData.education.map((edu, index) => (
            <View key={index} style={{ marginBottom: 10 }}>
              <Text style={{ fontSize: 14, fontFamily: 'Helvetica-Bold' }}>{edu.degree}</Text>
              <Text style={[styles.text, { fontFamily: 'Helvetica' }]}>{edu.school} | {edu.year}</Text>
            </View>
          ))}
        </View>
        <View style={{ width: '40%', backgroundColor: '#D1FAE5', padding: 10 }}>
          <Text style={[styles.subtitle, { fontFamily: 'Helvetica-Bold', color: '#059669' }]}>Compétences</Text>
          {cvData.skills.map((skill, index) => (
            <Text key={index} style={[styles.text, { fontFamily: 'Helvetica' }]}>{skill.name}</Text>
          ))}
          <Text style={[styles.subtitle, { marginTop: 20, fontFamily: 'Helvetica-Bold', color: '#059669' }]}>Langues</Text>
          {cvData.languages.map((lang, index) => (
            <Text key={index} style={[styles.text, { fontFamily: 'Helvetica' }]}>{lang.name} - {lang.level}</Text>
          ))}
          <Text style={[styles.subtitle, { marginTop: 20, fontFamily: 'Helvetica-Bold', color: '#059669' }]}>Loisirs</Text>
          <Text style={[styles.text, { fontFamily: 'Helvetica' }]}>{cvData.hobbies}</Text>
        </View>
      </View>
    </Page>
  </Document>
);

// UrbanChic PDF
export const UrbanChicPDF = ({ cvData }) => (
  <Document>
    <Page size="A4" style={[styles.page, { backgroundColor: '#111827', color: '#F9FAFB' }]}>
      <Text style={[styles.title, { fontFamily: 'Helvetica-Bold', fontSize: 32, color: '#F9FAFB' }]}>{cvData.personalInfo.name}</Text>
      <Text style={[styles.subtitle, { fontFamily: 'Helvetica', color: '#9CA3AF', marginBottom: 20 }]}>{cvData.personalInfo.title}</Text>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ width: '60%', paddingRight: 20 }}>
          <Text style={[styles.subtitle, { fontFamily: 'Helvetica-Bold', color: '#D1D5DB' }]}>Expérience</Text>
          {cvData.experiences.map((exp, index) => (
            <View key={index} style={{ marginBottom: 10 }}>
              <Text style={{ fontSize: 14, fontFamily: 'Helvetica-Bold', color: '#F9FAFB' }}>{exp.position}</Text>
              <Text style={[styles.text, { fontFamily: 'Helvetica', color: '#9CA3AF' }]}>{exp.company} | {exp.duration}</Text>
              <Text style={[styles.text, { fontFamily: 'Helvetica', color: '#D1D5DB' }]}>{exp.description}</Text>
            </View>
          ))}
          <Text style={[styles.subtitle, { marginTop: 20, fontFamily: 'Helvetica-Bold', color: '#D1D5DB' }]}>Formation</Text>
          {cvData.education.map((edu, index) => (
            <View key={index} style={{ marginBottom: 10 }}>
              <Text style={{ fontSize: 14, fontFamily: 'Helvetica-Bold', color: '#F9FAFB' }}>{edu.degree}</Text>
              <Text style={[styles.text, { fontFamily: 'Helvetica', color: '#9CA3AF' }]}>{edu.school} | {edu.year}</Text>
            </View>
          ))}
        </View>
        <View style={{ width: '40%', borderLeft: 1, borderColor: '#4B5563', paddingLeft: 10 }}>
          <Text style={[styles.subtitle, { fontFamily: 'Helvetica-Bold', color: '#D1D5DB' }]}>Compétences</Text>
          {cvData.skills.map((skill, index) => (
            <Text key={index} style={[styles.text, { fontFamily: 'Helvetica', color: '#9CA3AF' }]}>{skill.name}</Text>
          ))}
          <Text style={[styles.subtitle, { marginTop: 20, fontFamily: 'Helvetica-Bold', color: '#D1D5DB' }]}>Langues</Text>
          {cvData.languages.map((lang, index) => (
            <Text key={index} style={[styles.text, { fontFamily: 'Helvetica', color: '#9CA3AF' }]}>{lang.name} - {lang.level}</Text>
          ))}
          <Text style={[styles.subtitle, { marginTop: 20, fontFamily: 'Helvetica-Bold', color: '#D1D5DB' }]}>Loisirs</Text>
          <Text style={[styles.text, { fontFamily: 'Helvetica', color: '#9CA3AF' }]}>{cvData.hobbies}</Text>
        </View>
      </View>
    </Page>
  </Document>
);

// ArtistiqueCreatif PDF
export const ArtistiqueCreatifPDF = ({ cvData }) => (
  <Document>
    <Page size="A4" style={[styles.page, { backgroundColor: '#FDF2F8' }]}>
      <View style={{ alignItems: 'center', marginBottom: 20 }}>
        <Text style={[styles.title, { fontFamily: 'Helvetica-Bold', color: '#9D174D' }]}>{cvData.personalInfo.name}</Text>
        <Text style={[styles.subtitle, { fontFamily: 'Helvetica', color: '#BE185D' }]}>{cvData.personalInfo.title}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ width: '50%', paddingRight: 10 }}>
          <Text style={[styles.subtitle, { fontFamily: 'Helvetica-Bold', color: '#9D174D' }]}>Expérience</Text>
          {cvData.experiences.map((exp, index) => (
            <View key={index} style={{ marginBottom: 10 }}>
              <Text style={{ fontSize: 14, fontFamily: 'Helvetica-Bold', color: '#BE185D' }}>{exp.position}</Text>
              <Text style={[styles.text, { fontFamily: 'Helvetica', color: '#9D174D' }]}>{exp.company} | {exp.duration}</Text>
              <Text style={[styles.text, { fontFamily: 'Helvetica' }]}>{exp.description}</Text>
            </View>
          ))}
          <Text style={[styles.subtitle, { marginTop: 20, fontFamily: 'Helvetica-Bold', color: '#9D174D' }]}>Formation</Text>
          {cvData.education.map((edu, index) => (
            <View key={index} style={{ marginBottom: 10 }}>
              <Text style={{ fontSize: 14, fontFamily: 'Helvetica-Bold', color: '#BE185D' }}>{edu.degree}</Text>
              <Text style={[styles.text, { fontFamily: 'Helvetica', color: '#9D174D' }]}>{edu.school} | {edu.year}</Text>
            </View>
          ))}
        </View>
        <View style={{ width: '50%', paddingLeft: 10, backgroundColor: '#FBCFE8', borderRadius: 10 }}>
          <Text style={[styles.subtitle, { fontFamily: 'Helvetica-Bold', color: '#9D174D' }]}>Compétences</Text>
          {cvData.skills.map((skill, index) => (
            <Text key={index} style={[styles.text, { fontFamily: 'Helvetica' }]}>{skill.name}</Text>
          ))}
          <Text style={[styles.subtitle, { marginTop: 20, fontFamily: 'Helvetica-Bold', color: '#9D174D' }]}>Langues</Text>
          {cvData.languages.map((lang, index) => (
            <Text key={index} style={[styles.text, { fontFamily: 'Helvetica' }]}>{lang.name} - {lang.level}</Text>
          ))}
          <Text style={[styles.subtitle, { marginTop: 20, fontFamily: 'Helvetica-Bold', color: '#9D174D' }]}>Loisirs</Text>
          <Text style={[styles.text, { fontFamily: 'Helvetica' }]}>{cvData.hobbies}</Text>
        </View>
      </View>
    </Page>
  </Document>
);