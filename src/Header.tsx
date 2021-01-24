import { AppBar, Toolbar, IconButton, Typography, Button} from "@material-ui/core";
import { Apple } from "@material-ui/icons";
import React from "react";

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="apple">
                    <Apple />
                </IconButton>
                <Typography variant="h6" >
                    News
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Header;