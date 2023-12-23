import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {TrainingProvider} from "./routine-creation/components/TrainingContext";
import RoutineConfiguration from "./routine-creation/components/RoutineConfiguration";
import Portal from "./Portal";
import Workout from "./workout-tracker/components/Workout";
import {ProtectedRoute} from "./workout-tracker/ProtectedRoute";
import {WorkoutContextProvider} from "./workout-tracker/components/WorkoutContext";
import Auth from "./login/Auth";
import {AuthProtectedRoute} from "./login/AuthProtectedRoute";

const App = () => {
    return (
        <Router>
            <TrainingProvider>
                <WorkoutContextProvider>
                    <Routes>
                        <Route path="/auth" element={<Auth/>}/>
                        <Route path="/" element={<AuthProtectedRoute><Portal/></AuthProtectedRoute>}/>
                        <Route path="/configure-routine"
                               element={<AuthProtectedRoute><RoutineConfiguration/></AuthProtectedRoute>}/>
                        <Route
                            path="/workout-tracker"
                            element={
                                <AuthProtectedRoute>
                                    <ProtectedRoute>
                                        <Workout/>
                                    </ProtectedRoute>
                                </AuthProtectedRoute>
                            }
                        />
                    </Routes>
                </WorkoutContextProvider>
            </TrainingProvider>
        </Router>
    );
}

export default App;
