// components/Description.jsx
import React from "react";

const Description = ({
  title,
  content,
  sections,
  titleClassName,
  contentClassName,
  sectionTitleClassName,
  itemClassName,
}) => {
  return (
    <div>
      <h2 className={titleClassName}>{title}</h2>
      <p className={contentClassName}>{content}</p>
      {sections.map((section, index) => (
        <div key={index}>
          <h3 className={sectionTitleClassName}>{section.heading}</h3>

          <ul>
            {section.items.map((item, idx) => (
              <li key={idx} className={itemClassName}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Description;
