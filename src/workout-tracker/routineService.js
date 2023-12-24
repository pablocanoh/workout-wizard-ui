export const addWorkout = async (routine) => {
    try {
        const response = await fetch('http://localhost:8084/api/workout', {  // Replace with your actual API endpoint
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
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
        const url = `http://localhost:8084/api/workout/diary/active`;
        const response = await fetch(url, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('There was an error fetching the workoutDiary:', error);
    }
};

