// import react from 'react'
import {Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import DialogsContainer from './components/Dialog/DialogsContainer'
import UsersContainer from './components/Users/UsersContainer'
import NewsContainer from './components/News/NewsContainer'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import ProfileContainer from './components/Profile/ProfileContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import Login from './components/Login/Login'

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer />
            <Navbar />
            <div className='app-wrapper-content'>
                <Route path='/profile/:userId?' render={() => <ProfileContainer store={props.store} />} />
                <Route path='/message' render={() => <DialogsContainer store={props.store} />} />
                <Route path='/users' render={() => <UsersContainer store={props.store} />} />
                <Route path='/news' render={() => <NewsContainer store={props.store} />} />
                <Route path='/music' render={Music} />
                <Route path='/settings' render={Settings} />
                <Route path='/login' render={Login} />
            </div>
        </div>
    )
}

export default App
