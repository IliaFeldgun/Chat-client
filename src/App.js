import React from 'react'
import {Box} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import TopBar from './components/Header/TopBar'
import ChatContainer from './components/Chat/ChatContainer'
import MessagesContainer from './components/Chat/MessagesContainer';
import UsersContainer from './components/Chat/UsersContainer';
import ErrorBox from './components/General/ErrorBox'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    display: 'flex',
    flexDirection: 'column'
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
      <ErrorBox />
    </Box>
  )
}

export default App;
