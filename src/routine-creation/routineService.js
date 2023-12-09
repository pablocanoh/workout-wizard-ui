export const fetchRoutine = async (experienceLevel, daysPerWeek) => {
    try {
        const url = `http://localhost:8080/routine/suggest?experienceLevel=${experienceLevel}&daysPerWeek=${daysPerWeek}`;
        const response = await fetch(url);
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
        const url = `http://localhost:8080/routine/exercise`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const exerise = await response.json();
        return exerise;
    } catch (error) {
        console.error('There was an error fetching the routine:', error);
    }
}
