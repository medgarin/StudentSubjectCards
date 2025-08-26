type StudentNameLabelsProps = {
  name: string;
  numberOfTags?: number;
};

export const StudentNameLabels = ({
  name,
  numberOfTags = 1,
}: StudentNameLabelsProps) => {
  const array = Array.from({ length: numberOfTags }, (_, i) => i + 1);
  return (
    <div className="flex flex-wrap">
      {array.map((item) => (
        <div key={item} className="text-lg font-bold border border-dotted px-2">
          {name}
        </div>
      ))}
    </div>
  );
};
