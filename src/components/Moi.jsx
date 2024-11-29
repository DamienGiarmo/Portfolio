import React from 'react';

const Moi = () => {
  return (
    <div className="relative max-w-screen h-[70vh]">
      <img
        className="bg-cover bg-center w-screen h-full"
        src="src/assets/lowpoly.png"
        alt="image de fond"
      />

      {/* Conteneur du texte */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-[#C2E6FF]">
        <h1 className="text-4xl font-bold mb-4">Damien Giarmo</h1>
        <h1 className="text-2xl font-bold">
          Recherche de stage ou une alternance en Cybersécurité
        </h1>
      </div>
    </div>
  );
};

export default Moi;
