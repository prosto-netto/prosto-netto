import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ProfileContainer from './components/Profile/ProfileContainer'
import News from './components/News/News'
import Settings from './components/Settings/Settings'
import { SidebarContainer } from './components/Sidebar/SidebarContainer'
import { Music } from './components/Music/Music'
import { DialogsContainer } from './components/Dialogs/DialogsContainer'
import UsersContainer from './components/Users/UsersContainer'
import HeaderContainer from './components/Header/HeaderContainer'

export const App = () => {
  return (
    <div className='app'>
      <HeaderContainer />
      <SidebarContainer />
      <section className='app__content'>
        <Routes>
          <Route path='/profile/:userID?' element={<ProfileContainer />} />
          <Route path='/dialogs/*' element={<DialogsContainer />} />
          <Route path='/users' element={<UsersContainer />} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </section>
    </div>
  )
}