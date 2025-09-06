export type StudentSubjectCardsType = {
  subject?: string;
  firstName: string;
  lastName: string;
  grade: string;
  section: string;
  group?: string;
  listNumber?: string;
  variant?: CardVariant;
  labelSize?: number;
  color?: string;
};

export type CardProps = StudentSubjectCardsType & {
  mainFontSize: string;
  widthStyle: React.CSSProperties;
  color: string;
};

export type CardVariant = keyof typeof VARIANT_MAP;
