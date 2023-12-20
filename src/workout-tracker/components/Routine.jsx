import React, {useContext, useState} from 'react';
import {WorkoutContext} from './WorkoutContext';
import {Button, Card, CardContent, Divider, Grid, TextField, Typography} from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import {routineMock} from "../../mock-data/mock-data";
import {addWorkout} from "../routineService";

const ExerciseComponent = ({ exercise, onWeightChange }) => {
    const initialWeights = Object.fromEntries(
        Array.from({ length: exercise.sets }, (_, i) => [i + 1, 0])
    );
    const [localWeights, setLocalWeights] = useState(initialWeights);

    const handleWeightChange = (setNumber, weight) => {
        const updatedWeights = { ...localWeights, [setNumber]: weight };
        setLocalWeights(updatedWeights);
        onWeightChange(exercise.id, updatedWeights);
    };

    return (
        <Card variant="outlined" sx={{ mb: 2, backgroundColor: '#f5f5f5' }}>
            <CardContent>
                <Typography variant="h5" gutterBottom>
                    <FitnessCenterIcon sx={{ mr: 1 }} />
                    {exercise.name}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                    {exercise.description}
                </Typography>
                <Divider sx={{ my: 1.5 }} />
                <Grid container spacing={2}>
                    {Object.entries(localWeights).map(([setNumber, weight]) => (
                        <Grid item xs={6} sm={4} md={3} key={setNumber}>
                            <TextField
                                label={`Set ${setNumber + 1}`}
                                type="number"
                                variant="outlined"
                                fullWidth
                                value={weight}
                                onChange={(e) => handleWeightChange(setNumber, e.target.value)}
                                InputProps={{
                                    endAdornment: <Typography variant="body2">kg</Typography>,
                                }}
                            />
                        </Grid>
                    ))}
                </Grid>
            </CardContent>
        </Card>
    );
};

const RoutineComponent = () => {
    const { updateWeight } = useContext(WorkoutContext);
    const [weights, setWeights] = useState({});

    const handleWeightChange = (exerciseId, weight) => {
        setWeights({ ...weights, [exerciseId]: weight });
    };

    const handleSave = () => {
        updateWeight(weights);
        addWorkout({ workoutDayNumber: 1, exercises: weights })
            .then(responseData => {
                console.log('Routine saved successfully:', responseData);
                // navigate('/');
            })
            .catch(error => {
                console.error('Error saving routine:', error);
            });
    };

    return (
        <Grid container spacing={2} sx={{ p: 3 }}>
            {routineMock.blocks.map(block => (
                <Grid item xs={12} key={block.id}>
                    {block.exercises.map(exercise => (
                        <ExerciseComponent
                            key={exercise.id}
                            exercise={exercise}
                            onWeightChange={handleWeightChange}
                        />
                    ))}
                </Grid>
            ))}
            <Button
                variant="contained"
                color="primary"
                onClick={handleSave}
                sx={{ mt: 2 }}
            >
                Save Routine
            </Button>
        </Grid>
    );
};

export default RoutineComponent;
