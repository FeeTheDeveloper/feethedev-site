export type Certification = {
  title: string;
  issuedTo: string;
  issuedOn: string;
  issuer: string;
  partner: string;
  image: string | null;
  verifyUrl: string;
  secondaryVerifyUrl: string;
  description: string;
};

export const certifications: Certification[] = [
  {
    title: 'Google Business Intelligence Professional Certificate (v.2)',
    issuedTo: 'Fee Beatz',
    issuedOn: '2026-09-16',
    issuer: 'Coursera',
    partner: 'Google Business Intelligence',
    // Drop the real credential JPG at public/images/certifications/ and set
    // this path once it exists — do not point at a file that isn't there.
    image: null,
    verifyUrl: 'https://coursera.org/share/ece9e61de7dfb23580244d405d66814a',
    secondaryVerifyUrl: 'https://www.credly.com/go/CDFZ9fVQ',
    description:
      'Professional certificate demonstrating training in business intelligence, data workflows, reporting, dashboarding, and analytical decision support. Completed through Coursera.',
  },
];
