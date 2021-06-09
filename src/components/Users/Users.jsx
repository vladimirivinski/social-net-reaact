import React from 'react'
import s from './Users.module.css'
import emptyPhoto from '../../assets/images/empty.jpeg'

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div className={s.scrollBar}>
                {pages.map((p) => (
                    <span
                        className={props.currentPage === p && s.selectedPage}
                        onClick={() => {
                            props.onPageChanged(p)
                        }}>
                        {p}
                    </span>
                ))}
            </div>
            {props.users.map((u) => (
                <div key={u.id}>
                    <span>
                        <div>
                            <img className={s.photo} src={u.photos.small !== null ? u.photos.small : emptyPhoto} alt='' />
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
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            {/* <div>{u.location.country}</div>
                            <div>{u.location.city}</div> */}
                        </span>
                    </span>
                </div>
            ))}
        </div>
    )
}

export default Users
