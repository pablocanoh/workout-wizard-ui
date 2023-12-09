import React, {useContext, useEffect, useState} from 'react';
import TrainingForm from "./TrainingForm";
import RoutineDaysConfigurator from "./RoutineDaysConfigurator";
import {Button} from "@mui/material";
import {fetchExercises} from "./routineService";
import {TrainingContext} from "./TrainingContext";

const RoutineConfiguration = () => {
    const { updateExercisesSample } = useContext(TrainingContext);
    const [step, setStep] = useState(1);

    useEffect(() => {
        const loadExercises = async () => {
            const exercises = await fetchExercises();
            updateExercisesSample(exercises);
        };

        loadExercises();
    }, []);

    const onChange = () => {
        setStep(2);
    }

    const handlePreviousStep = () => {
        setStep(step - 1);
    };

    return (
        <div>
            {step > 1 && (
                <>
                    <Button onClick={handlePreviousStep} variant="contained" color="secondary">
                        Atrás
                    </Button>
                </>)}
            {step === 1 && <TrainingForm onSubmit={onChange}/>}
            {step === 2 && <RoutineDaysConfigurator/>}
        </div>
    );
}

export default RoutineConfiguration