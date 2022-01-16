import React, {useState, useEffect} from 'react'
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import {useDispatch} from 'react-redux'
import getPosts from './actions/posts'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import memory_card from './images/memory-card.png'
import useStyles from './styles'
import ParticlesBg from 'particles-bg'

const App = () => {

  // Grab the ID from App.js because it is the parent to both Form.js and Post.js

  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null)

  useEffect(()=> {dispatch(getPosts())}, [currentId,dispatch])

  return(
    
    <Container maxWidth="lg">
      <ParticlesBg color="#66b3ff" type="cobweb" bg={true} />
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography id="memories" className={classes.heading} variant="h2" align="center">Memories</Typography>
        <img className={classes.image} src={memory_card} alt="memories" height="60"/>
      </AppBar>
      <Grow in>
      <Grid className={classes.mainContainer} container  justifyContent="space-between" alignItems="stretch" spacing={3}>
        <Grid item xs={12} sm={7}>
          <Posts setCurrentId={setCurrentId}/>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Form currentId = {currentId} setCurrentId={setCurrentId} />
        </Grid>
      </Grid>
    </Grow>
    </Container>
  )
}

export default App