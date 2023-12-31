import React, { useContext, useState } from 'react';
import { Button, TextField, Container, Typography, Box, Paper, FormGroup, FormControlLabel, Switch } from '@mui/material';
import { loginUser, registerUser } from "./service";
import { TrainingContext } from "../routine-creation/components/TrainingContext";

const Auth = () => {
    const { updateTrainingData } = useContext(TrainingContext);
    const [isLogin, setIsLogin] = useState(true);
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });

    React.useEffect(() => {
        updateTrainingData(null);
        localStorage.removeItem('token')
        localStorage.removeItem('trainingData')
    }, []);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const endpoint = isLogin ? loginUser : registerUser;
        return await endpoint(credentials).then((response) => {
            if (isLogin) {
                localStorage.setItem('token', response);
                window.location.href = '/';
            } else {
                setIsLogin(true);
                alert('User successfully registered. Please log in.')
            }
        }).catch(() => {
            if (!isLogin) {
                alert('User already registered. Please log in.')
            } else {
                alert('Incorrect username or password.')
            }
        });
    };

    return (
        <Container component="main" maxWidth="xs">
            <Paper elevation={6} sx={{ mt: 8, p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography component="h1" variant="h5">
                    {isLogin ? 'Log in' : 'Register'}
                </Typography>
                <FormGroup>
                    <FormControlLabel
                        control={<Switch checked={isLogin} onChange={() => setIsLogin(!isLogin)} />}
                        label={isLogin ? 'Don’t have an account? Register' : 'Already have an account? Log in'}
                    />
                </FormGroup>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Username"
                        name="username"
                        autoComplete="username"
                        value={credentials.username}
                        onChange={handleInputChange}
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        value={credentials.password}
                        onChange={handleInputChange}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        {isLogin ? 'Log in' : 'Register'}
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
};

export default Auth;