import React from 'react'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Users from './Users'
const useStyles = makeStyles((theme) => ({
    users: {
        backgroundColor: "whitesmoke",
        flex: "30%",
        position: "relative",
        height: "100%"
    }
}));

const UsersContainer = () => {
    const classes = useStyles()
    let users = ["Ilia", "David", "Ariel"]
    return (
        <Container component="span" className={classes.users}>
            <Users users={users} />
        </Container>
    )
}

export default UsersContainer