import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { TrainingProvider } from "./routine-creation/components/TrainingContext";
import RoutineConfiguration from "./routine-creation/components/RoutineConfiguration";
import Portal from "./Portal";
import Workout from "./workout-tracker/components/Workout";
import { ProtectedRoute } from "./workout-tracker/ProtectedRoute";
import {WorkoutContextProvider} from "./workout-tracker/components/WorkoutContext";

const App = () => {
    return (
        <Router>
            <TrainingProvider>
                <WorkoutContextProvider>
                    <Routes>
                        <Route path="/" element={<Portal />} />
                        <Route path="/configure-routine" element={<RoutineConfiguration />} />
                        <Route
                            path="/workout-tracker"
                            element={
                                <ProtectedRoute>
                                    <Workout />
                                </ProtectedRoute>
                            }
                        />
                    </Routes>
                </WorkoutContextProvider>
            </TrainingProvider>
        </Router>
    );
}

export default App;
