import React from 'react'

const Message = ({userName, message, timestamp}) => {
    return (
        <div>
            {userName}: {message} at {timestamp}
        </div>
    )
}

export default Message