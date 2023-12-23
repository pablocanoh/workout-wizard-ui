import React from 'react';
import { Button, Grid, Paper, Typography, Box, AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import TimelineIcon from '@mui/icons-material/Timeline';
import { useNavigate } from "react-router-dom";

const Portal = () => {
    const navigate = useNavigate();

    // Drawer state
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    // Navigation items for the drawer
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
            <Grid container spacing={3} style={{ padding: '20px' }}>
                {/* Espacio reservado para futuros gráficos */}
                <Grid item xs={12}>
                    <Paper style={{ padding: '20px', minHeight: '300px' }}>
                        <Typography variant="h6" gutterBottom>
                            Progress Charts (Coming Soon)
                        </Typography>
                        {/* Aquí irán los gráficos */}
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Portal;
