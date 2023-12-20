import React, { createContext, useState } from 'react';

export const WorkoutContext = createContext();

export const WorkoutContextProvider = ({ children }) => {
    const [weights, setWeights] = useState({});

    const updateWeight = (exerciseId, weight) => {
        setWeights({ ...weights, [exerciseId]: weight });
    };

    return (
        <WorkoutContext.Provider value={{ weights, updateWeight }}>
            {children}
        </WorkoutContext.Provider>
    );
};
