import React, { Component } from 'react';

import SidebarHeader from './SidebarHeader/SidebarHeader'
import SidebarList from './SidebarList/SidebarList'
import SidebarListItemRoom from './SidebarList/SidebarListItemRoom/SidebarListItemRoom'
import SidebarListItemUser from './SidebarList/SidebarListItemUser/SidebarListItemUser'

class Sidebar extends Component {
  render() {
    return (
      <div className='sidebar'>
        <SidebarHeader />
        <SidebarList title='Chaînes'>
          {/* Boucle on rooms */}
          <SidebarListItemRoom lock={true} />
        </SidebarList>
        <SidebarList title='Messages directs'>
          {/* Boucle on users */}
          <SidebarListItemUser />
        </SidebarList>
      </div>
    );
  }
}

export default Sidebar;