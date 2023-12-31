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

    const passwordHelpText = "Your password must be at least 5 characters long and include both letters and numbers.Your password must be at least 5 characters long and include both letters and numbers.";

    const handleSubmit = async (event) => {
        event.preventDefault();
        const endpoint = isLogin ? loginUser : registerUser;
        return await endpoint(credentials).then((response) => {
            if (isLogin) {
                if (response.state === 'INVALID_CREDENTIALS') {
                    alert('Incorrect username or password.')
                } else if (response.state === 'LOGIN_BLOCKED_FOR_MANY_ATTEMPTS') {
                    alert('Login blocked for many attempts. Please try again later.')
                } else if (response.state === 'SUCCESS') {
                    localStorage.setItem('token', response.token);
                    window.location.href = '/';
                }
            } else {
                if (response === 'SUCCESS') {
                    setIsLogin(true);
                    alert('User successfully registered. Please log in.')
                } else if (response === 'USERNAME_ALREADY_EXISTS') {
                    alert('User already registered. Please log in.');
                } else if (response === 'PASSWORD_INCORRECT_FORMAT') {
                    alert('Your password should be 8-20 characters long, include at least one uppercase letter,' +
                        ' one lowercase letter, one digit, and one special character (@#$%^&+=). It should not contain any whitespace.');
                }
            }
        }).catch(e => {
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
                        helperText={!isLogin ? passwordHelpText : ''}
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