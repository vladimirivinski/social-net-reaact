import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div>
            <img
                className={s.image}
                src='https://sites.psu.edu/siowfa16/files/2016/10/YeDYzSR-10apkm4.png'
                alt=' '
            />
            <div id={props.id}> {props.name} </div>
            <span>{'Like: ' + props.likeCount}</span>
        </div>
    )
}

export default Post
