import React from 'react'
import './App.css'
import TopBar from './components/Header/TopBar'
import ChatContainer from './components/Chat/ChatContainer'
import MessagesContainer from './components/Chat/MessagesContainer';
import UsersContainer from './components/Chat/UsersContainer';

function App() {
  return (
    <React.Fragment>
      <TopBar />
      <ChatContainer>
        <MessagesContainer />
        <UsersContainer />
      </ChatContainer>
    </React.Fragment>
  )
}

export default App;
