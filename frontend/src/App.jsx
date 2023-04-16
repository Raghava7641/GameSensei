import { useState, useEffect } from 'react'
import './App.css'

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Rating,
  Box,
  Container,
  Grid,
  Skeleton,
} from '@mui/material'

import { sampleApiCall } from './services/gamesApi'

function App() {
  const [games, setGames] = useState([])

  useEffect(() => {
    async function fetchData() {
      const data = await sampleApiCall()
      setGames(data)
    }
    fetchData()
  }, [])

  return (
    <div className="App">
      <Container>
        <Typography variant="h1" component="h1" my={2}>
          Game Sensei
        </Typography>
        <Box>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {games.length !== 0 ? (
              games.map((game) => (
                <Grid item xs={12} sm={6} md={6} lg={4} key={game?._id}>
                  <Card sx={{ minHeight: 340 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={game?.imageLink}
                        alt={game?.Name}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {game?.Name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Year: {game?.Year_of_Release}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Rating: {game?.Critic_Score / 10}
                        </Typography>
                        <Rating
                          name="customized-10"
                          value={game?.Critic_Score / 10}
                          readOnly
                          max={10}
                        />
                        <Typography variant="body2" color="text.secondary">
                          Platform: {game.Platform}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))
            ) : (
              <Grid container spacing={3}>
                {Array.from(Array(20)).map((_, index) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                    <Skeleton variant="rectangular" height={250} />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                  </Grid>
                ))}
              </Grid>
            )}
          </Grid>
        </Box>
      </Container>
    </div>
  )
}

export default App
