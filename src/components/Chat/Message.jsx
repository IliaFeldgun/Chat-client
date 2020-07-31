import React from 'react'

const Message = ({userName, message, timestamp}) => {
    return (
        <div>
            {userName}: {message} at {(new Date(timestamp)).toLocaleString()}
        </div>
    )
}

export default Message