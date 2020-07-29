import React from 'react'

const Users = ({users}) => {
    return (
        users.map((user) => {
            return <div key={user}>{user}</div>
        })
    )
}

export default Users