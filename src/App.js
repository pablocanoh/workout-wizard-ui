import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {TrainingProvider} from "./components/routine-creation/TrainingContext";
import RoutineDaysConfigurator from "./components/routine-creation/RoutineDaysConfigurator";
import TrainingForm from "./components/routine-creation/TrainingForm";
import RoutineConfiguration from "./components/routine-creation/RoutineConfiguration";

const App = () => {
    return (
        <Router>
            <TrainingProvider>
                <Routes>
                    <Route path="/configure-routine" element={<RoutineConfiguration />} />
                </Routes>
            </TrainingProvider>
        </Router>
    );
}

export default App;
