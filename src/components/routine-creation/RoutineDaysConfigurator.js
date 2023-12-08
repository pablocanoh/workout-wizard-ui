import React, { useContext, useState } from 'react';
import { TrainingContext } from './TrainingContext';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';
import ExerciseConfigurator from './ExerciseConfigurator';
import './index.css'
import {mockAvailableExercises} from "../../mock-data/mock-data";

const RoutineDaysConfigurator = () => {
    const navigate = useNavigate();
    const { trainingData, updateTrainingData } = useContext(TrainingContext);
    const [routine, setRoutine] = useState(trainingData.routineData);

    const handleExerciseChange = (day, index, field, value) => {
        const updatedExercises = routine[day].map((exercise, idx) => {
            if (idx === index) {
                return { ...exercise, [field]: value };
            }
            return exercise;
        });

        setRoutine({ ...routine, [day]: updatedExercises });
    };

    const handleSave = () => {
        updateTrainingData({ ...trainingData, routineData: routine });
        console.log('Rutina guardada:', routine);
        navigate('/');
    };

    const addExercise = (day) => {
        const newExercise = {
            type: 'CHEST', // o el primer tipo en tu lista de mockAvailableExercises
            name: mockAvailableExercises['CHEST'][0], // el primer ejercicio de la lista
            series: 3, // un valor predeterminado para las series
            reps: 10, // un valor predeterminado para las repeticiones
        };

        setRoutine((prevRoutine) => ({
            ...prevRoutine,
            [day]: [...prevRoutine[day], newExercise],
        }));
    };

    const removeExercise = (day, index) => {
        setRoutine((prevRoutine) => ({
            ...prevRoutine,
            [day]: prevRoutine[day].filter((_, idx) => idx !== index),
        }));
    };



    return (
        <Container>
            <Typography variant="h4">Configura tu Rutina de Entrenamiento</Typography>
            {Object.entries(routine).map(([day, exercises]) => (
                <div key={day} className="day-container">
                    <Typography variant="h6" gutterBottom>{`Día ${day}`}</Typography>
                    <div>
                        {exercises.map((exercise, index) => (
                            <div key={index} className="exercise-container">
                                <ExerciseConfigurator
                                    exercise={exercise}
                                    onExerciseChange={(field, value) => handleExerciseChange(day, index, field, value)}
                                    onRemove={() => removeExercise(day, index)}
                                />
                            </div>
                        ))}
                    </div>
                    <Button onClick={() => addExercise(day)} color="primary">
                        Añadir Ejercicio
                    </Button>
                </div>
            ))}
            <Button onClick={handleSave} variant="contained" color="primary" style={{ marginTop: '20px' }}>
                Guardar Rutina
            </Button>
        </Container>
    );
};

export default RoutineDaysConfigurator;
