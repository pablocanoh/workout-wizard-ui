import React, { createContext, useState } from 'react';

export const WorkoutContext = createContext();

export const WorkoutContextProvider = ({ children }) => {
    const [weights, setWeights] = useState({});
    const [diary, setDiary] = useState({});

    const updateWeight = (exerciseId, weight) => {
        setWeights({ ...weights, [exerciseId]: weight });
    };

    const updateDiary = (diary) => {
        setDiary(diary);
    };

    return (
        <WorkoutContext.Provider value={{ weights, updateWeight, diary, updateDiary }}>
            {children}
        </WorkoutContext.Provider>
    );
};
