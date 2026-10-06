export type Credential = {
  title: string;
  issuer: string;
  kind: 'Professional certificate' | 'Course certificate';
  issuedOn: string;
  verificationUrl: string;
  verificationCode: string;
  featured?: boolean;
};

export const credentials: Credential[] = [
  {
    title: 'Google Business Intelligence',
    issuer: 'Google',
    kind: 'Professional certificate',
    issuedOn: 'September 21, 2026',
    verificationUrl:
      'https://www.coursera.org/account/accomplishments/specialization/7O8QIFTFRZ8P',
    verificationCode: '7O8QIFTFRZ8P',
    featured: true,
  },
  {
    title: 'The Path to Insights: Data Models and Pipelines',
    issuer: 'Google',
    kind: 'Course certificate',
    issuedOn: 'September 21, 2026',
    verificationUrl:
      'https://www.coursera.org/account/accomplishments/verify/F6TWY7E8UA0R',
    verificationCode: 'F6TWY7E8UA0R',
  },
  {
    title: 'Decisions, Decisions: Dashboards and Reports',
    issuer: 'Google',
    kind: 'Course certificate',
    issuedOn: 'September 21, 2026',
    verificationUrl:
      'https://www.coursera.org/account/accomplishments/verify/HNRCH2WR91N6',
    verificationCode: 'HNRCH2WR91N6',
  },
  {
    title: 'Foundations of Business Intelligence',
    issuer: 'Google',
    kind: 'Course certificate',
    issuedOn: 'September 21, 2026',
    verificationUrl:
      'https://www.coursera.org/account/accomplishments/verify/5MWHJBDDWTPP',
    verificationCode: '5MWHJBDDWTPP',
  },
  {
    title: 'Foundations of Project Management',
    issuer: 'Google',
    kind: 'Course certificate',
    issuedOn: 'September 2026',
    verificationUrl:
      'https://www.coursera.org/account/accomplishments/verify/VQRJM4VY1ANP',
    verificationCode: 'VQRJM4VY1ANP',
  },
  {
    title: 'Accelerate Your Job Search with AI',
    issuer: 'Google',
    kind: 'Course certificate',
    issuedOn: 'September 16, 2026',
    verificationUrl:
      'https://www.coursera.org/account/accomplishments/verify/5TUSBDOHBBR2',
    verificationCode: '5TUSBDOHBBR2',
  },
  {
    title: 'Music Business Foundations',
    issuer: 'Berklee',
    kind: 'Course certificate',
    issuedOn: 'August 2026',
    verificationUrl:
      'https://www.coursera.org/account/accomplishments/verify/FM06XFRCTSML',
    verificationCode: 'FM06XFRCTSML',
  },
  {
    title: 'Launch Your Online Business',
    issuer: 'The State University of New York',
    kind: 'Course certificate',
    issuedOn: 'August 2026',
    verificationUrl:
      'https://www.coursera.org/account/accomplishments/verify/ANCAZERG5FW1',
    verificationCode: 'ANCAZERG5FW1',
  },
  {
    title: 'Introduction to Web Development',
    issuer: 'Microsoft',
    kind: 'Course certificate',
    issuedOn: 'March 2026',
    verificationUrl:
      'https://www.coursera.org/account/accomplishments/verify/9A46Y4DX1LNC',
    verificationCode: '9A46Y4DX1LNC',
  },
  {
    title: 'Introduction to Programming With C#',
    issuer: 'Microsoft',
    kind: 'Course certificate',
    issuedOn: 'March 2026',
    verificationUrl:
      'https://www.coursera.org/account/accomplishments/verify/2D85HQLZF1V7',
    verificationCode: '2D85HQLZF1V7',
  },
  {
    title: 'Foundations of Coding Full-Stack',
    issuer: 'Microsoft',
    kind: 'Course certificate',
    issuedOn: 'March 2026',
    verificationUrl:
      'https://www.coursera.org/account/accomplishments/verify/5J8HZT8BST7R',
    verificationCode: '5J8HZT8BST7R',
  },
  {
    title: 'Introduction to OpenAI Codex',
    issuer: 'Scrimba',
    kind: 'Course certificate',
    issuedOn: 'January 2026',
    verificationUrl:
      'https://www.coursera.org/account/accomplishments/verify/H3Q3THWFLXK8',
    verificationCode: 'H3Q3THWFLXK8',
  },
  {
    title: 'Create and Design Digital Products using Canva',
    issuer: 'Coursera',
    kind: 'Course certificate',
    issuedOn: 'January 2026',
    verificationUrl:
      'https://www.coursera.org/account/accomplishments/verify/2M50D0RKGA27',
    verificationCode: '2M50D0RKGA27',
  },
  {
    title: 'Python Data Analytics',
    issuer: 'Meta',
    kind: 'Course certificate',
    issuedOn: 'September 2025',
    verificationUrl:
      'https://www.coursera.org/account/accomplishments/verify/XK6ISSO18M9J',
    verificationCode: 'XK6ISSO18M9J',
  },
  {
    title: 'Data Analysis with Spreadsheets and SQL',
    issuer: 'Meta',
    kind: 'Course certificate',
    issuedOn: 'September 2025',
    verificationUrl:
      'https://www.coursera.org/account/accomplishments/verify/T92SGZ6YLZA8',
    verificationCode: 'T92SGZ6YLZA8',
  },
  {
    title: 'Introduction to Data Analytics',
    issuer: 'Meta',
    kind: 'Course certificate',
    issuedOn: 'September 2025',
    verificationUrl:
      'https://www.coursera.org/account/accomplishments/verify/S5J97ST3CKS1',
    verificationCode: 'S5J97ST3CKS1',
  },
  {
    title: 'Corporate Credit Risk Analysis Certification',
    issuer: 'STARWEAVER',
    kind: 'Course certificate',
    issuedOn: 'September 2025',
    verificationUrl:
      'https://www.coursera.org/account/accomplishments/verify/YUQCCLJ15JML',
    verificationCode: 'YUQCCLJ15JML',
  },
  {
    title: 'Data Analytics Methods for Marketing',
    issuer: 'Meta',
    kind: 'Course certificate',
    issuedOn: 'September 2025',
    verificationUrl:
      'https://www.coursera.org/account/accomplishments/verify/SDRJEE1HUMMA',
    verificationCode: 'SDRJEE1HUMMA',
  },
  {
    title: 'Statistics Foundations',
    issuer: 'Meta',
    kind: 'Course certificate',
    issuedOn: 'September 2025',
    verificationUrl:
      'https://www.coursera.org/account/accomplishments/verify/UJEGN22D0542',
    verificationCode: 'UJEGN22D0542',
  },
  {
    title: 'Marketing Analytics Foundation',
    issuer: 'Meta',
    kind: 'Course certificate',
    issuedOn: 'September 2025',
    verificationUrl:
      'https://www.coursera.org/account/accomplishments/verify/00OEW31GGSKN',
    verificationCode: '00OEW31GGSKN',
  },
  {
    title: 'Supply Chain Management and Analytics',
    issuer: 'Unilever',
    kind: 'Course certificate',
    issuedOn: 'May 2025',
    verificationUrl:
      'https://www.coursera.org/account/accomplishments/verify/QXUDNX8ZMS79',
    verificationCode: 'QXUDNX8ZMS79',
  },
  {
    title: 'Generative AI: Prompt Engineering Basics',
    issuer: 'IBM',
    kind: 'Course certificate',
    issuedOn: 'May 2025',
    verificationUrl:
      'https://www.coursera.org/account/accomplishments/verify/PVYUA8L5V0FV',
    verificationCode: 'PVYUA8L5V0FV',
  },
];
