// ../src/components/PhotoGallery.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PhotoGallery.css';
import getBackendURL from '../utils/env';

const backEndURL = getBackendURL();

const PhotoGallery: React.FC = () => {
  const [photos, setPhotos] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchPhotos = async () => {
    try {
      const response = await axios.get<string[]>(`${backEndURL}/photos`);
      
      if (Array.isArray(response.data)) {
        setPhotos(response.data);
        setError(null);
      } else {
        setError('Resposta inesperada do servidor. A resposta não é um array.');
      }
    } catch (error) {
      setError('Erro ao buscar fotos: ' + (error as Error).message);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <div className="photo-gallery">
      {error && <p>{error}</p>}
      {photos.length > 0 ? (
        photos.map((photo, index) => (
          <img
            key={index}
            src={photo} // Aqui estamos usando a URL completa retornada pelo backend
            alt={`Foto ${index + 1}`}
          />
        ))
      ) : (
        <p>Nenhuma foto encontrada.</p>
      )}
    </div>
  );
};

export default PhotoGallery;
