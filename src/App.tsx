import { useState } from "react";
import { StudentNameLabels } from "./components/StudentNameLabels";
import { StudentSubjectCards } from "./components/StudentSubjectCards";
import { StudentForm } from "./components/StudentForm";
import type { StudentFormData } from "./components/StudentForm";

function App() {
  const [data, setData] = useState<StudentFormData | null>(null);

  return (
    <div className="mx-auto p-6 max-w-2xl">
      {data ? (
        <>
          <section className="flex justify-between">
            <button
              className="mb-4 bg-green-700 text-white px-4 py-2 rounded print:hidden"
              onClick={() => window.print()}
            >
              Imprimir etiquetas
            </button>
            <button
              className="mb-4 bg-blue-900 text-white px-4 py-2 rounded print:hidden"
              onClick={() => setData(null)}
            >
              Editar datos
            </button>
          </section>
          <div className="cards-print-container">
            <StudentSubjectCards
              subjects={data.subjects.map((s) => ({ subject: s }))}
              firstName={data.firstName}
              lastName={data.lastName}
              grade={data.grade}
              section={data.section}
              group={data.group}
              listNumber={data.listNumber}
            />
            <StudentNameLabels
              name={`${data.firstName} ${data.lastName}`}
              numberOfTags={data.numberOfTags}
            />
          </div>
        </>
      ) : (
        <StudentForm onSubmit={setData} />
      )}
    </div>
  );
}

export default App;
