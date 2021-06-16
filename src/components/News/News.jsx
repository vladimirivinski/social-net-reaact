import React from 'react'
import s from './News.module.css'

const News = (props) => {
    return (
        <div>
            <div className={s.item}>News</div>
            <div>
                <div>Заголовок</div>
                <div>Тело поста</div>
            </div>
        </div>
    )
}

export default News
