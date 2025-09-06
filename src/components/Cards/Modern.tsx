import type { CardProps } from "./Card";

export const Modern = ({
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
      className="school-card  bg-gradient-to-br from-blue-100 to-white"
      style={{ ...widthStyle, border: `1px solid ${color}` }}
    >
      <header
        className={`flex justify-between items-center p-4`}
        style={{ backgroundColor: color }}
      >
        <img src="/logo.png" alt="Logo" className="w-22 p-2" />
        {subject && (
          <span
            className={`bg-white font-medium px-4 py-2 shadow`}
            style={{ color }}
          >
            {subject}
          </span>
        )}
      </header>
      <main className="p-4">
        <h1
          className={`text-center ${mainFontSize} font-extrabold uppercase`}
          style={{ color }}
        >
          {firstName} <span className="block font-light">{lastName}</span>
        </h1>
        <div className={`flex justify-between mt-4`} style={{ color }}>
          <span>Grado: {grade}</span>
          <span>Sección: {section}</span>
        </div>
        <div className={`flex justify-between mt-2`} style={{ color }}>
          {group && <span>Grupo: {group}</span>}
          {listNumber && <span>N° Lista: {listNumber}</span>}
        </div>
      </main>
    </article>
  );
};
