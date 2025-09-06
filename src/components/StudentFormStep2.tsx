import React from "react";
import { StudentCardType } from "./StudentCardType";
import type { CardVariant } from "./Cards/Card";
import { VARIANT_MAP } from "./Cards/VARIANT_MAP";

interface StudentFormStep2Props {
  cardType: CardVariant;
  setCardType: (type: CardVariant) => void;
  form: Omit<import("./StudentForm").StudentFormData, "cardType">;
  onNext: (e: React.FormEvent<HTMLFormElement>) => void;
  onBack: () => void;
}

export const StudentFormStep2 = ({
  cardType,
  setCardType,
  form,
  onNext,
  onBack,
}: StudentFormStep2Props) => (
  <form onSubmit={onNext} className="space-y-6">
    <h2 className="text-2xl font-bold text-cyan-400 tracking-widest mb-6 text-center drop-shadow-lg">
      Selecciona el tipo de etiqueta
    </h2>
    <div className="flex flex-col gap-4 px-8">
      {Object.keys(VARIANT_MAP).map((variant, index) => (
        <StudentCardType
          key={index}
          variant={variant}
          onChange={setCardType}
          selected={cardType === variant}
          studentData={{
            firstName: form.firstName,
            lastName: form.lastName,
            grade: form.grade,
            section: form.section,
            group: form.group,
            listNumber: form.listNumber,
          }}
          subject={form.subjects[0]}
        />
      ))}
    </div>
    <button
      type="submit"
      className="bg-cyan-900 hover:bg-cyan-800 text-cyan-200 px-4 py-2 rounded-lg font-semibold shadow-md transition-all duration-200 mt-2 w-full hover:cursor-pointer mb-0"
    >
      Siguiente
    </button>
    <button
      type="button"
      onClick={onBack}
      className="w-full mt-4 bg-gray-700 hover:bg-gray-600 text-gray-200 px-6 py-2 rounded-xl font-semibold shadow-md transition-all duration-200 hover:cursor-pointer"
    >
      Volver
    </button>
  </form>
);
