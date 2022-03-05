import React from 'react'
import { Link } from 'react-router-dom'
import {AppBar, Typography, Button, Toolbar, Avatar} from '@material-ui/core'

import memory_card from '../../images/memory-card.png'
import useStyles from './styles'

const Navbar = () => {
  const classes = useStyles ();
  const user = null;

  return (
      <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer}>
          <Typography id="memories" className={classes.heading} variant="h2" align="center" component={Link} to="/">Memories</Typography>
          <img className={classes.image} src={memory_card} alt="memories" height="60"/>
        </div>
        <Toolbar className={classes.toolbar}>
          {user ? (
            <div className={classes.profile}>
              <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>
                {user.result.name.charAt(0)}
              </Avatar>
              <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
              <Button variant="contained" className={classes.logout} color="secondary">Logout</Button>
            </div>
          ) : (
            <Button component={Link} to="/auth" variant="contained" color="secondary">Sign In</Button>
          )}

        </Toolbar>
      </AppBar>
  )
}

export default Navbar
