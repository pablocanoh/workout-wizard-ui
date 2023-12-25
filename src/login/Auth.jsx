import React, { useState } from 'react';
import { Button, TextField, Container, Typography, Box, Paper, FormGroup, FormControlLabel, Switch } from '@mui/material';
import {loginUser, registerUser} from "./service";

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true); // true para login, false para registry
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });

    React.useEffect(() => {
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
                alert('Usuario registrado correctamente. Por favor, inicia sesión.')
            }
        }).catch(() => {
            if (!isLogin) {
                alert('Usuario ya registrado. Por favor, inicia sesión.')
            } else {
                alert('Usuario o contraseña incorrectos.')
            }
        });
    };

    return (
        <Container component="main" maxWidth="xs">
            <Paper elevation={6} sx={{ mt: 8, p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography component="h1" variant="h5">
                    {isLogin ? 'Inicio de sesión' : 'Registro'}
                </Typography>
                <FormGroup>
                    <FormControlLabel
                        control={<Switch checked={isLogin} onChange={() => setIsLogin(!isLogin)} />}
                        label={isLogin ? '¿No tienes una cuenta? Regístrate' : '¿Ya tienes una cuenta? Inicia sesión'}
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
                        {isLogin ? 'Iniciar sesión' : 'Registrar'}
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
};

export default Auth;