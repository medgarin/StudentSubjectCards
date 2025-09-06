import { useState } from "react";
import { StudentSubjectCards } from "./components/StudentSubjectCards";
import { StudentForm } from "./components/StudentForm";
import type { StudentFormData } from "./components/StudentForm";

function App() {
  const [data, setData] = useState<StudentFormData | null>(null);

  return (
    <div
      id="MainApp"
      className="min-h-screen w-full flex items-center justify-center bg-gray-900 text-gray-100 print:bg-white"
    >
      <div
        id="ContentApp"
        className="w-full max-w-2xl rounded-xl shadow-2xl bg-gray-900/80 backdrop-blur-md p-8 border border-gray-800 print:shadow-none print:bg-white print:border-0 print:p-0 print:rounded-none"
      >
        {data ? (
          <>
            <section className="flex flex-col mb-6 print:hidden">
              <button
                className="bg-cyan-900 hover:bg-cyan-800 text-cyan-200 px-4 py-2 rounded-lg font-semibold shadow-md transition-all duration-200 mt-2 w-full hover:cursor-pointer mb-0"
                onClick={() => window.print()}
              >
                Imprimir etiquetas
              </button>
            </section>
            <div className="cards-print-container">
              {data.subjects.map((subject, idx) => (
                <div className="mb-2" key={idx}>
                  <StudentSubjectCards
                    subject={subject}
                    firstName={data.firstName}
                    lastName={data.lastName}
                    grade={data.grade}
                    section={data.section}
                    group={data.group}
                    listNumber={data.listNumber}
                    variant={data.cardType}
                    color={data.labelColor}
                    labelSize={data.labelSize}
                  />
                </div>
              ))}
              {/* <StudentNameLabels
                name={`${data.firstName} ${data.lastName}`}
                numberOfTags={data.numberOfTags}
              /> */}
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center w-full">
            <h1 className="text-3xl font-bold mb-8 text-white-400 tracking-widest uppercase drop-shadow-lg print:hidden">
              Generador de Etiquetas Escolares
            </h1>
            <div className="w-full">
              <StudentForm onSubmit={setData} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
