import React from 'react';
import CV from './assets/images/CV_Giarmo_Damien.png'; 
const Cv = () => {
  return (
    <div className="lg:w-1/3 p-4 mb-6 lg:mb-0 text-center">
      <div className="overflow-hidden rounded-lg shadow">
        <img src="src/assets/CV_Giarmo_Damien.png" alt="CV" />
      </div>
      <a
        href={CV}
        download="CV_Giarmo_Damien.png"
        className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Télécharger mon CV
      </a>
    </div>
  );
};

export default Cv;
