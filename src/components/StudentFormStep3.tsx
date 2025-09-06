import React from "react";
import { StudentSubjectCards } from "./StudentSubjectCards";
import type { StudentFormData } from "./StudentForm";
import type { CardVariant } from "./Cards/Card";

interface StudentFormStep3Props {
  form: Omit<StudentFormData, "cardType">;
  cardType: CardVariant;
  onLabelSizeChange: (value: number) => void;
  onLabelColorChange: (value: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onBack: () => void;
}

export const StudentFormStep3 = ({
  form,
  cardType,
  onLabelSizeChange,
  onLabelColorChange,
  onSubmit,
  onBack,
}: StudentFormStep3Props) => (
  <form onSubmit={onSubmit} className="space-y-6">
    <h2 className="text-2xl font-bold text-cyan-400 tracking-widest mb-6 text-center drop-shadow-lg">
      Personaliza y confirma tus datos
    </h2>
    <div>
      <label
        htmlFor="default-range"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Tamaño de la etiqueta: {form.labelSize}cm
      </label>
      <input
        id="default-range"
        type="range"
        value={form.labelSize}
        onChange={(e) => onLabelSizeChange(Number(e.target.value))}
        step={1}
        min={7}
        max={14}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      />
    </div>
    <div>
      <label
        htmlFor="hs-color-input"
        className="block text-sm font-medium mb-2"
      >
        Color principal de la etiqueta
      </label>
      <input
        type="color"
        className="p-1 h-10 w-14 block  cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none"
        id="hs-color-input"
        value={form.labelColor}
        onChange={(e) => onLabelColorChange(e.target.value)}
        title="Choose your color"
      />
    </div>
    <div className="flex items-center justify-center">
      <StudentSubjectCards
        subject={form.subjects[0]}
        firstName={form.firstName}
        lastName={form.lastName}
        grade={form.grade}
        section={form.section}
        group={form.group}
        listNumber={form.listNumber}
        variant={cardType}
        labelSize={form.labelSize}
        color={form.labelColor}
      />
    </div>
    <button
      type="submit"
      className="bg-cyan-900 hover:bg-cyan-800 text-cyan-200 px-4 py-2 rounded-lg font-semibold shadow-md transition-all duration-200 mt-2 w-full hover:cursor-pointer mb-0"
    >
      Confirmar
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
