export const registerUser = async (credentials) => {
    const response = await fetch('http://localhost:8082/users/register', {  // Replace with your actual API endpoint
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    });

    if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
    }

    return await response.json();  // Or handle the response data as needed
};

export const loginUser = async (credentials) => {
    const response = await fetch('http://localhost:8082/users/login', {  // Replace with your actual API endpoint
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    });

    if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
    }

    return await response.text();  // Or handle the response data as needed
};

