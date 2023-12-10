import React, { useContext, useState } from 'react';
import { TrainingContext } from './TrainingContext';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';
import ExerciseConfigurator from './ExerciseConfigurator';
import './index.css';
import {saveRoutine} from "../routineService";

const RoutineDaysConfigurator = () => {
    const navigate = useNavigate();
    const { trainingData, updateTrainingData, exercisesSample } = useContext(TrainingContext);
    const [routine, setRoutine] = useState(trainingData.routineData.blocks);

    const handleExerciseChange = (blockIndex, exerciseIndex, field, value) => {
        const updatedRoutine = routine.map((block, idx) => {
            if (idx === blockIndex) {
                const updatedExercises = block.exercises.map((exercise, exIdx) => {
                    if (exIdx === exerciseIndex) {
                        return { ...exercise, [field]: value };
                    }
                    return exercise;
                });
                return { ...block, exercises: updatedExercises };
            }
            return block;
        });

        setRoutine(updatedRoutine);
    };

    const handleSave = () => {
        updateTrainingData({ ...trainingData, routineData: { blocks: routine } });
        saveRoutine({ blocks: routine })
            .then(responseData => {
                console.log('Routine saved successfully:', responseData);
                navigate('/');
            })
            .catch(error => {
                console.error('Error saving routine:', error);
            });
    };

    const addExercise = (blockIndex) => {
        const newExercise = {
            type: 'CHEST', // o el primer tipo en tu lista de mockAvailableExercises
            name: exercisesSample['CHEST'][0].name, // Example name, you might want to set this dynamically
            series: 3, // un valor predeterminado para las series
            reps: 10, // un valor predeterminado para las repeticiones
        };

        setRoutine(prevRoutine => prevRoutine.map((block, idx) => {
            if (idx === blockIndex) {
                return {
                    ...block,
                    exercises: [...block.exercises, newExercise]
                };
            }
            return block;
        }));
    };

    const removeExercise = (blockIndex, exerciseIndex) => {
        setRoutine(prevRoutine => prevRoutine.map((block, idx) => {
            if (idx === blockIndex) {
                return {
                    ...block,
                    exercises: block.exercises.filter((_, exIdx) => exIdx !== exerciseIndex)
                };
            }
            return block;
        }));
    };


    return (
        <Container>
            <Typography variant="h4">Configura tu Rutina de Entrenamiento</Typography>
            {routine.map((block, blockIndex) => (
                <div key={blockIndex} className="block-container">
                    <Typography variant="h6" gutterBottom>{`Bloque ${blockIndex + 1}`}</Typography>
                    <div>
                        {block.exercises.map((exercise, exerciseIndex) => (
                            <div key={exerciseIndex} className="exercise-container">
                                <ExerciseConfigurator
                                    exercise={exercise}
                                    onExerciseChange={(field, value) => handleExerciseChange(blockIndex, exerciseIndex, field, value)}
                                    onRemove={() => removeExercise(blockIndex, exerciseIndex)}
                                />
                            </div>
                        ))}
                    </div>
                    <Button onClick={() => addExercise(blockIndex)} color="primary">
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
