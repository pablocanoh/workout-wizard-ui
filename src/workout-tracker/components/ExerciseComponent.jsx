import React, {useState} from "react";
import {Card, CardContent, Divider, Grid, TextField, Typography} from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

export const ExerciseComponent = ({ exercise, onWeightChange }) => {
    const initialWeights = Object.fromEntries(
        Array.from({ length: exercise.sets }, (_, i) => [i + 1, 0])
    );
    const [localWeights, setLocalWeights] = useState(initialWeights);

    const handleWeightChange = (setNumber, weight) => {
        if (weight < 0) {
            weight = 0;
        }
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
                                label={`Set ${setNumber }`}
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