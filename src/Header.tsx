import { AppBar, Toolbar, IconButton, Typography, Button } from "@material-ui/core";
import { Apple } from "@material-ui/icons";
import React from "react";

export interface HeaderProps {
    count: number,
    incrementClickCount: () => void,
}

const Header = (props: HeaderProps) => {
    const { count, incrementClickCount } = props; // props.count or props.incrementClickCount()
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
                <Button color="inherit">Smack!</Button>
                <Button color="inherit"><Apple /></Button>
                <Button>default</Button>
                <Button color="secondary">I AM PINK</Button>
                <Button variant="outlined">I AM OUTLINED</Button>
                <Button disabled>I AM DISABLED</Button>
                <Button
                    color="secondary"
                    variant="outlined"
                    size="large"
                    disabled={count > 10}
                    onClick={() => incrementClickCount()}
                >
                    NEW BUTTON: {count}
                </Button>
            </Toolbar>
        </AppBar>
    )
}



export default Header;