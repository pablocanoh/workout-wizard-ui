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
        console.log('aaa')
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
                Formulario de Rutina de Gimnasio
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    select
                    label="¿Cuántos días a la semana puedes entrenar?"
                    value={trainingDays}
                    onChange={e => setTrainingDays(e.target.value)}
                    fullWidth
                    margin="normal"
                >
                    {/* Opciones de días */}
                    {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                        <MenuItem key={day} value={day}>
                            {day} {day === 1 ? 'día' : 'días'}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    select
                    label="Nivel de experiencia en el gimnasio"
                    value={experienceLevel}
                    onChange={e => setExperienceLevel(e.target.value)}
                    fullWidth
                    margin="normal"
                >
                    {/* Opciones de nivel de experiencia */}
                    {Object.entries(ExperienceLevel).map(([key, value]) => (
                        <MenuItem key={key} value={key}>
                            {value}
                        </MenuItem>
                    ))}
                </TextField>
                <Button disabled={disabled} type="submit" variant="contained" color="primary" fullWidth>
                    Enviar
                </Button>
            </form>
        </Container>
    );
};

export default TrainingForm;
