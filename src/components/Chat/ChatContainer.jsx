import React from 'react'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    chat: {
        display: "flex",
        height: "100%"
    }
}));
const ChatContainer = ({children}) => {
    const classes = useStyles()
    return (
        <Box className={classes.chat}>
            {children}
        </Box>
    )
}

export default ChatContainer