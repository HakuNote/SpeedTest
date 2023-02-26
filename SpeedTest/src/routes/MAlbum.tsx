import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FiberManualRecord } from '@mui/icons-material';
import { fontWeight } from '@mui/system';
import Selection from "./Selection";

const darkTheme = createTheme({
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

    body1: {
      fontFamily: 'Helvetica',
      fontSize: '2rem',
      fontWeight: 350,
      letterSpacing: '0.1rem',
    },
  },

  
})


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const SAppBar = () => {
  return (
    <ThemeProvider theme={darkTheme}>
        <AppBar position="relative" color='secondary' sx={{boxShadow: 'none', mt:0, mb: 0}}>
          <Toolbar sx={{ justifyContent: 'center', pt: 2, pb: 2}} >
            <FiberManualRecord color='primary' sx={{ mr: 2}} />
            <Typography variant='body1' color="primary" >
              CNU 공대5호관 WIFI 속도측정
            </Typography>
          </Toolbar>
        </AppBar>
    </ThemeProvider>
  )
}

const Summary = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{
        bgcolor: 'background.default',
        pt: 5,
        pb: 5,
      }}
      >
        <Container maxWidth="md">
          <Typography
            component="h1"
            variant="body1"
            align="center"
            color="primary"
            fontWeight="350"
            gutterBottom
          >
            사용방법
          </Typography>
          <Typography variant="h5" align="center" color="primary" paragraph>
            공대 5호관의 WIFI 속도 측정을 위해 설계되었으며{<br />}
            층수와 호수를 선택한다음 시작버튼을 눌러주세요.
          </Typography>
        </Container>
      </Box>
    </ThemeProvider>  
  )
}

const SecondBox = () => {
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
    </Container>
  )
}

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
    <Typography variant="h6" align="center" gutterBottom>
      Footer
    </Typography>
    <Typography
      variant="subtitle1"
      align="center"
      color="text.primary"
      component="p"
    >
      Something here to give the footer a purpose!
    </Typography>
    <Copyright />
  </Box>
  )
}

const V2 = () => {

  return (
    <ThemeProvider theme={darkTheme}>
      <Selection />
    </ThemeProvider>
  )
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];


const MAlbum = () => {
  return (
    <>
      
      <CssBaseline />

      <SAppBar />
      <Summary />
      <br />
      <Selection />
      <Selection />
      
      <Footer />
    </>
  );
}



export default MAlbum