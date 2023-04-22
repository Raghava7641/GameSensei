import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import ScoreSharpIcon from '@mui/icons-material/ScoreSharp'
import '../../Dash.css'
import axios from 'axios'
import DetailChart from '../../charts/column'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

// const id = '64290e8955fdab3055e01c0e'
// const { id } = useParams()

// const { data } = await axios.get(`http://localhost:7077/game/${id}`)
// console.log(data)

export default function Details() {
  const { id } = useParams()
  const [gameDetail, setGameDetail] = React.useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const { data } = await axios.get(`http://localhost:7077/game/${id}`)
    console.log(data)
    setGameDetail(data)
  }

  //   console.log(data)
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Stack spacing={2} direction="row">
            <Card sx={{ minWidth: '49%' }} className="gradinet">
              <CardContent>
                <div className="iconstyle1">
                  <ScoreSharpIcon />
                </div>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ color: '#ffffff' }}
                >
                  {gameDetail.User_Score}
                </Typography>
                <Typography
                  gutterBottom
                  variant="body2"
                  component="div"
                  sx={{ color: '#ccd1d1' }}
                >
                  User Rating
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ minWidth: '49%' }} className="gradinetlight">
              <CardContent>
                <div className="iconstyle1">
                  {' '}
                  <ScoreSharpIcon />
                </div>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ color: '#ffffff' }}
                >
                  {gameDetail.Critic_Score}
                </Typography>
                <Typography
                  gutterBottom
                  variant="body2"
                  component="div"
                  sx={{ color: '#ccd1d1' }}
                >
                  Critic Rating
                </Typography>
              </CardContent>
            </Card>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Stack spacing={2}>
            <Card sx={{ height: '9vh' }} className="gradinet">
              <Stack spacing={2} direction="row">
                <div className="iconstyle">
                  <SportsEsportsIcon />
                </div>
                <div className="paddingall">
                  <span className="pricesubtitle">Publisher</span>
                  <br />
                  <span className="pricetitle">{gameDetail.Publisher}</span>
                </div>
              </Stack>
            </Card>
            <Card sx={{ height: '9vh' }} className="gradinetlight">
              <Stack spacing={2} direction="row">
                <div className="iconstyle">
                  <SportsEsportsIcon />
                </div>
                <div className="paddingall">
                  <span className="pricesubtitle">Platform</span>
                  <br />
                  <span className="pricetitle">{gameDetail.Platform}</span>
                </div>
              </Stack>
            </Card>
            <Card sx={{ height: '9vh' }} className="gradinetdark">
              <Stack spacing={2} direction="row">
                <div className="iconstyle">
                  <SportsEsportsIcon />
                </div>
                <div className="paddingall">
                  <span className="pricesubtitle">Year of Release</span>
                  <br />
                  <span className="pricetitle">
                    {gameDetail.Year_of_Release}
                  </span>
                </div>
              </Stack>
            </Card>
            <Card sx={{ height: '9vh' }} className="gradinetbottom">
              <Stack spacing={2} direction="row">
                <div className="iconstyle">
                  <SportsEsportsIcon />
                </div>
                <div className="paddingall">
                  <span className="pricesubtitle">Genre</span>
                  <br />
                  <span className="pricetitle">{gameDetail.Genre}</span>
                </div>
              </Stack>
            </Card>
          </Stack>
        </Grid>
        <Box height={20} />
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Card sx={{ height: '60vh' }}>
              <CardContent>
                <DetailChart chartData={gameDetail} />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}
