import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import gta from '../images/gta.jpg'
import { useState,useContext } from 'react';
import { redirect,Navigate } from 'react-router-dom';
import GameContext from '../context/GameContext';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',

  },
});

let theme = createTheme({
  palette: {
    primary: {
      main: '#1e293b',
    },
    secondary: {
      main: '#1f2937',
    },
  },
});
// const theme = createTheme();
// const theme = createTheme({
//     palette: {
//       primary: {
//         main: '#334155',
//       },
//     },
//   });

export default function SignIn() {

    const {setLogin,setLanding,setSearch}=useContext(GameContext)
    const [isauthenticated,setIsauthenticated]=useState(false)
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsauthenticated(true)
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
  };

  if(isauthenticated){
    setLogin(false)
    setLanding(true)
    setSearch(false)
    return <Navigate to='/dashbord/'/>
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ width: "150vh", height: "70vh", overflow: "hidden"}}>
      {/* <Grid container component="main" sx={{ height: "90vh"}}> */}
        <CssBaseline />
        <Grid
          item
          xs={12}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${gta})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                onClick={handleSubmit}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}