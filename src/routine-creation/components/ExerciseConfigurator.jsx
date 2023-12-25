import React, { useContext } from 'react';
import { Button, Grid, MenuItem, TextField } from '@mui/material';
import { TrainingContext } from "./TrainingContext";

const ExerciseConfigurator = ({ exercise, onExerciseChange, onRemove, allowRemove }) => {
    const { exercisesSample } = useContext(TrainingContext);
    const exerciseTypes = Object.keys(exercisesSample);

    const onSetChange = e => {
        if (e.target.value <= 1) {
            e.target.value = 1;
        }

        onExerciseChange('sets', e.target.value);
    };

    return (
        <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={4}>
                <TextField
                    select
                    label="Tipo"
                    value={exercise.type}
                    onChange={(e) => onExerciseChange('type', e.target.value)}
                    fullWidth
                >
                    {exerciseTypes.map((type) => (
                        <MenuItem key={type} value={type}>
                            {type}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextField
                    select
                    label="Ejercicio"
                    value={exercise.name}
                    onChange={(e) => onExerciseChange('name', e.target.value)}
                    fullWidth
                    disabled={!exercise.type}  // Disable if no type has been selected
                >
                    {exercise.type && exercisesSample[exercise.type]?.map((ex, index) => (
                        <MenuItem key={index} value={ex.name}>
                            {ex.name}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
            <Grid item xs={6} sm={4}>
                <TextField
                    label="Series"
                    type="number"
                    value={exercise.sets}
                    onChange={(e) => onSetChange(e)}
                    fullWidth
                />
            </Grid>
            <Grid item xs={6} sm={4}>
                { allowRemove && <Button variant="outlined" color="secondary" onClick={onRemove}>
                    Eliminar Ejercicio
                </Button> }
            </Grid>
        </Grid>
    );
};

export default ExerciseConfigurator;
