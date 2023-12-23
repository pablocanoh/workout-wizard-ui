import React, { createContext, useEffect, useState } from 'react';
import { getLatestRoutine } from "../routineService";

export const TrainingContext = createContext();

export const TrainingProvider = ({ children }) => {
    // Initialize state from localStorage
    const [exercisesSample, setExerciseSample] = useState(() => {
        const savedExercisesSample = localStorage.getItem('exercisesSample');
        return savedExercisesSample ? JSON.parse(savedExercisesSample) : {};
    });
    const [trainingData, setTrainingData] = useState(() => {
        const savedTrainingData = localStorage.getItem('trainingData');
        return savedTrainingData ? JSON.parse(savedTrainingData) : { routineData: null };
    });

    // Fetch the latest routine on mount and update state
    useEffect(() => {
        const fetchLatestRoutine = async () => {
            const latestRoutine = await getLatestRoutine();
            if (latestRoutine) {
                setTrainingData(latestRoutine);
            }
        };

        fetchLatestRoutine();
    }, []);

    // Update localStorage when state changes
    useEffect(() => {
        localStorage.setItem('exercisesSample', JSON.stringify(exercisesSample));
    }, [exercisesSample]);

    useEffect(() => {
        localStorage.setItem('trainingData', JSON.stringify(trainingData));
    }, [trainingData]);

    // Update state functions
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
