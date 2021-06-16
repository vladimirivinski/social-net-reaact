import React from 'react'
import {connect} from 'react-redux'
import News from './News'

class NewsAPIContainer extends React.Component {
    componentDidMount() {}
    render() {
        return <News />
    }
}

let mapStateToProps = (state) => {
    return
}

const NewsContainer = connect(mapStateToProps, {})(NewsAPIContainer)
export default NewsContainer
