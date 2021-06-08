import React from 'react'
import s from './Users.module.css'

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoURL: 'https://pbs.twimg.com/profile_images/2881220369/2b27ac38b43b17a8c5eacfc443ce3384_400x400.jpeg',
                followed: true,
                fullName: 'Vladimir',
                status: 'Like a boss!',
                location: {city: 'Minsk', country: 'Belarus'},
            },
            {
                id: 2,
                photoURL: 'https://pbs.twimg.com/profile_images/2881220369/2b27ac38b43b17a8c5eacfc443ce3384_400x400.jpeg',
                followed: true,
                fullName: 'Max',
                status: 'Forever free',
                location: {city: 'Praha', country: 'Chech Republic'},
            },
            {
                id: 3,
                photoURL: 'https://pbs.twimg.com/profile_images/2881220369/2b27ac38b43b17a8c5eacfc443ce3384_400x400.jpeg',
                followed: false,
                fullName: 'Oleg',
                status: 'Forever free for all',
                location: {city: 'Moscow', country: 'Russia'},
            },
        ])
    }
    return (
        <div>
            {props.users.map((u) => (
                <div key={u.id}>
                    <span>
                        <div>
                            <img className={s.photo} src={u.photoURL} alt='' />
                        </div>
                        <div>
                            {u.followed ? (
                                <button
                                    onClick={() => {
                                        props.unfollow(u.id)
                                    }}>
                                    Unfollow
                                </button>
                            ) : (
                                <button
                                    onClick={() => {
                                        props.follow(u.id)
                                    }}>
                                    Follow
                                </button>
                            )}
                        </div>
                    </span>

                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>
            ))}
        </div>
    )
}

export default Users
