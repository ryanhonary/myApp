import { AppBar, Toolbar, IconButton, Typography, Button, Snackbar } from "@material-ui/core";
import { Apple } from "@material-ui/icons";
import React from "react";

export interface HeaderProps {
    count: number,
    incrementClickCount: () => void,
    potatoCounter: () => void,
    potatoPicker: number
}

const Header = (props: HeaderProps) => {
    const { count, incrementClickCount, potatoCounter, potatoPicker } = props; // props.count or props.incrementClickCount()
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="apple">
                    <Apple />
                </IconButton>
                <Typography variant="h6" >
                    News
                </Typography>
                {/* <Button color="inherit">Login</Button> */}
                {/* <Button color="inherit">Smack!</Button> */}
                {/* <Button color="inherit"><Apple /></Button> */}
                {/* <Button>default</Button> */}
                {/* <Button color="secondary">I AM PINK</Button> */}
                {/* <Button variant="outlined">I AM OUTLINED</Button> */}
                {/* <Button disabled>I AM DISABLED</Button> */}
                <Button disabled={count > 10} onClick={() => incrementClickCount()}>
                    NEW BUTTON: {count}
                </Button>
                <Button onClick={() => potatoCounter()}>
                    Potatos clicked: {potatoPicker}
                </Button>
                <Snackbar open={potatoPicker===12} message='You have achieved an upgrade!'></Snackbar>
                <Snackbar open={potatoPicker===20 && count===10} message='YOU WIN!'></Snackbar>
            </Toolbar>
        </AppBar>
    )
}



export default Header;






//1. Make a potato counter function
	//2. useState to make a potatoCount variable
	//3. Every click is +2 potatoes
//When 12 potatoes are ready, create a Material UI <Snackbar> that pops up saying "12 Potatoes Read"