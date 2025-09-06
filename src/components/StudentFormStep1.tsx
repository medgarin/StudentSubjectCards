import React from "react";
import type { StudentFormData } from "./StudentForm";

interface StudentFormStep1Props {
  form: Omit<StudentFormData, "cardType">;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubjectChange: (idx: number, value: string) => void;
  addSubject: () => void;
  removeSubject: (idx: number) => void;
  onNext: () => void;
}

export const StudentFormStep1 = ({
  form,
  onChange,
  onSubjectChange,
  addSubject,
  removeSubject,
  onNext,
}: StudentFormStep1Props) => (
  <form onSubmit={onNext} className="space-y-6">
    <h2 className="text-2xl font-bold text-cyan-400 tracking-widest mb-6 text-center drop-shadow-lg">
      Datos del Estudiante
    </h2>
    <div className="flex gap-4 md:flex-row flex-col">
      <input
        className="bg-gray-800 border border-gray-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/40 text-gray-100 placeholder-gray-400 p-3 flex-1 rounded-lg shadow-inner transition-all duration-200 outline-none"
        name="firstName"
        placeholder="Nombre(s)"
        value={form.firstName}
        onChange={onChange}
        required
      />
      <input
        className="bg-gray-800 border border-gray-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/40 text-gray-100 placeholder-gray-400 p-3 flex-1 rounded-lg shadow-inner transition-all duration-200 outline-none"
        name="lastName"
        placeholder="Apellidos"
        value={form.lastName}
        onChange={onChange}
        required
      />
    </div>
    <div className="flex gap-4 md:flex-row flex-col">
      <input
        className="bg-gray-800 border border-gray-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/40 text-gray-100 placeholder-gray-400 p-3 flex-1 rounded-lg shadow-inner transition-all duration-200 outline-none"
        name="section"
        value={form.section}
        onChange={onChange}
        placeholder={`Sección`}
        required
      />
      <input
        className="bg-gray-800 border border-gray-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/40 text-gray-100 placeholder-gray-400 p-3 md:w-1/3 rounded-lg shadow-inner transition-all duration-200 outline-none"
        name="grade"
        placeholder="Grado"
        value={form.grade}
        onChange={onChange}
        required
      />
      <input
        className="bg-gray-800 border border-gray-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/40 text-gray-100 placeholder-gray-400 p-3 md:w-1/3 rounded-lg shadow-inner transition-all duration-200 outline-none"
        name="group"
        placeholder="Grupo"
        value={form.group}
        onChange={onChange}
      />
      <input
        className="bg-gray-800 border border-gray-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/40 text-gray-100 placeholder-gray-400 p-3 md:w-1/3 rounded-lg shadow-inner transition-all duration-200 outline-none"
        name="listNumber"
        placeholder="N° Lista"
        value={form.listNumber}
        onChange={onChange}
      />
    </div>
    <div>
      <label className="block font-bold mb-2 text-cyan-300 tracking-wide">
        Materias
      </label>
      {form.subjects.map((subject, idx) => (
        <div key={idx} className="flex gap-2 mb-2">
          <input
            className="bg-gray-800 border border-gray-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/40 text-gray-100 placeholder-gray-400 p-3 flex-1 rounded-lg shadow-inner transition-all duration-200 outline-none"
            value={subject}
            onChange={(e) => onSubjectChange(idx, e.target.value)}
            placeholder={`Materia #${idx + 1}`}
            required={idx === 0}
          />
          {form.subjects.length > 1 && (
            <button
              type="button"
              onClick={() => removeSubject(idx)}
              className="bg-rose-700 hover:bg-rose-600 text-white px-3 py-1 rounded-lg shadow-md font-semibold transition-all duration-200 text-sm"
            >
              Eliminar
            </button>
          )}
        </div>
      ))}
      <button
        type="button"
        onClick={addSubject}
        className="bg-cyan-900 hover:bg-cyan-800 text-cyan-200 px-4 py-2 rounded-lg font-semibold shadow-md transition-all duration-200 mt-2 text-sm"
      >
        Agregar materia
      </button>
    </div>
    <button
      type="submit"
      className={`bg-cyan-900 hover:bg-cyan-800 text-cyan-200 px-4 py-2 rounded-lg font-semibold shadow-md transition-all duration-200 mt-2 w-full hover:cursor-pointer ${
        !form.firstName ||
        !form.lastName ||
        !form.grade ||
        !form.section ||
        form.subjects[0] === ""
          ? "opacity-50 cursor-not-allowed hover:bg-cyan-900"
          : ""
      }`}
    >
      Siguiente
    </button>
  </form>
);
