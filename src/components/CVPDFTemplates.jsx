import { Page, Text, View, Document, StyleSheet, Font, Image } from '@react-pdf/renderer';

// Assurez-vous d'importer les polices nécessaires
Font.register({
  family: 'Roboto',
  src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf',
});

Font.register({
  family: 'Roboto-Bold',
  src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf',
});

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 30,
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
    fontFamily: 'Roboto-Bold',
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
    fontFamily: 'Roboto',
    marginBottom: 5,
  },
});

export const ClassiqueElegantPDF = ({ cvData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>{cvData.personalInfo.name}</Text>
        <Text style={styles.text}>{cvData.personalInfo.email} | {cvData.personalInfo.phone}</Text>
        <Text style={styles.text}>{cvData.personalInfo.address}</Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.subtitle}>Profil</Text>
        <Text style={styles.text}>{cvData.profile}</Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.subtitle}>Expérience Professionnelle</Text>
        {cvData.experiences.map((exp, index) => (
          <View key={index} style={styles.section}>
            <Text style={[styles.text, { fontFamily: 'Roboto-Bold' }]}>{exp.position}</Text>
            <Text style={styles.text}>{exp.company}, {exp.duration}</Text>
            <Text style={styles.text}>{exp.description}</Text>
          </View>
        ))}
      </View>
      
      <View style={styles.section}>
        <Text style={styles.subtitle}>Formation</Text>
        {cvData.education.map((edu, index) => (
          <View key={index} style={styles.section}>
            <Text style={[styles.text, { fontFamily: 'Roboto-Bold' }]}>{edu.degree}</Text>
            <Text style={styles.text}>{edu.school}, {edu.year}</Text>
          </View>
        ))}
      </View>
      
      <View style={styles.section}>
        <Text style={styles.subtitle}>Compétences</Text>
        {cvData.skills.map((skill, index) => (
          <Text key={index} style={styles.text}>{skill.name} - {skill.level}%</Text>
        ))}
      </View>
    </Page>
  </Document>
);

const moderneCreatifStyles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 30,
  },
  header: {
    backgroundColor: '#4B0082',
    color: '#FFFFFF',
    padding: 20,
    marginBottom: 20,
  },
  headerName: {
    fontSize: 28,
    fontFamily: 'Roboto-Bold',
  },
  headerContact: {
    fontSize: 12,
    fontFamily: 'Roboto',
    marginTop: 5,
  },
  section: {
    margin: 10,
    padding: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Roboto-Bold',
    marginBottom: 10,
    color: '#4B0082',
  },
  experienceItem: {
    marginBottom: 10,
  },
  experienceTitle: {
    fontSize: 14,
    fontFamily: 'Roboto-Bold',
  },
  experienceDetails: {
    fontSize: 12,
    fontFamily: 'Roboto',
    color: '#666666',
  },
  skillItem: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  skillName: {
    fontSize: 12,
    fontFamily: 'Roboto',
    width: '50%',
  },
  skillLevel: {
    fontSize: 12,
    fontFamily: 'Roboto',
    width: '50%',
  },
});

export const ModerneCreatifPDF = ({ cvData }) => (
  <Document>
    <Page size="A4" style={moderneCreatifStyles.page}>
      <View style={moderneCreatifStyles.header}>
        <Text style={moderneCreatifStyles.headerName}>{cvData.personalInfo.name}</Text>
        <Text style={moderneCreatifStyles.headerContact}>
          {cvData.personalInfo.email} | {cvData.personalInfo.phone} | {cvData.personalInfo.address}
        </Text>
      </View>
      
      <View style={moderneCreatifStyles.section}>
        <Text style={moderneCreatifStyles.sectionTitle}>Profil</Text>
        <Text style={moderneCreatifStyles.experienceDetails}>{cvData.profile}</Text>
      </View>
      
      <View style={moderneCreatifStyles.section}>
        <Text style={moderneCreatifStyles.sectionTitle}>Expérience Professionnelle</Text>
        {cvData.experiences.map((exp, index) => (
          <View key={index} style={moderneCreatifStyles.experienceItem}>
            <Text style={moderneCreatifStyles.experienceTitle}>{exp.position}</Text>
            <Text style={moderneCreatifStyles.experienceDetails}>{exp.company}, {exp.duration}</Text>
            <Text style={moderneCreatifStyles.experienceDetails}>{exp.description}</Text>
          </View>
        ))}
      </View>
      
      <View style={moderneCreatifStyles.section}>
        <Text style={moderneCreatifStyles.sectionTitle}>Formation</Text>
        {cvData.education.map((edu, index) => (
          <View key={index} style={moderneCreatifStyles.experienceItem}>
            <Text style={moderneCreatifStyles.experienceTitle}>{edu.degree}</Text>
            <Text style={moderneCreatifStyles.experienceDetails}>{edu.school}, {edu.year}</Text>
          </View>
        ))}
      </View>
      
      <View style={moderneCreatifStyles.section}>
        <Text style={moderneCreatifStyles.sectionTitle}>Compétences</Text>
        {cvData.skills.map((skill, index) => (
          <View key={index} style={moderneCreatifStyles.skillItem}>
            <Text style={moderneCreatifStyles.skillName}>{skill.name}</Text>
            <Text style={moderneCreatifStyles.skillLevel}>{skill.level}%</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

const techInnovantStyles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#1A1A1A',
    padding: 30,
    color: '#00FF00',
  },
  header: {
    borderBottom: 2,
    borderBottomColor: '#00FF00',
    marginBottom: 20,
    paddingBottom: 10,
  },
  headerName: {
    fontSize: 28,
    fontFamily: 'Roboto-Bold',
  },
  headerContact: {
    fontSize: 12,
    fontFamily: 'Roboto',
    marginTop: 5,
  },
  section: {
    margin: 10,
    padding: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Roboto-Bold',
    marginBottom: 10,
    color: '#00FF00',
  },
  experienceItem: {
    marginBottom: 10,
  },
  experienceTitle: {
    fontSize: 14,
    fontFamily: 'Roboto-Bold',
    color: '#FFFFFF',
  },
  experienceDetails: {
    fontSize: 12,
    fontFamily: 'Roboto',
    color: '#CCCCCC',
  },
  skillItem: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  skillName: {
    fontSize: 12,
    fontFamily: 'Roboto',
    width: '50%',
  },
  skillLevel: {
    fontSize: 12,
    fontFamily: 'Roboto',
    width: '50%',
  },
});

export const TechInnovantPDF = ({ cvData }) => (
  <Document>
    <Page size="A4" style={techInnovantStyles.page}>
      <View style={techInnovantStyles.header}>
        <Text style={techInnovantStyles.headerName}>{cvData.personalInfo.name}</Text>
        <Text style={techInnovantStyles.headerContact}>
          {cvData.personalInfo.email} | {cvData.personalInfo.phone} | {cvData.personalInfo.address}
        </Text>
      </View>
      
      <View style={techInnovantStyles.section}>
        <Text style={techInnovantStyles.sectionTitle}>// Profil</Text>
        <Text style={techInnovantStyles.experienceDetails}>{cvData.profile}</Text>
      </View>
      
      <View style={techInnovantStyles.section}>
        <Text style={techInnovantStyles.sectionTitle}>// Expérience Professionnelle</Text>
        {cvData.experiences.map((exp, index) => (
          <View key={index} style={techInnovantStyles.experienceItem}>
            <Text style={techInnovantStyles.experienceTitle}>{exp.position}</Text>
            <Text style={techInnovantStyles.experienceDetails}>{exp.company}, {exp.duration}</Text>
            <Text style={techInnovantStyles.experienceDetails}>{exp.description}</Text>
          </View>
        ))}
      </View>
      
      <View style={techInnovantStyles.section}>
        <Text style={techInnovantStyles.sectionTitle}>// Formation</Text>
        {cvData.education.map((edu, index) => (
          <View key={index} style={techInnovantStyles.experienceItem}>
            <Text style={techInnovantStyles.experienceTitle}>{edu.degree}</Text>
            <Text style={techInnovantStyles.experienceDetails}>{edu.school}, {edu.year}</Text>
          </View>
        ))}
      </View>
      
      <View style={techInnovantStyles.section}>
        <Text style={techInnovantStyles.sectionTitle}>// Compétences</Text>
        {cvData.skills.map((skill, index) => (
          <View key={index} style={techInnovantStyles.skillItem}>
            <Text style={techInnovantStyles.skillName}>{skill.name}</Text>
            <Text  style={techInnovantStyles.skillLevel}>{skill.level}%</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

// Assurez-vous que les polices sont correctement importées
Font.register({
  family: 'Roboto',
  src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf',
});

Font.register({
  family: 'Roboto-Bold',
  src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf',
});

// Styles pour ExecutifSophistique
const executifSophistiqueStyles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 30,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  headerLeft: {
    width: '70%',
  },
  headerRight: {
    width: '30%',
    textAlign: 'right',
  },
  name: {
    fontSize: 24,
    fontFamily: 'Roboto-Bold',
    marginBottom: 5,
  },
  contactInfo: {
    fontSize: 10,
    fontFamily: 'Roboto',
    color: '#555555',
  },
  section: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 14,
    fontFamily: 'Roboto-Bold',
    marginBottom: 5,
    color: '#333333',
    textTransform: 'uppercase',
    borderBottom: 1,
    borderBottomColor: '#CCCCCC',
  },
  experienceItem: {
    marginBottom: 8,
  },
  experienceTitle: {
    fontSize: 12,
    fontFamily: 'Roboto-Bold',
  },
  experienceDetails: {
    fontSize: 10,
    fontFamily: 'Roboto',
    color: '#555555',
  },
  skillItem: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  skillName: {
    fontSize: 10,
    fontFamily: 'Roboto',
    width: '50%',
  },
  skillLevel: {
    fontSize: 10,
    fontFamily: 'Roboto',
    width: '50%',
  },
});

export const ExecutifSophistiquePDF = ({ cvData }) => (
  <Document>
    <Page size="A4" style={executifSophistiqueStyles.page}>
      <View style={executifSophistiqueStyles.header}>
        <View style={executifSophistiqueStyles.headerLeft}>
          <Text style={executifSophistiqueStyles.name}>{cvData.personalInfo.name}</Text>
          <Text style={executifSophistiqueStyles.contactInfo}>{cvData.personalInfo.email}</Text>
        </View>
        <View style={executifSophistiqueStyles.headerRight}>
          <Text style={executifSophistiqueStyles.contactInfo}>{cvData.personalInfo.phone}</Text>
          <Text style={executifSophistiqueStyles.contactInfo}>{cvData.personalInfo.address}</Text>
        </View>
      </View>

      <View style={executifSophistiqueStyles.section}>
        <Text style={executifSophistiqueStyles.sectionTitle}>Résumé professionnel</Text>
        <Text style={executifSophistiqueStyles.experienceDetails}>{cvData.profile}</Text>
      </View>

      <View style={executifSophistiqueStyles.section}>
        <Text style={executifSophistiqueStyles.sectionTitle}>Expérience professionnelle</Text>
        {cvData.experiences.map((exp, index) => (
          <View key={index} style={executifSophistiqueStyles.experienceItem}>
            <Text style={executifSophistiqueStyles.experienceTitle}>{exp.position}</Text>
            <Text style={executifSophistiqueStyles.experienceDetails}>{exp.company}, {exp.duration}</Text>
            <Text style={executifSophistiqueStyles.experienceDetails}>{exp.description}</Text>
          </View>
        ))}
      </View>

      <View style={executifSophistiqueStyles.section}>
        <Text style={executifSophistiqueStyles.sectionTitle}>Formation</Text>
        {cvData.education.map((edu, index) => (
          <View key={index} style={executifSophistiqueStyles.experienceItem}>
            <Text style={executifSophistiqueStyles.experienceTitle}>{edu.degree}</Text>
            <Text style={executifSophistiqueStyles.experienceDetails}>{edu.school}, {edu.year}</Text>
          </View>
        ))}
      </View>

      <View style={executifSophistiqueStyles.section}>
        <Text style={executifSophistiqueStyles.sectionTitle}>Compétences</Text>
        {cvData.skills.map((skill, index) => (
          <View key={index} style={executifSophistiqueStyles.skillItem}>
            <Text style={executifSophistiqueStyles.skillName}>{skill.name}</Text>
            <Text style={executifSophistiqueStyles.skillLevel}>{skill.level}%</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

// Styles pour FraisDebutant
const fraisDebutantStyles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#F0F8FF',
    padding: 30,
  },
  header: {
    backgroundColor: '#4682B4',
    padding: 20,
    marginBottom: 20,
  },
  headerName: {
    fontSize: 28,
    fontFamily: 'Roboto-Bold',
    color: '#FFFFFF',
  },
  headerContact: {
    fontSize: 12,
    fontFamily: 'Roboto',
    color: '#FFFFFF',
    marginTop: 5,
  },
  section: {
    backgroundColor: '#FFFFFF',
    margin: 10,
    padding: 10,
    borderRadius: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Roboto-Bold',
    marginBottom: 10,
    color: '#4682B4',
  },
  experienceItem: {
    marginBottom: 10,
  },
  experienceTitle: {
    fontSize: 14,
    fontFamily: 'Roboto-Bold',
  },
  experienceDetails: {
    fontSize: 12,
    fontFamily: 'Roboto',
    color: '#555555',
  },
  skillItem: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  skillName: {
    fontSize: 12,
    fontFamily: 'Roboto',
    width: '50%',
  },
  skillLevel: {
    fontSize: 12,
    fontFamily: 'Roboto',
    width: '50%',
  },
});

export const FraisDebutantPDF = ({ cvData }) => (
  <Document>
    <Page size="A4" style={fraisDebutantStyles.page}>
      <View style={fraisDebutantStyles.header}>
        <Text style={fraisDebutantStyles.headerName}>{cvData.personalInfo.name}</Text>
        <Text style={fraisDebutantStyles.headerContact}>
          {cvData.personalInfo.email} | {cvData.personalInfo.phone} | {cvData.personalInfo.address}
        </Text>
      </View>

      <View style={fraisDebutantStyles.section}>
        <Text style={fraisDebutantStyles.sectionTitle}>À propos de moi</Text>
        <Text style={fraisDebutantStyles.experienceDetails}>{cvData.profile}</Text>
      </View>

      <View style={fraisDebutantStyles.section}>
        <Text style={fraisDebutantStyles.sectionTitle}>Formation</Text>
        {cvData.education.map((edu, index) => (
          <View key={index} style={fraisDebutantStyles.experienceItem}>
            <Text style={fraisDebutantStyles.experienceTitle}>{edu.degree}</Text>
            <Text style={fraisDebutantStyles.experienceDetails}>{edu.school}, {edu.year}</Text>
          </View>
        ))}
      </View>

      <View style={fraisDebutantStyles.section}>
        <Text style={fraisDebutantStyles.sectionTitle}>Expérience</Text>
        {cvData.experiences.map((exp, index) => (
          <View key={index} style={fraisDebutantStyles.experienceItem}>
            <Text style={fraisDebutantStyles.experienceTitle}>{exp.position}</Text>
            <Text style={fraisDebutantStyles.experienceDetails}>{exp.company}, {exp.duration}</Text>
            <Text style={fraisDebutantStyles.experienceDetails}>{exp.description}</Text>
          </View>
        ))}
      </View>

      <View style={fraisDebutantStyles.section}>
        <Text style={fraisDebutantStyles.sectionTitle}>Compétences</Text>
        {cvData.skills.map((skill, index) => (
          <View key={index} style={fraisDebutantStyles.skillItem}>
            <Text style={fraisDebutantStyles.skillName}>{skill.name}</Text>
            <Text style={fraisDebutantStyles.skillLevel}>{skill.level}%</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

// Styles pour PolyvalentProfessionnel
const polyvalentProfessionnelStyles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 30,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#2C3E50',
    padding: 20,
    color: '#FFFFFF',
  },
  headerLeft: {
    width: '60%',
  },
  headerRight: {
    width: '40%',
    textAlign: 'right',
  },
  name: {
    fontSize: 24,
    fontFamily: 'Roboto-Bold',
    marginBottom: 5,
  },
  contactInfo: {
    fontSize: 10,
    fontFamily: 'Roboto',
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
    marginBottom: 10,
    color: '#2C3E50',
    borderBottom: 1,
    borderBottomColor: '#2C3E50',
  },
  experienceItem: {
    marginBottom: 8,
  },
  experienceTitle: {
    fontSize: 12,
    fontFamily: 'Roboto-Bold',
  },
  experienceDetails: {
    fontSize: 10,
    fontFamily: 'Roboto',
    color: '#555555',
  },
  skillItem: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  skillName: {
    fontSize: 10,
    fontFamily: 'Roboto',
    width: '50%',
  },
  skillLevel: {
    fontSize: 10,
    fontFamily: 'Roboto',
    width: '50%',
  },
});

export const PolyvalentProfessionnelPDF = ({ cvData }) => (
  <Document>
    <Page size="A4" style={polyvalentProfessionnelStyles.page}>
      <View style={polyvalentProfessionnelStyles.header}>
        <View style={polyvalentProfessionnelStyles.headerLeft}>
          <Text style={polyvalentProfessionnelStyles.name}>{cvData.personalInfo.name}</Text>
          <Text style={polyvalentProfessionnelStyles.contactInfo}>{cvData.personalInfo.email}</Text>
        </View>
        <View style={polyvalentProfessionnelStyles.headerRight}>
          <Text style={polyvalentProfessionnelStyles.contactInfo}>{cvData.personalInfo.phone}</Text>
          <Text style={polyvalentProfessionnelStyles.contactInfo}>{cvData.personalInfo.address}</Text>
        </View>
      </View>

      <View style={polyvalentProfessionnelStyles.section}>
        <Text style={polyvalentProfessionnelStyles.sectionTitle}>Profil</Text>
        <Text style={polyvalentProfessionnelStyles.experienceDetails}>{cvData.profile}</Text>
      </View>

      <View style={polyvalentProfessionnelStyles.section}>
        <Text style={polyvalentProfessionnelStyles.sectionTitle}>Expérience professionnelle</Text>
        {cvData.experiences.map((exp, index) => (
          <View key={index} style={polyvalentProfessionnelStyles.experienceItem}>
            <Text style={polyvalentProfessionnelStyles.experienceTitle}>{exp.position}</Text>
            <Text style={polyvalentProfessionnelStyles.experienceDetails}>{exp.company}, {exp.duration}</Text>
            <Text style={polyvalentProfessionnelStyles.experienceDetails}>{exp.description}</Text>
          </View>
        ))}
      </View>

      <View style={polyvalentProfessionnelStyles.section}>
        <Text style={polyvalentProfessionnelStyles.sectionTitle}>Formation</Text>
        {cvData.education.map((edu, index) => (
          <View key={index} style={polyvalentProfessionnelStyles.experienceItem}>
            <Text style={polyvalentProfessionnelStyles.experienceTitle}>{edu.degree}</Text>
            <Text style={polyvalentProfessionnelStyles.experienceDetails}>{edu.school}, {edu.year}</Text>
          </View>
        ))}
      </View>

      <View style={polyvalentProfessionnelStyles.section}>
        <Text style={polyvalentProfessionnelStyles.sectionTitle}>Compétences</Text>
        {cvData.skills.map((skill, index) => (
          <View key={index} style={polyvalentProfessionnelStyles.skillItem}>
            <Text style={polyvalentProfessionnelStyles.skillName}>{skill.name}</Text>
            <Text style={polyvalentProfessionnelStyles.skillLevel}>{skill.level}%</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);
