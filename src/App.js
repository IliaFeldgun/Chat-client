import React from 'react'
import {Box} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import TopBar from './components/Header/TopBar'
import ChatContainer from './components/Chat/ChatContainer'
import MessagesContainer from './components/Chat/MessagesContainer';
import UsersContainer from './components/Chat/UsersContainer';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: 'absolute',
    overflow: 'hidden',
    width: '100%',
    height: '100%'
  }
}))

function App() {
  const classes = useStyles()

  return (
    <Box className={classes.wrapper}>
      <TopBar />
      <ChatContainer>
        <UsersContainer />
        <MessagesContainer />
      </ChatContainer>
    </Box>
  )
}

export default App;
