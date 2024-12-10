import React, { useState, useEffect } from 'react';
import Place from './Place';

interface PlaceData {
  id: number;
  title: string;
  description: string;
  image: string;
}

const PlacesContainer: React.FC = () => {
  const [places, setPlaces] = useState<PlaceData[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/places') // Adjust endpoint if necessary
      .then((res) => res.json())
      .then((data) => setPlaces(data));
  }, []);

  return (
    <div className="places-container">
      {places.map((place) => (
        <Place key={place.id} {...place} />
      ))}
    </div>
  );
};

export default PlacesContainer;