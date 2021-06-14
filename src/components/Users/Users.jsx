import React from 'react'
import s from './Users.module.css'
import emptyPhoto from '../../assets/images/empty.jpeg'
import {NavLink} from 'react-router-dom'
import * as axios from 'axios'

let Users = (props) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = [...Array(pagesCount).keys()].map((v) => v + 1)
    const pagesToDisplay = pages.map((p) => (
        <span
            className={props.currentPage === p && s.selectedPage}
            onClick={() => {
                props.onPageChanged(p)
            }}>
            {p}
        </span>
    ))

    const usersToDisplay = props.users.map((u) => (
        <div key={u.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img className={s.photo} src={u.photos.small !== null ? u.photos.small : emptyPhoto} alt='' />
                    </NavLink>
                </div>
            </span>
            <div>
                {u.followed ? (
                    <button
                        onClick={() => {
                            axios
                                .delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '815906c6-b718-4f56-b3f0-1350b2b55765',
                                    },
                                })
                                .then((response) => {
                                    if (response.data.resultCode === 0) {
                                        props.unfollow(u.id)
                                    }
                                })
                        }}>
                        UnFollow
                    </button>
                ) : (
                    <button
                        onClick={() => {
                            axios
                                .post(
                                    `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                    {},
                                    {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': '815906c6-b718-4f56-b3f0-1350b2b55765',
                                        },
                                    }
                                )
                                .then((response) => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(u.id)
                                    }
                                })
                        }}>
                        Follow
                    </button>
                )}
            </div>
            <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
            </span>
        </div>
    ))

    return (
        <div>
            <div className={s.scrollBar}>{pagesToDisplay}</div>
            <div>{usersToDisplay}</div>
        </div>
    )
}

export default Users
