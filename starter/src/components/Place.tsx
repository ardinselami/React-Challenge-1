import React from 'react';

interface PlaceProps {
  title: string;
  description: string;
  image: string;
}

const Place: React.FC<PlaceProps> = ({ title, description, image }) => (
  <div className="place">
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default Place;