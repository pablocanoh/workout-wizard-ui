import React, { createContext, useState } from 'react';

export const TrainingContext = createContext();

export const TrainingProvider = ({ children }) => {
    const [exercisesSample, setExerciseSample] = useState({});
    const [trainingData, setTrainingData] = useState({
        routineData: null,
    });

    const updateTrainingData = (data) => {
        setTrainingData(data);
    };

    const updateExercisesSample = (data) => {
        setExerciseSample(data);
    };

    return (
        <TrainingContext.Provider value={{ trainingData, updateTrainingData, exercisesSample, updateExercisesSample }}>
            {children}
        </TrainingContext.Provider>
    );
};
