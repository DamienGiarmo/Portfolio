import React from 'react';

const Cardprojet = () => {
  return (
    <div className="flex justify-center mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
        {/* Card 1 */}
        <div className="max-w-sm rounded-lg dark:bg-[#003362]">
          <a href="#">
            <img className="rounded-t-lg" src="src/assets/fond.png" alt="Mini jeux" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold text-[#70B8FF]">Mini jeux</h5>
            </a>
            <p className="mb-3 font-normal text-[#C2E6FF]">
              Le projet de mini jeux consitent a faire plusieur mini jeux en java.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-[#C2E6FF] rounded-lg dark:bg-blue-500 dark:hover:bg-blue-500"
            >
              En savoir plus
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="max-w-sm rounded-lg dark:bg-[#003362]">
          <a href="#">
            <img className="rounded-t-lg" src="src/assets/fond.png" alt="Projet 2" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold text-[#70B8FF]">Nom Projet 2</h5>
            </a>
            <p className="mb-3 font-normal text-[#C2E6FF]">
              Description brève du projet 2. Expliquez son objectif ou sa fonctionnalité en quelques mots.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-[#C2E6FF] rounded-lg dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              En savoir plus
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="max-w-sm rounded-lg dark:bg-[#003362]">
          <a href="#">
            <img className="rounded-t-lg" src="src/assets/fond.png" alt="Projet 3" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold text-[#70B8FF]">Nom Projet 3</h5>
            </a>
            <p className="mb-3 font-normal text-[#C2E6FF]">
              Description brève du projet 3. Expliquez son objectif ou sa fonctionnalité en quelques mots.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-[#C2E6FF] rounded-lg dark:bg-blue-600 dark:hover:bg-blue-7000"
            >
              En savoir plus
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardprojet;
