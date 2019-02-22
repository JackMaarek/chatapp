import React, { Component } from 'react';
import Sidebar from './Sidebar/Sidebar';
import Chat from './Chat/Chat'

class Dashboard extends Component {
  render() {
    const { messages } = this.props
    return (
      <div className='dashboard'>
        {/* <Sidebar /> */}
        <Chat messages={messages} />
      </div>
    );
  }
}

export default Dashboard;