import type { CardVariant } from "./Cards/Card";
import { StudentSubjectCards } from "./StudentSubjectCards";

type StudentCardTypeProps = {
  variant: CardVariant;
  onChange: (value: CardVariant) => void;
  selected?: boolean;
  studentData: {
    firstName: string;
    lastName: string;
    grade: string;
    section: string;
    group: string;
    listNumber: string;
  };
  subject: string;
};

export const StudentCardType = ({
  variant,
  studentData,
  subject,
  onChange,
  selected,
}: StudentCardTypeProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value as CardVariant);
  };

  return (
    <>
      <input
        type="radio"
        id={`${String(variant)}-option`}
        value={String(variant)}
        className="hidden peer"
        onChange={handleChange}
        checked={selected}
        required
      />
      <label
        htmlFor={`${String(variant)}-option`}
        className={`cursor-pointer transition-all duration-200 hover:shadow-2xl/50 shadow-white mb-4 hover:-translate-y-2 hover:scale-103
          ${selected && "shadow-2xl/50 shadow-white"}`}
      >
        <StudentSubjectCards
          subject={subject}
          firstName={studentData.firstName}
          lastName={studentData.lastName}
          grade={studentData.grade}
          section={studentData.section}
          group={studentData.group}
          listNumber={studentData.listNumber}
          variant={variant}
          labelSize={30}
        />
      </label>
    </>
  );
};
