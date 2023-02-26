import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Container } from '@mui/material';
import { Button } from '@mui/material';
import { useState, useEffect, useRef } from 'react';
import { Grid } from '@mui/material';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import { color } from '@mui/system';
import { BorderAll } from '@mui/icons-material';

const selectionTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
          main: '#FFD700',
        },
        secondary: {
          main: '#000000',
        },
        background: {
          default: '#000000'
        },
    },

    typography: {
        fontFamily: 'Helvetica, sans-serif',
        fontSize: 15,
        

        h1: {
            color: 'red',
            fontSize: '10rem',
            fontWeight: 'bold'
        },
        h5: {
            color: 'red',
            fontSize: '10rem',
            fontWeight: 'bold'
        }
    }
})

const RoomSplit = ({ floor }: { floor: string }) => {
    switch (floor) {
        case '1':
            return (<><Rooms_F1 /></>)
        case '2':
            return (<><Rooms_F2 /></>)
        case '3':
            return (<><Rooms_F3 /></>)
        case '4':
            return (<><Rooms_F4 /></>)
        case '5':
            return (<><Rooms_F5 /></>)
        case '6':
            return (<><Rooms_F6 /></>)
        default:
            return (<><Rooms_DF /></>)
    }
}


const Selection = () => {
    const [floor, setFloor] = useState('');
    const handleChange = (event: SelectChangeEvent) => {
        setFloor(event.target.value as string);
    };
  
    return (
        <ThemeProvider theme={selectionTheme}>
            <Grid container spacing={2} bgcolor='primary'>
                
                <Grid item xs={6} sm={3}>
                    <Container >
                        <FormControl fullWidth sx={{
                            width: '150px',
                            color: 'primary.main',
                            border: '10px solidx blue'
                        }} margin='normal'>
                            <InputLabel id="Floor">Floor</InputLabel>
                            <Select
                            labelId="Floor-Label"
                            id="Floor-Id"
                            value={floor}
                            label="Floor"
                            onChange={handleChange}
                            >
                                <MenuItem value={'1'}>1층</MenuItem>
                                <MenuItem value={'2'}>2층</MenuItem>
                                <MenuItem value={'3'}>3층</MenuItem>
                                <MenuItem value={'4'}>4층</MenuItem>
                                <MenuItem value={'5'}>5층</MenuItem>
                                <MenuItem value={'6'}>6층</MenuItem>
                            </Select>
                        </FormControl >
                    </Container>
                    <RoomSplit floor={floor} />
                </Grid>


            </Grid>
            </ThemeProvider>
    );
}

const Rooms_DF = () => {
    const [room, setRoom] = useState('')
    const handleChange = (event: SelectChangeEvent) => {
        console.log("Rooms_F1, HandleChange")
        setRoom(event.target.value as string);
    };
      
    return (
        <Box sx={{ minWidth: 120 }}>
            <Container>
                <FormControl fullWidth sx={{ width: '150px' }}>
                    <InputLabel>Room</InputLabel>
                    <Select
                    label="Room"
                    >
                        <MenuItem>층수를 먼저 선택해주세요.</MenuItem>
                    </Select>
                </FormControl >
            </Container>
        </Box>
    );
}

const Rooms_F1 = () => {
    const [room, setRoom] = useState('')

    const handleChange = (event: SelectChangeEvent) => {
        console.log("Rooms_F1, HandleChange")
        setRoom(event.target.value as string);
    };
      
    return (
            <Container>
                <FormControl fullWidth sx={{ width: '150px' }}>
                    <InputLabel id="Rooms_F1">Room</InputLabel>
                    <Select
                    id="Rooms_F1"
                    value={room}
                    label="Room"
                    onChange={handleChange}
                    >
                        <MenuItem value={101}>101호</MenuItem>
                        <MenuItem value={102}>102호</MenuItem>
                        <MenuItem value={103}>103호</MenuItem>
                        <MenuItem value={104}>104호</MenuItem>
                        <MenuItem value={105}>105호</MenuItem>
                        <MenuItem value={106}>106호</MenuItem>
                    </Select>
                </FormControl >
            </Container>
    );
}

const Rooms_F2 = () => {
    const [room, setRoom] = useState('')

    const handleChange = (event: SelectChangeEvent) => {
        console.log("Rooms_F2, HandleChange")
        setRoom(event.target.value as string);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <Container>
                <FormControl fullWidth sx={{ width: '150px' }}>
                    <InputLabel id="Rooms_F2">Room</InputLabel>
                    <Select
                    labelId="Rooms_F2"
                    id="Rooms_F2"
                    value={room}
                    label="Room"
                    onChange={handleChange}
                    >
                        <MenuItem value={201}>201호</MenuItem>
                        <MenuItem value={202}>202호</MenuItem>
                        <MenuItem value={203}>203호</MenuItem>
                        <MenuItem value={204}>204호</MenuItem>
                        <MenuItem value={205}>205호</MenuItem>
                        <MenuItem value={206}>206호</MenuItem>
                    </Select>
                </FormControl >
            </Container>
        </Box>
    );
}

const Rooms_F3 = () => {
    const [room, setRoom] = useState('')

    const handleChange = (event: SelectChangeEvent) => {
        console.log("Rooms_F3, HandleChange")
        setRoom(event.target.value as string);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <Container>
                <FormControl fullWidth sx={{ width: '150px' }}>
                    <InputLabel id="Rooms_F3">Room</InputLabel>
                    <Select
                    labelId="Rooms_F3"
                    id="Rooms_F3"
                    value={room}
                    label="Room"
                    onChange={handleChange}
                    >
                        <MenuItem value={301}>301호</MenuItem>
                        <MenuItem value={302}>302호</MenuItem>
                        <MenuItem value={303}>303호</MenuItem>
                        <MenuItem value={304}>304호</MenuItem>
                        <MenuItem value={305}>305호</MenuItem>
                        <MenuItem value={306}>306호</MenuItem>
                    </Select>
                </FormControl >
            </Container>
        </Box>
    );
}

const Rooms_F4 = () => {
    const [room, setRoom] = useState('')

    const handleChange = (event: SelectChangeEvent) => {
        console.log("Rooms_F4, HandleChange")
        setRoom(event.target.value as string);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <Container>
                <FormControl fullWidth sx={{ width: '150px' }}>
                    <InputLabel id="Rooms_F4">Room</InputLabel>
                    <Select
                    labelId="Rooms_F4"
                    id="Rooms_F4"
                    value={room}
                    label="Room"
                    onChange={handleChange}
                    >
                        <MenuItem value={401}>401호</MenuItem>
                        <MenuItem value={402}>402호</MenuItem>
                        <MenuItem value={403}>403호</MenuItem>
                        <MenuItem value={404}>404호</MenuItem>
                        <MenuItem value={405}>405호</MenuItem>
                        <MenuItem value={406}>406호</MenuItem>
                    </Select>
                </FormControl >
            </Container>
        </Box>
    );
}

const Rooms_F5 = () => {
    const [room, setRoom] = useState('')

    const handleChange = (event: SelectChangeEvent) => {
        console.log("Rooms_F5, HandleChange")
        setRoom(event.target.value as string);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <Container>
                <FormControl fullWidth sx={{ width: '150px' }}>
                    <InputLabel id="Rooms_F5">Room</InputLabel>
                    <Select
                    labelId="Rooms_F5"
                    id="Rooms_F5"
                    value={room}
                    label="Room"
                    onChange={handleChange}
                    >
                        <MenuItem value={501}>501호</MenuItem>
                        <MenuItem value={502}>502호</MenuItem>
                        <MenuItem value={503}>503호</MenuItem>
                        <MenuItem value={504}>504호</MenuItem>
                        <MenuItem value={505}>505호</MenuItem>
                        <MenuItem value={506}>506호</MenuItem>
                    </Select>
                </FormControl >
            </Container>
        </Box>
    );
}

const Rooms_F6 = () => {
    const [room, setRoom] = useState('')

    const handleChange = (event: SelectChangeEvent) => {
        console.log("Rooms_F6, HandleChange")
        setRoom(event.target.value as string);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <Container>
                <FormControl fullWidth sx={{ width: '150px' }}>
                    <InputLabel id="Rooms_F6">Room</InputLabel>
                    <Select
                    labelId="Rooms_F6"
                    id="Rooms_F6"
                    value={room}
                    label="Room"
                    onChange={handleChange}
                    >
                        <MenuItem value={601}>601호</MenuItem>
                        <MenuItem value={602}>602호</MenuItem>
                        <MenuItem value={603}>603호</MenuItem>
                        <MenuItem value={604}>604호</MenuItem>
                        <MenuItem value={605}>605호</MenuItem>
                        <MenuItem value={606}>606호</MenuItem>
                    </Select>
                </FormControl >
            </Container>
        </Box>
    );
}



export default Selection