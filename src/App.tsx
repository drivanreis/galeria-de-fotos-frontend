// ../src/App.tsx
import React from 'react';
import './App.css';
import PhotoGallery from './components/PhotoGallery';
import UploadPhoto from './components/UploadPhoto';
import getBackendURL from './utils/env';

const App: React.FC = () => {

  const backEndURL = getBackendURL();

  return (
    <div className="App">
      <h1>Galeria de Fotos</h1>
      <p>{`Pegando dados de ${backEndURL}`}</p>
      <PhotoGallery />
      <UploadPhoto />
    </div>
  );
}

export default App;
