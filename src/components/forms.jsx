import React from 'react';

const Forms = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-sm rounded-lg md:p-8 dark:bg-[#003362]">
        <form className="space-y-6">
          <h5 className="text-xl font-medium text-[#70B8FF] "></h5>

          {/* Formulaire Email */}
          <div>
            <label htmlFor="email-address-icon" className="block mb-2 text-sm font-medium text-[#70B8FF]">
              Ton Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 flex items-center ps-3.5 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" 
                xmlns="http://www.w3.org/2000/svg" fill="currentColor" 
                viewBox="0 0 20 16">
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input
                type="text"
                id="email-address-icon"
                className="rounded-lg ps-10 p-2.5 dark:bg-gray-700 text-[#70B8FF]"
                placeholder="exemple@mail.com"
              />
            </div>
          </div>

          {/* Formulaire Username */}
          <div>
            <label className="block mb-2 text-sm font-medium text-[#70B8FF]">
              Nom Prénom
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm rounded-s-md dark:bg-gray-600">
                <svg className="w-4 h-4 dark:text-gray-400" aria-hidden="true" 
                xmlns="http://www.w3.org/2000/svg" fill="currentColor" 
                viewBox="0 0 20 20">
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
              </span>
              <input
                type="text"
                id="website-admin"
                className=" block flex-1 min-w-0 w-full p-2.5 rounded-r-lg text-[#70B8FF] dark:bg-gray-700"
                placeholder="Nom Prenom"
              />
            </div>
          </div>

          {/* Formulaire Message */}
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-[#70B8FF]">
              Ton message
            </label>
            <textarea
              id="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-[#70B8FF] rounded-lg dark:bg-gray-700"
              placeholder="Message"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full text-sm font-medium text-[#C2E6FF] rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            Envoie 
          </button>
        </form>
      </div>
    </div>
  );
};

export default Forms;
