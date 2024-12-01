import React, { useState } from 'react';
import Cv from '../components/Cv';
import drapeau from '../assets/drapeau.png'
import C from '../assets/C_sharp.png'
import Cpp from '../assets/Cpp.png'
import musculation from '../assets/musculation.png'
import osint from '../assets/osint.png'
import python from '../assets/python.png'
import react from '../assets/react.png'
import reseaux from '../assets/reseaux.png'
import batterie from '../assets/batterie.png'
import trophee from '../assets/trophee.png'
const Competence = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div id="competence">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row mb-8">
        <Cv />

        {/* Section Compétences */}
        <div className="lg:w-2/3 lg:pl-6">
          <h1 className="text-3xl font-bold text-[#C2E6FF] mb-8">Mes Compétences</h1>

          {/* Cybersécurité */}
          <div className="mb-6">
            <button
              onClick={() => toggleSection('cybersecurite')}
              className="w-3/4 flex items-center justify-between dark:bg-[#003362] text-[#C2E6FF] px-6 py-3 rounded-lg hover:bg-hover:bg-[#104D87] ml-auto"
            >
              <span>Cybersécurité</span>
              <span>{activeSection === 'cybersecurite' ? '▼' : '►'}</span>
            </button>
            {activeSection === 'cybersecurite' && (
              <div className="mt-4 rounded-lg w-3/4 flex items-center dark:bg-[#003362] text-[#C2E6FF] px-6 py-3 rounded-lg hover:bg-[#104D87] ml-auto">
                <div className="flex items-center justify-between">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <img src={drapeau} alt="logo CTF" className="h-16 w-16" />
                    <p className="text-lg font-semibold">CTF (débutant sur Root-Me) </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <img src={reseaux} alt="logo reseaux" className="h-16 w-16" />
                    <p className="text-lg font-semibold">Base en Réseaux</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <img src={osint} alt="logo osint" className="h-16 w-16" />
                    <p className="text-lg font-semibold">Osint</p>
                  </div>
                </div>
                  
                </div>
              </div>
            )}
          </div>

          {/* Programme  */}
          <div className="mb-4">
            <button
              onClick={() => toggleSection('programmation')}
              className="w-3/4 flex items-center justify-between dark:bg-[#003362] text-[#C2E6FF] px-6 py-3 rounded-lg hover:bg-[#104D87] ml-auto">
              <span>Programmation</span>
              <span>{activeSection === 'programmation' ? '▼' : '►'}</span>
            </button>
            {activeSection === 'programmation' && (
              <div className="mt-4 dark:bg-[#003362] rounded-lg w-3/4 text-[#C2E6FF] px-6 py-3 ml-auto">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <img src={C} alt="C#" className="h-16 w-30" />
                    <p className="text-lg font-semibold">C#</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <img src={Cpp} alt="C" className="h-16 w-16" />
                    <p className="text-lg font-semibold">C++</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <img src={python} alt="Python" className="h-16 w-16" />
                    <p className="text-lg font-semibold">Python</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <img src={react} alt="React" className="h-16 w-16" />
                    <p className="text-lg font-semibold">React</p>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Loisir */}
          <div className="mb-6">
            <button
              onClick={() => toggleSection('Loisirs')}
              className="w-3/4 flex items-center justify-between dark:bg-[#003362] text-[#C2E6FF] px-6 py-3 rounded-lg hover:bg-hover:bg-[#104D87] ml-auto"
            >
              <span>Loisirs & Passions</span>
              <span>{activeSection === 'Loisirs' ? '▼' : '►'}</span>
            </button>
            {activeSection === 'Loisirs' && (
              <div className="mt-4 rounded-lg w-3/4 flex items-center dark:bg-[#003362] text-[#C2E6FF] px-6 py-3 rounded-lg ml-auto">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <img src={batterie} alt="logo batterie" className="h-16 w-16" />
                    <p className="text-lg font-semibold">Batterie (5ans)</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <img src={trophee} alt="logo esport" className="h-16 w-16" />
                    <p className="text-lg font-semibold">Competition : Esport</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <img src={musculation} alt="logo musculation" className="h-16 w-16" />
                    <p className="text-lg font-semibold">Musculation</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competence;