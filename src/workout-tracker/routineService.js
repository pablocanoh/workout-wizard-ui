export const addWorkout = async (routine) => {
    try {
        const response = await fetch('http://localhost:8080/workout', {  // Replace with your actual API endpoint
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(routine)
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('There was an error adding the workout:', error);
    }
};

export const fetchWorkoutDiary = async () => {
    try {
        const url = `http://localhost:8080/workout/diary/active`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('There was an error fetching the workoutDiary:', error);
    }
};

