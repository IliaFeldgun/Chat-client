import React from 'react'
import { Dialog, DialogTitle, DialogContent} from '@material-ui/core'

import LoginForm from '../LoginForm'

const Login = ({open, onClose}) => {
    const toggleDialog = (shouldShow) => {
        onClose()
    }

    return (
        <Dialog open={open} onClose={() => toggleDialog(false)}>
            <DialogTitle>Login</DialogTitle>
            <DialogContent>
                <LoginForm/>
            </DialogContent>
        </Dialog>
    )
}

export default Login