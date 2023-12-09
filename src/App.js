import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {TrainingProvider} from "./components/routine-creation/TrainingContext";
import RoutineConfiguration from "./components/routine-creation/RoutineConfiguration";
import TmpPortal from "./TmpPortal";

const App = () => {
    return (
        <Router>
            <TrainingProvider>
                <Routes>
                    <Route path="/" element={<TmpPortal />} />
                    <Route path="/configure-routine" element={<RoutineConfiguration />} />
                </Routes>
            </TrainingProvider>
        </Router>
    );
}

export default App;
