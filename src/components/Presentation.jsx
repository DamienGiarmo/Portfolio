import React from 'react';

const Presentation = () => {
  return (
    <div id="presentation" className="flex justify-center p-8">
      {/* Card Container */}
      <div className="flex items-center bg-[#003362] shadow-lg rounded-lg p-6 max-w-4xl ">
        {/* Section Texte */}
        <div className="max-w-md ">
          <h1 className="text-3xl font-bold mb-4 text-[#C2E6FF]">Qui suis-je ?</h1>
            <p className="text-[#C2E6FF]">Bonjour ! Je m'appelle Damien Giarmo, j’ai 21 ans et suis en deuxième année de Bachelor informatique à Rennes Ynov Campus. Passionné par la technologie et les nouvelle innovation, je veux spécialise en cybersécurité.
            </p>
        </div>

        {/* Section Image */}
        <div className="mr-16">
          <img
            className="rounded-full w-40 h-40" src="src/assets/profile.jpg" alt="Image moi"
          />
        </div>
      </div>
    </div>
  );
};

export default Presentation;
