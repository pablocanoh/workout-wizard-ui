import React, { useState, useContext } from 'react';
import { Container, TextField, MenuItem, Button, Typography } from '@mui/material';
import { TrainingContext } from "./TrainingContext";
import { generateMockRoutine } from "../../mock-data/mock-request";

const TrainingForm = ({ onSubmit }) => {
    const [trainingDays, setTrainingDays] = useState('');
    const [experienceLevel, setExperienceLevel] = useState('');
    const { updateTrainingData } = useContext(TrainingContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const routineData = generateMockRoutine();
        updateTrainingData({ trainingDays, experienceLevel, routineData });
        onSubmit();
    };

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
                    {['Principiante', 'Intermedio', 'Avanzado'].map((level) => (
                        <MenuItem key={level} value={level}>
                            {level}
                        </MenuItem>
                    ))}
                </TextField>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Enviar
                </Button>
            </form>
        </Container>
    );
};

export default TrainingForm;
