import React from 'react'
import s from './Users.module.css'
import emptyPhoto from '../../assets/images/empty.jpeg'
import {NavLink} from 'react-router-dom'

let Users = (props) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = [...Array(pagesCount).keys()].map((v) => v + 1)
    debugger
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
                        disabled={props.followingInProgress.some((id) => id === u.id)}
                        onClick={() => {
                            props.unfollow(u.id)
                        }}>
                        UnFollow
                    </button>
                ) : (
                    <button
                        disabled={props.followingInProgress.some((id) => id === u.id)}
                        onClick={() => {
                            props.follow(u.id)
                        }}>
                        Follow
                    </button>
                )}
            </div>

            <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
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
