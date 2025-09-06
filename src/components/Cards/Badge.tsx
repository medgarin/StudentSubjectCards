import type { CardProps } from "./Card";

export const Badge = ({
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
      className="rounded-xl overflow-hidden shadow-lg border"
      style={{ ...widthStyle, borderColor: color }}
    >
      <header
        className="flex flex-col items-center pt-6 pb-4 bg-gray-50"
        style={{ backgroundColor: color }}
      >
        <figure className="w-20 h-20 rounded-full border-4 b-white flex items-center justify-center mb-2">
          <img src="/logo.png" alt="Logo" className="w-12" />
        </figure>
        {subject && (
          <div className="uppercase text-sm font-semibold px-3 py-1 text-white">
            {subject}
          </div>
        )}
      </header>
      <main className="px-4 py-6 text-center bg-white">
        <h1 className={`uppercase font-bold ${mainFontSize}`} style={{ color }}>
          <b className="block">{firstName}</b> {lastName}
        </h1>
        <h2
          className={`uppercase font-bold mt-4 mb-2 ${mainFontSize}`}
          style={{ color }}
        >
          {section}
        </h2>
        <div
          className="flex justify-around uppercase font-medium"
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
