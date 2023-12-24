export const fetchRoutine = async (experienceLevel, daysPerWeek) => {
    try {
        const url = `http://localhost:8084/api/routine/suggest?experienceLevel=${experienceLevel}&daysPerWeek=${daysPerWeek}`;
        const response = await fetch(url, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const routine = await response.json();
        return routine;
    } catch (error) {
        console.error('There was an error fetching the routine:', error);
    }
};

export const fetchExercises = async () => {
    try {
        const url = `http://localhost:8084/api/routine/exercise`;
        const response = await fetch(url, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const exerise = await response.json();
        return exerise;
    } catch (error) {
        console.error('There was an error fetching the routine:', error);
    }
}

export const saveRoutine = async (routine) => {
    try {
        const response = await fetch('http://localhost:8084/api/routine', {  // Replace with your actual API endpoint
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(routine)
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const responseData = await response.json();
        return responseData;  // Or handle the response data as needed
    } catch (error) {
        console.error('There was an error saving the routine:', error);
    }
};

export const getLatestRoutine = async () => {
    try {
        const url = `http://localhost:8084/api/routine/latest`;
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
        console.error('There was an error fetching the routine:', error);
    }
};

