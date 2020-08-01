import React from 'react'
import {Snackbar} from '@material-ui/core'

import Session from '../../engine/Session'

const LoginSnackbar = () => {
    const [open, setOpen] = React.useState(false)

    React.useEffect(() => {
        const userName = Session.getSession()
        if (userName === '' || !userName) {
            setOpen(true)
        }
    }, [open])
    
    React.useEffect(() => {
        Session.registerToLogin(() => {
            setOpen(false)
        })
    }, [])

    const anchorOrigin = {vertical: 'bottom', horizontal: 'center'}

    return (
        <Snackbar
            anchorOrigin={anchorOrigin}
            open={open}
            message="Login to start chatting"
        />
    )
}

export default LoginSnackbar