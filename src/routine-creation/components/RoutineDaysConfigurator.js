import React, { useContext, useState } from 'react';
import { TrainingContext } from './TrainingContext';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';
import ExerciseConfigurator from './ExerciseConfigurator';
import './index.css';
import {saveRoutine} from "../routineService";
import {v4 as uuidv4} from 'uuid';

const RoutineDaysConfigurator = () => {
    const navigate = useNavigate();
    const { trainingData, updateTrainingData, exercisesSample } = useContext(TrainingContext);
    const [routine, setRoutine] = useState(trainingData.routineData);
    console.log('routine', routine);

    const handleExerciseChange = (blockIndex, exerciseIndex, field, value) => {
        const updatedBlocks = routine.blocks.map((block, idx) => {
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

        setRoutine({ ...routine, blocks: updatedBlocks } );
    };

    const handleSave = () => {
        updateTrainingData(routine);
        saveRoutine(routine)
            .then(responseData => {
                console.log('Routine saved successfully:', responseData);
                updateTrainingData(routine);
                navigate('/');
            })
            .catch(error => {
                console.error('Error saving routine:', error);
            });
    };

    const addExercise = (blockIndex) => {
        const newExercise = {
            ...exercisesSample['CHEST'][0],
            sets: 3,
            reps: 10,
            id: uuidv4()
        };

        setRoutine(prevRoutine => ({
            ...prevRoutine,
            blocks: prevRoutine.blocks.map((block, idx) => {
                if (idx === blockIndex) {
                    return {
                        ...block,
                        exercises: [...block.exercises, newExercise]
                    };
                }
                return block;
            })
        }));
    };

    const removeExercise = (blockIndex, exerciseIndex) => {
        setRoutine(prevRoutine => ({
            ...prevRoutine,
            blocks: prevRoutine.blocks.map((block, idx) => {
                if (idx === blockIndex) {
                    return {
                        ...block,
                        exercises: block.exercises.filter((_, exIdx) => exIdx !== exerciseIndex)
                    };
                }
                return block;
            })
        }));
    };


    return (
        <Container>
            <Typography variant="h4">Configure Your Training Routine</Typography>
            {routine.blocks.map((block, blockIndex) => (
                <div key={blockIndex} className="block-container">
                    <Typography variant="h6" gutterBottom>{`Block ${blockIndex + 1}`}</Typography>
                    <div>
                        {block.exercises.map((exercise, exerciseIndex) => (
                            <div key={exerciseIndex} className="exercise-container">
                                <ExerciseConfigurator
                                    exercise={exercise}
                                    onExerciseChange={(field, value) => handleExerciseChange(blockIndex, exerciseIndex, field, value)}
                                    onRemove={() => removeExercise(blockIndex, exerciseIndex)}
                                    allowRemove={block.exercises.length > 1}
                                />
                            </div>
                        ))}
                    </div>
                    <Button onClick={() => addExercise(blockIndex)} color="primary">
                        Add Exercise
                    </Button>
                </div>
            ))}
            <Button onClick={handleSave} variant="contained" color="primary" style={{ marginTop: '20px' }}>
                Save Routine
            </Button>
        </Container>
    );
};

export default RoutineDaysConfigurator;
