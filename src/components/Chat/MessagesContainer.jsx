import React from 'react'
import { Container, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Messages from './Messages'
import MessageInput from './MessageInput'

const useStyles = makeStyles((theme) => ({
    container: {
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        flexBasis: '100%',
        backgroundColor: 'whitesmoke',
        paddingRight: '0'
    }
}));

const MessagesContainer = () => {
    const classes = useStyles()

    return (
        <Container component='span' className={classes.container}>
            <Messages />
            <Divider />
            <MessageInput />
        </Container>
    )
}

export default MessagesContainer