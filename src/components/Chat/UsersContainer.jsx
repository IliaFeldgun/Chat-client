import React from 'react'
import { Container, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Users from './Users'
import Socket from '../../api/socket'

const useStyles = makeStyles((theme) => ({
    users: {
        marginTop: "10px"
    }
}));

const UsersContainer = () => {
    const classes = useStyles()
    const [users, setUsers] = React.useState([])
    
    React.useEffect(() => {
        Socket.registerToUsers((users) => {
            setUsers(users)
        })
    }, [])

    return (
        <Container component="span" className={classes.users}>
            Users
            <Divider />
            <Users users={users} />
        </Container>
    )
}

export default UsersContainer