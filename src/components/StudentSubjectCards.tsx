import type { StudentSubjectCardsType } from "./Cards/Card";
import { VARIANT_MAP } from "./Cards/VARIANT_MAP";

export const StudentSubjectCards = ({
  variant = "classic",
  labelSize = 14,
  color = "#1c398e",
  ...rest
}: StudentSubjectCardsType) => {
  const widthStyle = { width: `${labelSize}cm`, maxWidth: "100%" };

  const FONT_SIZE_MAP = [
    { max: 8, class: "text-lg" },
    { max: 13, class: "text-xl" },
    { max: Infinity, class: "text-2xl" },
  ];

  const mainFontSize =
    FONT_SIZE_MAP.find(({ max }) => labelSize <= max)?.class ?? "text-2xl";

  const CardComponent = VARIANT_MAP[variant as keyof typeof VARIANT_MAP];

  return (
    <CardComponent
      {...rest}
      labelSize={labelSize}
      color={color}
      widthStyle={widthStyle}
      mainFontSize={mainFontSize}
    />
  );
};
