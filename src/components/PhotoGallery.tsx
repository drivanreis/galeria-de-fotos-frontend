// ../src/components/PhotoGallery.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PhotoGallery.css';
import getBackendURL from '../utils/env';

const backEndURL = getBackendURL();

const PhotoGallery: React.FC = () => {
  const [photos, setPhotos] = useState<string[]>([]);

  const fetchPhotos = async () => {
    try {
      const response = await axios.get<string[]>(`${backEndURL}/photos`);
      if (Array.isArray(response.data)) {
        setPhotos(response.data);
      } else {
        console.error('A resposta não é um array:', response.data);
        setPhotos([]); // ou uma ação apropriada
      }
    } catch (error) {
      console.log('Erro ao buscar fotos:', error);
      setPhotos([]); // ou uma ação apropriada
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <div className="photo-gallery">
      {photos.map((photo, index) => (
        <img
          key={index}
          src={photo} // Aqui estamos usando a URL completa retornada pelo backend
          alt={`Foto ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default PhotoGallery;
