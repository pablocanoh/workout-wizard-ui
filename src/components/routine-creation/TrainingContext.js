import React, { createContext, useState } from 'react';

export const TrainingContext = createContext();

export const TrainingProvider = ({ children }) => {
    const [trainingData, setTrainingData] = useState({
        routineData: null, // o tu estructura inicial de datos
        // otros datos relacionados con el entrenamiento...
    });

    const updateTrainingData = (data) => {
        setTrainingData(data);
    };

    return (
        <TrainingContext.Provider value={{ trainingData, updateTrainingData }}>
            {children}
        </TrainingContext.Provider>
    );
};
