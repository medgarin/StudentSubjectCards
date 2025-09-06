import type { CardProps } from "./Card";

export const Outline = ({
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
      className="rounded-lg shadow-md border-4 bg-white"
      style={{ ...widthStyle, borderColor: color }}
    >
      <header
        className="flex justify-between items-center p-3 border-b-4"
        style={{ backgroundColor: color }}
      >
        <figure>
          <img src="/logo.png" alt="Logo" className="w-14" />
        </figure>
        {subject && (
          <div className="uppercase font-bold text-sm px-3 py-1 text-white">
            {subject}
          </div>
        )}
      </header>
      <main className="text-center py-6 px-4">
        <h1
          className={`uppercase font-extrabold ${mainFontSize}`}
          style={{ color }}
        >
          {firstName} <b className="block">{lastName}</b>
        </h1>
        <h2
          className={`uppercase font-bold mt-4 mb-2 ${mainFontSize}`}
          style={{ color }}
        >
          {section}
        </h2>
        <div
          className="flex justify-around uppercase font-semibold"
          style={{ color }}
        >
          <span>Grado: {grade}</span>
          {group && <span>Grupo: {group}</span>}
          {listNumber && <span>N° Lista: {listNumber}</span>}
        </div>
      </main>
    </article>
  );
};
