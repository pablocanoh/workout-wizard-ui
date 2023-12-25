import React, {useContext, useState} from 'react';
import {WorkoutContext} from './WorkoutContext';
import {Button, Grid} from '@mui/material';
import {addWorkout, fetchWorkoutDiary} from "../routineService";
import {TrainingContext} from "../../routine-creation/components/TrainingContext";
import {useNavigate} from "react-router-dom";
import {ExerciseComponent} from "./ExerciseComponent";
import {fetchExercises} from "../../routine-creation/routineService";

const RoutineComponent = () => {
    const navigate = useNavigate();
    const { updateWeight, updateDiary } = useContext(WorkoutContext);
    const { trainingData } = useContext(TrainingContext);
    const [weights, setWeights] = useState({});
    const [workoutDay, setWorkoutDay] = useState(0);

    React.useEffect(() => {
        const loadDiary = async () => {
            const diary = await fetchWorkoutDiary();
            updateDiary(diary);

            if (diary.workouts.length > 0 && diary.workouts[diary.workouts.length -1].workoutDayNumber < trainingData.blocks.length - 1) {
                console.log('Workout day number:', diary.workouts[diary.workouts.length -1].workoutDayNumber + 1);
                setWorkoutDay(diary.workouts[diary.workouts.length -1].workoutDayNumber + 1)
            }

        };

        if (!trainingData) {
            navigate('/configure-routine');
        } else {
            loadDiary();
        }
    }, [])

    const handleWeightChange = (exerciseId, weight) => {
        setWeights({ ...weights, [exerciseId]: weight });
    };

    const handleSave = () => {
        updateWeight(weights);
        addWorkout({ workoutDayNumber: workoutDay, exercises: weights })
            .then(responseData => {
                console.log('Routine saved successfully:', responseData);
                navigate('/');
            })
            .catch(error => {
                console.error('Error saving routine:', error);
            });
    };

    return (trainingData && (
        <Grid container spacing={2} sx={{ p: 3 }}>
            <Grid item xs={12}>
                {trainingData.blocks[workoutDay].exercises.map(exercise => (
                    <ExerciseComponent
                        key={exercise.id}
                        exercise={exercise}
                        onWeightChange={handleWeightChange}
                    />
                ))}
            </Grid>
            <Button
                variant="contained"
                color="primary"
                onClick={handleSave}
                sx={{ mt: 2 }}
            >
                Save Routine
            </Button>
        </Grid>
    ));
};

export default RoutineComponent;
