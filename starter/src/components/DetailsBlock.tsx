import React from 'react';

interface DetailsBlockProps {
  title: string;
  content: string;
  image: string;
  reverse?: boolean;
}

const DetailsBlock: React.FC<DetailsBlockProps> = ({ title, content, image, reverse }) => (
  <div className={`details-block ${reverse ? 'reverse' : ''}`}>
    <div className="text">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
    <img src={image} alt={title} />
  </div>
);

export default DetailsBlock;