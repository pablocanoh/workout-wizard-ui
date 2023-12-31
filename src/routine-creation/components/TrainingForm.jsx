import React, { useState, useContext } from 'react';
import { Container, TextField, MenuItem, Button, Typography } from '@mui/material';
import { TrainingContext } from "./TrainingContext";
import {fetchRoutine} from "../routineService";
import { ExperienceLevel } from "../api-type";

const TrainingForm = ({ onSubmit }) => {
    const [disabled, setDisabled] = useState(true);
    const [trainingDays, setTrainingDays] = useState('');
    const [experienceLevel, setExperienceLevel] = useState('');
    const { updateTrainingData } = useContext(TrainingContext);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const routineData = await fetchRoutine(experienceLevel, trainingDays);
        updateTrainingData({trainingDays, experienceLevel, routineData});
        onSubmit();
    };

    React.useEffect(() => {
        if (trainingDays && experienceLevel) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [trainingDays, experienceLevel])

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" component="h1" gutterBottom>
                Gym Routine Form
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    select
                    label="How many days per week can you train?"
                    value={trainingDays}
                    onChange={e => setTrainingDays(e.target.value)}
                    fullWidth
                    margin="normal"
                >
                    {/* Options for days */}
                    {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                        <MenuItem key={day} value={day}>
                            {day} {day === 1 ? 'day' : 'days'}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    select
                    label="Gym Experience Level"
                    value={experienceLevel}
                    onChange={e => setExperienceLevel(e.target.value)}
                    fullWidth
                    margin="normal"
                >
                    {/* Options for experience level */}
                    {Object.entries(ExperienceLevel).map(([key, value]) => (
                        <MenuItem key={key} value={key}>
                            {value}
                        </MenuItem>
                    ))}
                </TextField>
                <Button disabled={disabled} type="submit" variant="contained" color="primary" fullWidth>
                    Submit
                </Button>
            </form>
        </Container>
    );
};

export default TrainingForm;
