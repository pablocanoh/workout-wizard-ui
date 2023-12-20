import React, {useContext, useState} from 'react';
import {WorkoutContext} from './WorkoutContext';
import {Button, Card, CardContent, Divider, Grid, TextField, Typography} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import {routineMock} from "../../mock-data/mock-data";

const ExerciseComponent = ({ exercise }) => {
    const { weights, updateWeight } = useContext(WorkoutContext);
    const [localWeights, setLocalWeights] = useState(new Array(exercise.sets).fill(''));

    const handleWeightChange = (index, weight) => {
        const updatedWeights = [...localWeights];
        updatedWeights[index] = weight;
        setLocalWeights(updatedWeights);
    };

    const handleSave = () => {
        updateWeight(exercise.id, localWeights);
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
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<SaveIcon />}
                    onClick={handleSave}
                    sx={{ mt: 2 }}
                >
                    Save Weights
                </Button>
            </CardContent>
        </Card>
    );
};

const RoutineComponent = () => {
    return (
        <Grid container spacing={2} sx={{ p: 3 }}>
            {routineMock.blocks.map(block => (
                <Grid item xs={12} key={block.id}>
                    {block.exercises.map(exercise => (
                        <ExerciseComponent key={exercise.id} exercise={exercise} />
                    ))}
                </Grid>
            ))}
        </Grid>
    );
};

export default RoutineComponent;
