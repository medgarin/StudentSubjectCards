import { useState } from "react";
import { StudentFormStep1 } from "./StudentFormStep1";
import { StudentFormStep2 } from "./StudentFormStep2";
import { StudentFormStep3 } from "./StudentFormStep3";
import type { CardVariant } from "./Cards/Card";

export interface StudentFormData {
  firstName: string;
  lastName: string;
  grade: string;
  section: string;
  group: string;
  listNumber: string;
  subjects: string[];
  numberOfTags: number;
  labelSize: number;
  labelColor: string;
  cardType: CardVariant;
}

interface StudentFormProps {
  onSubmit: (data: StudentFormData) => void;
}

export const StudentForm = ({ onSubmit }: StudentFormProps) => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<Omit<StudentFormData, "cardType">>({
    firstName: "",
    lastName: "",
    grade: "",
    section: "",
    group: "",
    listNumber: "",
    labelSize: 14,
    subjects: [""],
    numberOfTags: 1,
    labelColor: "#1c398e",
  });
  const [cardType, setCardType] = useState<CardVariant>("classic");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubjectChange = (idx: number, value: string) => {
    setForm((prev) => {
      const newSubjects = [...prev.subjects];
      newSubjects[idx] = value;
      return { ...prev, subjects: newSubjects };
    });
  };

  const addSubject = () => {
    setForm((prev) => ({ ...prev, subjects: [...prev.subjects, ""] }));
  };

  const removeSubject = (idx: number) => {
    setForm((prev) => {
      const newSubjects = prev.subjects.filter((_, i) => i !== idx);
      return { ...prev, subjects: newSubjects };
    });
  };

  const goToStep = (nextStep: number) => setStep(nextStep);

  const handleLabelSizeChange = (value: number) => {
    setForm((prev) => ({ ...prev, labelSize: value }));
  };

  const handleLabelColorChange = (value: string) => {
    setForm((prev) => ({ ...prev, labelColor: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({
      ...form,
      numberOfTags: Number(form.numberOfTags),
      subjects: form.subjects.filter((s) => s.trim()),
      cardType,
    });
  };

  return (
    <div className="mb-8 space-y-6 print:hidden">
      {step === 1 && (
        <StudentFormStep1
          form={form}
          onChange={handleChange}
          onSubjectChange={handleSubjectChange}
          addSubject={addSubject}
          removeSubject={removeSubject}
          onNext={() => goToStep(2)}
        />
      )}
      {step === 2 && (
        <StudentFormStep2
          cardType={cardType}
          setCardType={setCardType}
          form={form}
          onNext={() => goToStep(3)}
          onBack={() => goToStep(1)}
        />
      )}
      {step === 3 && (
        <StudentFormStep3
          form={form}
          cardType={cardType}
          onLabelSizeChange={handleLabelSizeChange}
          onLabelColorChange={handleLabelColorChange}
          onSubmit={handleSubmit}
          onBack={() => goToStep(2)}
        />
      )}
    </div>
  );
};
