import React from 'react';
import Carousel from '../components/Carousel';  // Assure-toi que le chemin est correct

const Project = () => {
    return (
        <div>
            <h1 className="text-3xl font-semibold text-center mb-8">Mes Projets</h1>
            
            <Carousel />

            
            <div className="my-8">
                <p>Voici quelques-uns de mes projets...</p>
                
            </div>
        </div>
    );
};

export default Project;
