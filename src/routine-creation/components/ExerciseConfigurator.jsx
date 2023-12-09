import React, {useContext, useEffect, useLayoutEffect, useState} from 'react';
import { Button, Grid, MenuItem, TextField } from '@mui/material';
import {fetchExercises} from "../routineService";
import {TrainingContext} from "./TrainingContext";

const ExerciseConfigurator = ({ exercise, onExerciseChange, onRemove }) => {
    const { exercisesSample } = useContext(TrainingContext);
    const exerciseTypes = Object.keys(exercisesSample);

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
                    disabled={!exercise.type}  // Deshabilita si no se ha seleccionado un tipo
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
                    value={exercise.series}
                    onChange={(e) => onExerciseChange('series', e.target.value)}
                    fullWidth
                />
            </Grid>
            <Grid item xs={6} sm={4}>
                <TextField
                    label="Repeticiones"
                    type="number"
                    value={exercise.reps}
                    onChange={(e) => onExerciseChange('reps', e.target.value)}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12}>
                <Button onClick={onRemove} color="secondary">
                    Eliminar Ejercicio
                </Button>
            </Grid>

        </Grid>
    );
};

export default ExerciseConfigurator;
