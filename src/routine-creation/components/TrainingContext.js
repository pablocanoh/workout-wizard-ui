import React, {createContext, useEffect, useState} from 'react';
import {getLatestRoutine} from "../routineService";

export const TrainingContext = createContext();

export const TrainingProvider = ({ children }) => {
    const [exercisesSample, setExerciseSample] = useState({});
    const [trainingData, setTrainingData] = useState({
        routineData: null,
    });

    useEffect(() => {
        const fetchLatestRoutine = async () => {
            const latestRoutine = await getLatestRoutine();
            if (latestRoutine) {
                setTrainingData(latestRoutine);
            }
        };

        fetchLatestRoutine();
    }, []);

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
