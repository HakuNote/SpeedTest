import { useState, useEffect, Fragment} from "react"

import { Button, Grid, Paper, Box, ButtonGroup } from "@mui/material";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Selection from "./Selection";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#FFD700',
        },
        secondary: {
            main: '#C0C0C0',
        },
    },

    typography: {
        fontFamily: 'Open Sans, sans-serif',
        fontSize: 30,

        h1: {
            fontSize: '10rem',
            fontWeight: 'bold'
        }
    }
})

const Aria = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <Button
                aria-controls="menu"
                aria-expanded={false}
                variant="contained"
                color="primary"
            >
                ToggleMenu
            </Button>
            <ul id="menu" style={{ visibility: 'hidden' }}>
                <li>Menu Item 1</li>
                <li>Menu Item 2</li>
                <li>Menu Item 3</li>
            </ul>
        </ThemeProvider>
    )
}

const BApp = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <ButtonGroup>
                <Button variant="contained" color="primary">
                    PrimaryButton
                </Button>
                <Button variant="contained" color="secondary">
                    Secondary Button
                </Button>
            </ButtonGroup>
        </ThemeProvider>
    )
}

const Mui = () => {

    return (
        <>
            안녕하세요 엠유아이입니다.
            <Aria />
        </>
    )

}

export default Mui
