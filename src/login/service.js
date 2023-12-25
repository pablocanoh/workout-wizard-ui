export const registerUser = async (credentials) => {
    const response = await fetch(`${process.env.REACT_APP_USER_API}/users/register`, {
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
    const response = await fetch(`${process.env.REACT_APP_USER_API}/users/login`, {
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

