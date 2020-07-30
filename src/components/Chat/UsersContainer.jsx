import React from 'react'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Users from './Users'
import Socket from '../../api/socket'

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
    const [users, setUsers] = React.useState([])
    
    React.useEffect(() => {
        Socket.registerToUsers((users) => {
            setUsers(users)
        })
    })

    return (
        <Container component="span" className={classes.users}>
            <Users users={users} />
        </Container>
    )
}

export default UsersContainer