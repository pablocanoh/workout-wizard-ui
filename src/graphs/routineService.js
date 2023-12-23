export const getInsights = async () => {
    try {
        const url = `http://localhost:8080/insights`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('There was an error fetching the insights:', error);
    }
};

