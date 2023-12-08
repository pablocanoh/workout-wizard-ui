import React, {useState} from 'react';
import TrainingForm from "./TrainingForm";
import RoutineDaysConfigurator from "./RoutineDaysConfigurator";
import {Button} from "@mui/material";

const RoutineConfiguration = () => {
    const [step, setStep] = useState(1);

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