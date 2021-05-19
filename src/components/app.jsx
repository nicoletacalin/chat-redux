import React from 'react';
import GroupList from '../containers/group_list';
import MessageList from '../containers/message_list';

const App = () => {
  return (
    <div className="app">
      <div className="logo-container">
        <img className="logo" src="assets/images/logo.svg" alt="logo" />
      </div>
      <GroupList />
      <MessageList/>
    </div>
  );
};

export default App;
