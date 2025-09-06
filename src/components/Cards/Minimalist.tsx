import type { CardProps } from "./Card";

export const Minimalist = ({
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
      className="school-card border border-gray-400 "
      style={{
        ...widthStyle,
        background: `linear-gradient(135deg, ${color}90 0%, #fff 100%)`,
        border: `1px solid ${color}`,
      }}
    >
      <main className="p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="font-bold text-gray-300">{subject}</span>
          <img src="/logo.png" alt="Logo" className="w-22" />
        </div>
        <div
          className={`text-center ${mainFontSize} text-gray-800 font-semibold`}
        >
          {firstName} {lastName}
        </div>
        <div className="flex justify-between text-xs text-gray-600 mt-2">
          <span>Grado: {grade}</span>
          <span>Sección: {section}</span>
          {group && <span>Grupo: {group}</span>}
          {listNumber && <span>N° Lista: {listNumber}</span>}
        </div>
      </main>
    </article>
  );
};
