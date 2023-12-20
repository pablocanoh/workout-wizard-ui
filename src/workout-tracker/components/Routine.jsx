import React, {useContext, useState} from 'react';
import {WorkoutContext} from './WorkoutContext';
import {Button, Card, CardContent, Divider, Grid, TextField, Typography} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import {routineMock} from "../../mock-data/mock-data";

const ExerciseComponent = ({ exercise, onWeightChange }) => {
    const [localWeights, setLocalWeights] = useState(new Array(exercise.sets).fill(''));

    const handleWeightChange = (index, weight) => {
        const updatedWeights = [...localWeights];
        updatedWeights[index] = weight;
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
                    {localWeights.map((weight, index) => (
                        <Grid item xs={6} sm={4} md={3} key={index}>
                            <TextField
                                label={`Set ${index + 1}`}
                                type="number"
                                variant="outlined"
                                fullWidth
                                value={weight}
                                onChange={(e) => handleWeightChange(index, e.target.value)}
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
        Object.entries(weights).forEach(([exerciseId, weight]) => {
            updateWeight(exerciseId, weight);
        });
        console.log('Weights saved', weights);
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
