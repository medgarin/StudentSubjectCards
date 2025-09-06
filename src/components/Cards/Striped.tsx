import type { CardProps } from "./Card";

export const Striped = ({
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
      className="rounded-lg overflow-hidden shadow-md"
      style={{ ...widthStyle, border: `2px solid ${color}` }}
    >
      <header
        className="relative p-4 text-white"
        style={{
          background: `repeating-linear-gradient(45deg, ${color}, ${color} 10px, #ffffff33 10px, #ffffff33 20px)`,
        }}
      >
        <div className="flex justify-between items-center">
          <figure>
            <img src="/logo.png" alt="Logo" className="w-14" />
          </figure>
          {subject && (
            <div
              className="bg-white text-sm font-semibold px-3 py-1 rounded"
              style={{ color }}
            >
              {subject}
            </div>
          )}
        </div>
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
