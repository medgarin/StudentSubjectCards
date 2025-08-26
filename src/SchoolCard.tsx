import React from "react";

interface SchoolCardProps {
  title: string;
  author: string;
  tags: string[];
}

const SchoolCard: React.FC<SchoolCardProps> = ({ title, author, tags }) => {
  return (
    <div
      className="school-card"
      style={{
        border: "1px solid #ccc",
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
      }}
    >
      <h2>{title}</h2>
      <p>
        <strong>Author:</strong> {author}
      </p>
      <div>
        <strong>Tags:</strong> {tags.length ? tags.join(", ") : "No tags"}
      </div>
    </div>
  );
};

export default SchoolCard;
