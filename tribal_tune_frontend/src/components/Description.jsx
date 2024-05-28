// components/Description.jsx
import React from 'react';

const Description = ({ title, content, sections }) => {
  return (
    <div className="w-1/2 pl-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{title}</h1>
      <p className="text-gray-600 leading-relaxed">{content}</p>
      {sections.map((section, index) => (
        <div key={index}>
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">{section.heading}</h2>
          <ul className="list-disc ml-6 text-gray-600">
            {section.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Description;
