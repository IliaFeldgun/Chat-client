import React from 'react'
import { Dialog, DialogTitle, DialogContent} from '@material-ui/core'
import Socket from '../../api/socket'

const ErrorBox = () => {
    const [open, setOpen] = React.useState(false)
    const [error, setError] = React.useState('')

    React.useEffect(() => {
        Socket.registerToError((error) => {
            setError(error)
            setOpen(true)
        })
    }, [])

    const toggleDialog = (isOpen) => {
        setOpen(isOpen)
    }
    return (
        <Dialog open={open} onClose={() => toggleDialog(false)}>
            <DialogTitle>Error</DialogTitle>
            <DialogContent>
                {error}
            </DialogContent>
        </Dialog>
    )
}
export default ErrorBox