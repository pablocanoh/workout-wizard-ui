import React, { createContext, useEffect, useState } from 'react';
import { getLatestRoutine } from "../routineService";
import { useLocation } from "react-router-dom";

export const TrainingContext = createContext();

export const TrainingProvider = ({ children }) => {
    const location = useLocation();
    // Initialize state from localStorage
    const [exercisesSample, setExerciseSample] = useState(() => {
        // const savedExercisesSample = localStorage.getItem('exercisesSample');
        // return savedExercisesSample ? JSON.parse(savedExercisesSample) : {};
        return {};
    });
    const [trainingData, setTrainingData] = useState(() => {
        const savedTrainingData = localStorage.getItem('trainingData');
        return savedTrainingData ? JSON.parse(savedTrainingData) : null;
    });

    // Fetch the latest routine on mount and update state
    useEffect(() => {
        const fetchLatestRoutine = async () => {
            const latestRoutine = await getLatestRoutine();
            if (latestRoutine) {
                setTrainingData(latestRoutine);
            }
        };

        if (location.pathname !== '/auth' && localStorage.getItem('token')) {
            fetchLatestRoutine();
        }

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
