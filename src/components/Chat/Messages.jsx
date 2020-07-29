import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    messages: {
        //order: 1
    }
}))

const Messages = ({messages}) => {
    const classes = useStyles()

    return (
        <React.Fragment className={classes.messages}>
            {
                messages.map((message) => {
                    return <div key={message}>{message}</div>
                })
            }
        </React.Fragment>
    )
}
export default Messages