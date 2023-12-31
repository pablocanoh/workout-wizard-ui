import React, { useContext } from 'react';
import {
    Grid, Paper, Typography, Box, AppBar, Toolbar, IconButton, Drawer,
    List, ListItem, ListItemIcon, ListItemText, Alert
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import TimelineIcon from '@mui/icons-material/Timeline';
import { useNavigate } from "react-router-dom";
import MyChart from './graphs/MyChart';
import { TrainingContext } from "./routine-creation/components/TrainingContext";

const Portal = () => {
    const { trainingData } = useContext(TrainingContext);
    const navigate = useNavigate();

    // Drawer state
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    React.useEffect(() => {

        if (!trainingData) {
            navigate('/configure-routine');
        }
    }, []);

    const handleDrawerToggle = () => {
        localStorage.setItem('user-knows-how-to-navigate', 'true');
        setDrawerOpen(!drawerOpen);
    };

    // Elementos del Drawer
    const drawerItems = (
        <div>
            <List>
                <ListItem button onClick={() => navigate("/configure-routine")}>
                    <ListItemIcon>
                        <FitnessCenterIcon />
                    </ListItemIcon>
                    <ListItemText primary="Configure Routine" />
                </ListItem>
                <ListItem button onClick={() => navigate("/workout-tracker")}>
                    <ListItemIcon>
                        <TimelineIcon />
                    </ListItemIcon>
                    <ListItemText primary="Workout Tracker" />
                </ListItem>
            </List>
        </div>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="temporary"
                open={drawerOpen}
                onClose={handleDrawerToggle}
            >
                {drawerItems}
            </Drawer>
            {!localStorage.getItem('user-knows-how-to-navigate') && <Alert severity="info">
                Welcome to the Dashboard! Click on the left menu to start adding or tracking your progress.
            </Alert>}
            <Grid container spacing={3} style={{ padding: '20px' }}>
                <Grid item xs={12}>
                    <Paper style={{ padding: '20px', minHeight: '300px' }}>
                        <Typography variant="h6" gutterBottom>
                            Progress Charts
                        </Typography>
                        <MyChart />
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Portal;
