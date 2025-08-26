type StudentSubjectCardsType = {
  subjects: { subject?: string }[];
  firstName: string;
  lastName: string;
  grade: string;
  section: string;
  group?: string;
  listNumber?: string;
};

export const StudentSubjectCards = ({
  subjects,
  firstName,
  lastName,
  grade,
  section,
  group,
  listNumber,
}: StudentSubjectCardsType) => {
  return (
    <>
      {subjects.map((subject, idx) => (
        <article key={idx} className="school-card border border-blue-900 mb-1">
          <section className="bg-blue-900">
            <header className="flex justify-between pl-4 pt-6 pb-2 align-items-center">
              <figure>
                <img src="/logo.png" alt="Logo" className="w-22" />
              </figure>
              {subject.subject && (
                <div
                  className="bg-white text-blue-900 text-center self-start py-1 text-sm px-2"
                  style={{ minWidth: "240px" }}
                >
                  {subject.subject}
                </div>
              )}
            </header>
            <main className="pb-4">
              <h1 className="text-center text-white uppercase text-2xl">
                <b className="block">{firstName}</b> {lastName}
              </h1>
            </main>
          </section>
          <main className="pt-2 px-4 pb-4">
            <h2 className="uppercase text-blue-900 font-bold text-center text-2xl mb-2">
              {section}
            </h2>
            <section className="flex justify-between uppercase text-blue-900 font-medium">
              <span>Grado: {grade}</span>
              <span>Grupo: {group}</span>
              <span>N° Lista: {listNumber}</span>
            </section>
          </main>
        </article>
      ))}
    </>
  );
};
