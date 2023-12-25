export const getInsights = async () => {
    try {
        const url = `${process.env.REACT_APP_GATEWAY_API}/api/insights`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            },
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('There was an error fetching the insights:', error);
    }
};

