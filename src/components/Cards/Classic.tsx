import type { CardProps } from "./Card";

export const Classic = ({
  widthStyle,
  color,
  subject,
  mainFontSize,
  firstName,
  lastName,
  section,
  grade,
  group,
  listNumber,
}: CardProps) => {
  return (
    <article
      className="school-card"
      style={{ ...widthStyle, border: `1px solid ${color}` }}
    >
      <section style={{ backgroundColor: color }}>
        <header className="flex justify-between pl-4 pt-6 pb-2 align-items-center">
          <figure>
            <img src="/logo.png" alt="Logo" className="w-22" />
          </figure>
          {subject && (
            <div
              className={`bg-white  text-center self-start py-1 text-sm px-2`}
              style={{ minWidth: "240px", color }}
            >
              {subject}
            </div>
          )}
        </header>
        <main className="pb-4">
          <h1 className={`text-center text-white uppercase ${mainFontSize}`}>
            <b className="block">{firstName}</b> {lastName}
          </h1>
        </main>
      </section>
      <main className="pt-2 px-4 pb-4 bg-white">
        <h2
          className={`uppercase font-bold text-center ${mainFontSize} mb-2`}
          style={{ color }}
        >
          {section}
        </h2>
        <section
          className={`flex justify-between uppercase font-medium`}
          style={{ color }}
        >
          <span>Grado: {grade}</span>
          {group && <span>Grupo: {group}</span>}
          {listNumber && <span>N° Lista: {listNumber}</span>}
        </section>
      </main>
    </article>
  );
};
