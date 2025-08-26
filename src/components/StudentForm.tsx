import { useState } from "react";

export interface StudentFormData {
  firstName: string;
  lastName: string;
  grade: string;
  section: string;
  group: string;
  listNumber: string;
  subjects: string[];
  numberOfTags: number;
}

interface StudentFormProps {
  onSubmit: (data: StudentFormData) => void;
}

export const StudentForm = ({ onSubmit }: StudentFormProps) => {
  const [form, setForm] = useState<StudentFormData>({
    firstName: "",
    lastName: "",
    grade: "",
    section: "",
    group: "",
    listNumber: "",
    subjects: [""],
    numberOfTags: 1,
  });

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({
      ...form,
      numberOfTags: Number(form.numberOfTags),
      subjects: form.subjects.filter((s) => s.trim()),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 space-y-4 print:hidden">
      <h2 className="text-lg font-bold">Datos del Estudiante</h2>
      <div className="flex gap-4">
        <input
          className="border p-2 flex-1"
          name="firstName"
          placeholder="Nombre(s)"
          value={form.firstName}
          onChange={handleChange}
          required
        />
        <input
          className="border p-2 flex-1"
          name="lastName"
          placeholder="Apellidos"
          value={form.lastName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="flex gap-4">
        <input
          className="border p-2 flex-1"
          name="section"
          value={form.section}
          onChange={handleChange}
          placeholder={`Sección`}
          required
        />

        <input
          className="border p-2 w-1/3"
          name="grade"
          placeholder="Grado"
          value={form.grade}
          onChange={handleChange}
          required
        />
        <input
          className="border p-2 w-1/3"
          name="group"
          placeholder="Grupo"
          value={form.group}
          onChange={handleChange}
        />
        <input
          className="border p-2 w-1/3"
          name="listNumber"
          placeholder="N° Lista"
          value={form.listNumber}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="block font-bold mb-1">Materias</label>
        {form.subjects.map((subject, idx) => (
          <div key={idx} className="flex gap-2 mb-2">
            <input
              className="border p-2 flex-1"
              value={subject}
              onChange={(e) => handleSubjectChange(idx, e.target.value)}
              placeholder={`Materia #${idx + 1}`}
              required={idx === 0}
            />
            {form.subjects.length > 1 && (
              <button
                type="button"
                onClick={() => removeSubject(idx)}
                className="text-red-500"
              >
                Eliminar
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={addSubject}
          className="text-blue-700 underline"
        >
          Agregar materia
        </button>
      </div>
      <div>
        <label className="block font-bold mb-1">
          Cantidad de etiquetas con solo nombre
        </label>
        <input
          className="border p-2 w-32"
          type="number"
          name="numberOfTags"
          min={1}
          value={form.numberOfTags}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-900 text-white px-4 py-2 rounded"
      >
        Generar etiquetas
      </button>
    </form>
  );
};
